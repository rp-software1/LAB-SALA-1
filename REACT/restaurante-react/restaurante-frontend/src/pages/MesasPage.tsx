import { useEffect, useState } from "react";
import { getMesas } from "../services/api";
import MesaCard from "../components/MesaCard";
import { useNavigate } from "react-router-dom";
import { usePedido } from "../context/PedidoContext";
import type { Mesa } from "../types";
import "../css/MesasPage.css";

export default function MesasPage(){
    const [mesas, setMesas] = useState<Mesa[]>([]); 
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { asignarMesa } = usePedido();
    const navigate = useNavigate();

    useEffect(() =>{
        async function loadMesas(): Promise<void>{
            try{
                const dataList: Mesa[] = await getMesas(); 
                setMesas(dataList)
            }catch(err: unknown){
                const mensaje = err instanceof Error ? err.message : "Error al cargar mesas";
                console.error("Error al cargar mensaje", err);
                setError(mensaje);
            }
            finally{
                setLoading(false);
            }
        }

        loadMesas();
    }, []);

    function handleSeleccionarMesa(mesa: Mesa): void {
        asignarMesa(mesa._id);
        navigate("/carrito");
    }

    return(
        <div>
            <h2>Listado de Mesas</h2>
            {loading && <p>Cargando mesas...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="mesas-container">
                {mesas.map((mesa: Mesa) => (
                    <div key={mesa._id}>
                        <MesaCard
                        _id={mesa._id}
                        estado={mesa.estado}
                        numero={mesa.numero}
                        capacidad={mesa.capacidad}
                        pedidoActivoId={mesa.pedidoActivoId}
                        />    

                        {mesa.estado === "Disponible" && (
                            <button onClick={() => handleSeleccionarMesa(mesa)}>
                                Seleccionar Mesa
                            </button>
                        )}
            
                     </div>


                    
                ))}
            </div>

        </div>
    )
}