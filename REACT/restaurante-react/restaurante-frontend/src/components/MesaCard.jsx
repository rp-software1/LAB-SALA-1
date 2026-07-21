import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // 1. Importar Link
import "../css/MesaCard.css";

// 2. Agregar 'id' a la destructuración de props
function MesaCard({ _id, estado, numero, capacidad, pedidoActivoId }) {
    return(
        <div className={`mesa-card ${estado}`} >
            <h3>Mesa número {numero}</h3>
            <p> Capacidad: {capacidad} </p>
            <p> Estado: {estado} </p>
            <p> Pedido Activo: {pedidoActivoId === null ? "Ninguno" : pedidoActivoId} </p>
            
            {/* 3. Agregar el enlace al detalle */}
            <Link to={`/mesas/${_id}`} className="ver-detalle-btn">
                Ver detalle
            </Link>
        </div>
    )
};

MesaCard.propTypes = {
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 4. Validar el id
    estado: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    capacidad: PropTypes.number.isRequired,
    pedidoActivoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default MesaCard;