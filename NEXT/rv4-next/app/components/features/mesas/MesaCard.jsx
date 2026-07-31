import Link from "next/link"; // 1. Importar Link

// 2. Agregar 'id' a la destructuración de props
function MesaCard({ _id, estado, numero, capacidad, pedidoActivoId }) {
    return(
        <div className={`mesa-card ${estado}`} >
            <h3>Mesa número {numero}</h3>
            <p> Capacidad: {capacidad} </p>
            <p> Estado: {estado} </p>
            <p> Pedido Activo: {pedidoActivoId === null ? "Ninguno" : pedidoActivoId} </p>
            
            <Link href={`/mesas/${_id}`} className="ver-detalle-btn">
                Ver detalle
            </Link>
        </div>
    );
}
export default MesaCard;