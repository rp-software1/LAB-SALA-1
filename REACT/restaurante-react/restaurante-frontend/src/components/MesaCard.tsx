import { Link } from "react-router-dom"; // 1. Importar Link
import "../css/MesaCard.css";
type EstadoMesa='disponible' | 'ocupada' | 'reservada' | 'fuera_servicio';

interface MesaCardProps {
    _id: string | number;
    estado: EstadoMesa;
    numero: number;
    capacidad: number;
    pedidoActivoId: string | number | null;
}
// 2. Agregar 'id' a la destructuración de props
function MesaCard({ _id, estado, numero, capacidad, pedidoActivoId }: MesaCardProps) {
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