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
        const existe = carrito.find(p => p.id === plato.id); 

        if(existe){
            setCarrito(carrito.map(p => p.id === plato.id 
                 ? {...p, cantidad: p.cantidad + 1}
                 : p));
        }else{
            setCarrito([...carrito, {...plato, cantidad: 1}])
        }
    }

    function eliminarPlatoCompleto(plato){
        setCarrito(carrito.filter( p => p.id !== plato.id))
    }

    function eliminarPlatoMenosUno(plato){
        const existe = carrito.find(p => p.id === plato.id); 

        if(existe?.cantidad === 1){
            eliminarPlatoCompleto(plato);
        }
        else if (existe?.cantidad > 1){
            setCarrito(carrito.map(p => p.id === plato.id 
                ? {...p, cantidad: p.cantidad - 1}
                : p));
        }
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