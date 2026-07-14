import PropTypes from "prop-types";
import "../css/MesaCard.css";

function MesaCard({estado, numero, capacidad, comensales}){

    return(
        <div className={`mesa-card ${estado}`} >
            <h3>Mesa número {numero}</h3>
            <p> Capacidad: {capacidad} </p>
            <p> Estado: {estado} </p>
            <p> Comensales Actuales: {comensales} </p>
        </div>
    )
};

MesaCard.propTypes = {
    estado: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    capacidad: PropTypes.number.isRequired,
    comensales: PropTypes.number.isRequired,
}

export default MesaCard;