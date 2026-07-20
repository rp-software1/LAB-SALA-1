import { useEffect, useState } from "react";
import { getPlatos } from "../services/api";

import { usePedido } from "../context/PedidoContext";

export default function MenuPage(){
    const {pedido} = usePedido();
    const totalUnidades = pedido.items.reduce((acc, i) => acc + i.cantidad, 0);
    const totalItems = pedido.items.length;
    
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
        <>
            <div className="menu-container">
                <h2>Nuestro Menú</h2>
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


            <div>
                {/* Badge Visible en MenuPage */}
                {totalUnidades > 0 && (
                    <div className="badge-carrito"> 
                        Comanda: {totalUnidades} unidades | {totalItems} items
                    </div>
                )}
            </div>
        </>
    )
}
