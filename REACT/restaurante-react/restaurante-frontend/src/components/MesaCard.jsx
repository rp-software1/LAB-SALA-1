import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // 1. Importar Link
import "../css/MesaCard.css";

// 2. Agregar 'id' a la destructuración de props
function MesaCard({ id, estado, numero, capacidad, comensales }) {
    return(
        <div className={`mesa-card ${estado}`} >
            <h3>Mesa número {numero}</h3>
            <p> Capacidad: {capacidad} </p>
            <p> Estado: {estado} </p>
            <p> Comensales Actuales: {comensales} </p>
            
            {/* 3. Agregar el enlace al detalle */}
            <Link to={`/mesas/${id}`} className="ver-detalle-btn">
                Ver detalle
            </Link>
        </div>
    )
};

MesaCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // 4. Validar el id
    estado: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    capacidad: PropTypes.number.isRequired,
    comensales: PropTypes.number.isRequired,
}

export default MesaCard;