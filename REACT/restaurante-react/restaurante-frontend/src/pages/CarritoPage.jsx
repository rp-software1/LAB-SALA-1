import { useEffect, useState } from "react";
import { getPlatos } from "../services/api";


export default function CarritoPage(){
    const [carrito, setCarrito] = useState([]);
    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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
        const existe = carrito.find(p => (p._id ?? p.id) === (plato._id ?? plato.id)); 

        if(existe){
            setCarrito(carrito.map(p => (p._id ?? p.id) === (plato._id ?? plato.id) 
                 ? {...p, cantidad: p.cantidad + 1}
                 : p));
        }else{
            setCarrito([...carrito, {...plato, cantidad: 1}])
        }
    }

    function eliminarPlatoCompleto(plato){
        setCarrito(carrito.filter( p => (p._id ?? p.id) !== (plato._id ?? plato.id)))
    }

    function eliminarPlatoMenosUno(plato){
        const existe = carrito.find(p => (p._id ?? p.id) === (plato._id ?? plato.id)); 

        if(existe?.cantidad === 1){
            eliminarPlatoCompleto(plato);
        }
        else if (existe?.cantidad > 1){
            setCarrito(carrito.map(p => (p._id ?? p.id) === (plato._id ?? plato.id) 
                ? {...p, cantidad: p.cantidad - 1}
                : p));
        }
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

            <h3>Hay {carrito.length} items | { carrito.reduce((sum, p)=> sum + p.cantidad, 0 )} unidades </h3>

            {carrito.map(plato => (
                <div key={plato.id}>
                    <span> {plato.nombre} - S/.{plato.precio} (unitario) - {plato.cantidad} (cantidad) </span>
                    <button onClick={() => eliminarPlatoMenosUno(plato)}> -1 </button>
                    <button onClick={() => eliminarPlatoCompleto(plato)}> Eliminar del carrito </button>
                </div>
            ))}

            <h3>Total: S/. {carrito.reduce((sum, plato ) => sum + plato.precio * plato. cantidad, 0)}</h3>

            <button onClick={() => setCarrito([])} >Limpiar Carrito</button>
            
        </div>
    )
}