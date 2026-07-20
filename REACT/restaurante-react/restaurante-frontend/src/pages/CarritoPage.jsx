import { useEffect, useState } from "react";
import { getPlatos } from "../services/api";
import { usePedido } from "../context/PedidoContext";


export default function CarritoPage(){
    const {pedido, setPedido} = usePedido();
    // const [carrito, setCarrito] = useState([]);
    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const EstadoInicial = {
        mesaId: null,
        tipo: 'mesa',
        estado: 'pendiente',
        items: [],
        total: 0,
        fecha: ''
    };

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

    function agregarPlato(plato){
        const existe = pedido.items.find(p => (p._id ?? p.id) === (plato._id ?? plato.id)); 

        let nuevosItems; 

        if(existe){
            nuevosItems = pedido.items.map(p => (p._id ?? p.id) === (plato._id ?? plato.id) 
                 ? {...p, cantidad: p.cantidad + 1}
                 : p)
        }else{
            nuevosItems = [...pedido.items, {...plato, cantidad: 1}]  
        }

        setPedido({...pedido,  items: nuevosItems , total: calcularTotal(nuevosItems)})
    }

    function eliminarPlatoCompleto(plato){
        
        const nuevosItems =  pedido.items.filter( p => (p._id ?? p.id) !== (plato._id ?? plato.id))
        setPedido({...pedido, items: nuevosItems, total: calcularTotal(nuevosItems)})
    }

    function eliminarPlatoMenosUno(plato){
        const existe = pedido.items.find(p => (p._id ?? p.id) === (plato._id ?? plato.id)); 

        if(existe?.cantidad === 1){
            eliminarPlatoCompleto(plato);
        }
        else if (existe?.cantidad > 1){
            const nuevosItems = pedido.items.map(p => (p._id ?? p.id) === (plato._id ?? plato.id) 
                ? {...p, cantidad: p.cantidad - 1}
                : p)
            setPedido({...pedido, items: nuevosItems, total: calcularTotal(nuevosItems)})
        }
    }
    
    function calcularTotal(items){
        return items.reduce((sum, plato ) => sum + plato.precio * plato. cantidad, 0);
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

            <button onClick={() => setPedido(EstadoInicial)} >Limpiar Carrito</button>

            <div>
                <h1>Comanda Activa</h1>
                <p>Tipo {pedido.tipo} | Estado: {pedido.estado}</p>

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