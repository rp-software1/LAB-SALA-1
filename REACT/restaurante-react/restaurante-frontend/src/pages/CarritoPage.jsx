import { useEffect, useState } from "react";
import { getPlatos } from "../services/api";
import { usePedido } from "../context/PedidoContext";


export default function CarritoPage(){
    const {pedido, agregarPlato, eliminarPlatoCompleto, eliminarPlatoMenosUno, cambiarTipo, limpiarPedido} = usePedido();
    // const [carrito, setCarrito] = useState([]);
    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tipo, setTipo] = useState(pedido.tipo);

    useEffect(() => {
        async function cargarMenu(){
            try {
                setLoading(true);
                setError(null)
                const data = await getPlatos();
                setPlatos(data); 
            } catch (error) {
                setError("Lo sentimos demasiado :(, no pudimos cargar el menú. Porfavor, intentalo de nuevo más tarde");
                console.error("Error al cargar el menú:", error);
            } finally {
                setLoading(false);
            }
        }
        cargarMenu()
    },[])

    if(error){
        return <div className="error-message">{error}</div>
    }

    if (loading){
        return <p>Cargando menú...</p>;
    }


    return(
        <div>
            <h2>Carrito de compras del Menú</h2>
            {platos.map(plato =>(
                <div key={plato.id}>
                    <span> {plato.nombre} - {plato.precio} </span>    
                    <button onClick={() => agregarPlato(plato)}> Agregar</button>
                </div>
            ))}

            <h3>Hay {pedido.items.length} items | { pedido.items.reduce((sum, p)=> sum + p.cantidad, 0 )} unidades </h3>

            {pedido.items.map(plato => (
                <div key={plato.id}>
                    <span> {plato.nombre} - S/.{plato.precio} (unitario) - {plato.cantidad} (cantidad) </span>
                    <button onClick={() => eliminarPlatoMenosUno(plato)}> -1 </button>
                    <button onClick={() => eliminarPlatoCompleto(plato)}> Eliminar del carrito </button>
                </div>
            ))}

            <h3>Total: S/. {pedido.total}</h3>


            <input type="text" placeholder="Cambiar tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}></input>
            <button onClick={() => cambiarTipo(tipo)} >Cambiar Tipo</button>

            <button onClick={() => limpiarPedido()} >Limpiar Carrito</button>

            <div>
                <h1>Comanda Activa</h1>
                <p>Tipo: {pedido.tipo} | Estado: {pedido.estado} | Mesa: {pedido.mesaId === null ? "No asignada (null)" : pedido.mesaId} </p>

                {pedido.items.length === 0 ? (
                    <p> No hay items en la comanda</p> 
                ) : (
                    <>
                        <ul>
                            {pedido.items.map( item => (
                                <li key={item.id}> 
                                    <span>{item.nombre} x {item.cantidad}</span>
                                    <br />
                                    <span> Subtotal del plato {item.cantidad} x S/.{item.precio}   : {item.precio * item.cantidad}</span>
                                </li>
                            ))}
                        </ul>
                        <h3>Total: {pedido.total}</h3>
                    </>
                )}
            </div>
            
        </div>
    )
}