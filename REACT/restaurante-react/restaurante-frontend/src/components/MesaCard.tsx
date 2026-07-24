import { Link } from "react-router-dom"; // 1. Importar Link
import "../css/MesaCard.css";
import type { Mesa } from "../types"

// 2. Agregar 'id' a la destructuración de props
function MesaCard({ _id, estado, numero, capacidad, pedidoActivoId }: Mesa) {
    return(
        <div className={`mesa-card ${estado}`} >
            <h3>Mesa número {numero}</h3>
            <p> Capacidad: {capacidad} </p>
            <p> Estado: {estado} </p>
            <p> Pedido Activo: {pedidoActivoId === null ? "Ninguno" : pedidoActivoId} </p>
            
            <Link to={`/mesas/${_id}`} className="ver-detalle-btn">
                Ver detalle
            </Link>
        </div>
    );
}

export default MesaCard;