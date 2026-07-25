import { useEffect, useState } from "react";
import { getPlatos, crearPedido} from "../services/api";
import { usePedido } from "../context/PedidoContext";
import type { Plato, Pedido, TipoPedido } from "../types";


export default function CarritoPage(){
    const {pedido, agregarPlato, quitarPlato, cambiarTipo, limpiarPedido} = usePedido();
    const [platos, setPlatos] = useState<Plato[]>([]);
    const [tipo, setTipo] = useState<TipoPedido>('mesa');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [enviando, setEnviando] = useState(false)
    const [errorEnvio, setErrorEnvio] = useState<string | null>(null);
    const [pedidoCreado, setPedidoCreado] = useState<Pedido | null>(null);

    useEffect(() => {
        async function cargarMenu(): Promise<void>{
            try {
                setLoading(true);
                setError(null)
                const data = await getPlatos();
                setPlatos(data); 
            } catch (error: unknown) {
                error instanceof Error ? console.error("Error al cargar el menú:", error) : console.error("Error al cargar el menú");
                setError("Lo sentimos demasiado :(, no pudimos cargar el menú. Porfavor, intentalo de nuevo más tarde");
            } finally {
                setLoading(false);
            }
        }
        cargarMenu()
    },[])
    const handleEnviarComanda = async () => {
            if (pedido.items.length === 0) return;
            setEnviando(true);
            setErrorEnvio(null);

            // Guardamos el total actual antes de limpiar el carrito
            const totalActual = pedido.total;

            try {
                const body: Omit<Pedido, "_id" | "creadoEn" | "actualizadoEn"> = {
                    mesaId: pedido.mesaId,
                    tipo: pedido.tipo,
                    estado: "pendiente",
                    items: pedido.items,
                    total: pedido.total,
                };

                const nuevoPedido = await crearPedido(body);
                
                // Le pasamos el total y aseguramos el _id
                setPedidoCreado({
                    ...nuevoPedido,
                    total: nuevoPedido.total ?? totalActual
                });

                limpiarPedido(); 
            } catch (err) {
                setErrorEnvio('No se pudo crear el pedido. Intenta de nuevo.');
                console.error("Error al enviar comanda:", err);
            } finally {
                setEnviando(false);
            }
        };
    if(error){
        return <div className="error-message">{error}</div>
    }

    if (loading){
        return <p>Cargando menú...</p>;
    }
    if (pedidoCreado) {
            return (
                <div>
                    <div>✅</div>
                    <h2>Comanda enviada</h2>
                    <p>
                        Pedido # {(pedidoCreado._id) ? (String(pedidoCreado._id).slice(-6).toUpperCase()) : 'OK'}
                    </p>
                    <p>Estado: {pedidoCreado.estado || 'registrado'}</p>
                    <p>Total: S/ {pedidoCreado.total ? pedidoCreado.total.toFixed(2) : pedido.total}</p>
                </div>
            );
        }

    return(
        <div>
            <h2>Carrito de compras del Menú</h2>
            {platos.map(plato =>(
                <div key={plato._id}>
                    <span> {plato.nombre} - {plato.precio} </span>    
                    <button onClick={() => agregarPlato(plato)}> Agregar</button>
                </div>
            ))}

            <h3>Hay {pedido.items.length} items | { pedido.items.reduce((sum, p)=> sum + p.cantidad, 0 )} unidades </h3>

            {pedido.items.map(plato => (
                <div key={plato.platoId}>
                    <span> {plato.nombre} - S/.{plato.precioUnitario} (unitario) - {plato.cantidad} (cantidad) </span>
                    <button onClick={() => quitarPlato(plato.platoId)}> -1 </button>
                </div>
            ))}

            <h3>Total: S/. {pedido.total}</h3>


            <input type="text" placeholder="Cambiar tipo" value={tipo} onChange={(e) => setTipo(e.target.value as TipoPedido)}></input>
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
                                <li key={item.platoId}> 
                                    <span>{item.nombre} x {item.cantidad}</span>
                                    <br />
                                    <span> Subtotal del plato {item.cantidad} x S/.{item.precioUnitario}   : {item.precioUnitario * item.cantidad}</span>
                                </li>
                            ))}
                        </ul>
                        <h3>Total: {pedido.total}</h3>
                    </>
                )}
            </div>
            {/* Error de envío si ocurre */}
            {errorEnvio && <p className='text-red-500 text-sm mb-4'>{errorEnvio}</p>}

            {/* Botón de envío de comanda conectado a la API */}
            <div className="mt-6">
                <button
                    onClick={handleEnviarComanda}
                    disabled={enviando || pedido.items.length === 0}>
                    {enviando ? 'Enviando comanda...' : 'Enviar comanda a cocina'}
                </button>
            </div>
        </div>
        
    )
}
