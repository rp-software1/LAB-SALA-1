import { useEffect, useState } from "react";
import { getPlatos } from "../services/api";

export default function MenuPage(){
    const [platos, setPlatos]= useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function cargarMenu(){
            try {
                setLoading(true);
                setError(null)
                const data = await getPlatos();
                console.log(data);
                console.log(Array.isArray(data));
                setPlatos(data); 
            } catch (error) {
                setError("Lo sentimos demasiado :(, no pudimos cargar el menú. Porfavor, intentalo de nuevo más tarde");
                console.error("Error al cargar el menú:", error);
            } finally {
                setLoading(false);
            }
        }
        cargarMenu()
    }, [])
    if (loading) return <div className="spinner">Cargando el restaurante...</div>
    if (error) return <div className="error-message">{error}</div>
    return (
        <div className="menu-container">
            <h2>Nuestra Carta</h2>
            {platos.length ===0? (
                <p>No hay platos disponibles por el momento. Vuelve más tarde</p>
            ):(
                platos.map((plato)=>(
                    <div key = {plato._id ?? plato.id} className="plato-card">
                        <strong>{plato.nombre}</strong> - S/ {plato.precio}
                    </div>
                ))
            )}
        </div>
    )
}
