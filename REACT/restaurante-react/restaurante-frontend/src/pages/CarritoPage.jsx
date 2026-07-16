import { useEffect, useState } from "react";
import { platosMock } from "../data/platos.mock";


export default function CarritoPage(){
    const [carrito, setCarrito] = useState([]);
    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
           setPlatos(platosMock)
           setLoading(false) 
        },800);
    },[]);

    function agregarPlato(plato){
        setCarrito([...carrito, plato]);
    }

    function eliminarPlato(plato){
        setCarrito(carrito.filter( p => p.id !== plato.id))
    }

    if (loading){
        return <p>Cargando menú...</p>;
    }
    
    return(
        <div>
            <h2>Carrito de compras del Menú</h2>
            {platosMock.map(plato =>(
                <div key={plato.id}>
                    <span> {plato.nombre} - {plato.precio} </span>    
                    <button onClick={() => agregarPlato(plato)}> Agregar</button>
                </div>
            ))}

            <h3>Hay {carrito.length} items</h3>

            {carrito.map(plato => (
                <div key={plato.id}>
                    <span> {plato.nombre} - {plato.precio} </span>
                    <button onClick={() => eliminarPlato(plato)}> Eliminar</button>
                </div>
            ))}
            
        </div>
    )
}