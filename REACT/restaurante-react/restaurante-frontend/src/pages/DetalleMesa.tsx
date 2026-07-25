import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import type { Mesa } from "../types";
import { getMesas } from "../services/api";

export default function DetalleMesa() {
    const { mesaId } = useParams<{ mesaId: string }>();
    const navigate = useNavigate();
    const [mesa, setMesa] = useState<Mesa | null>(null);
    const [cargando, setCargando] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if (!mesaId){
            navigate("/mesas");
            return;
        }
        const cargarDetalle= async (): Promise<void> =>{
         setCargando(true);
         try {
            const dataList: Mesa[] = await getMesas();
            const foundMesa = dataList.find(m =>String(m._id) === mesaId) ?? null;
            setMesa(foundMesa);
         } catch (err: unknown){
            const mensaje = err instanceof Error ? err.message : "Error desconocido al cargar la mesa";
            setError(mensaje);
         } finally {
            setCargando(false);
         }
        }

        cargarDetalle();
    }, [mesaId, navigate]);
    if (cargando) return <p>Cargando...</p>
    if (error) return <p>Error: {error}</p>
    if (!mesa) {
        return(
            <div className="p-6">
                <p className="text-red-500">Mesa no encontrada</p>
                <button onClick={() => navigate('/mesas')} className="bg-blue-500 text-white p-2">
                    Volver a mesas
                </button>
            </div>
        );
    }
    return (
        <div className="p-6">
            <Link to="/mesas">← Volver</Link>
      <h1 className="text-2xl font-bold">Mesa {mesa.numero}</h1>
      <p>Capacidad: {mesa.capacidad}</p>
      <p>Estado: {mesa.estado}</p>
    </div>
    );
    
}