import { useParams, Link, useNavigate } from "react-router-dom";
import { mesasMock } from '../data/mesas.mock';
export default function DetalleMesa() {
    const { id } = useParams();
    const navigate = useNavigate();
    const mesa = mesasMock.find(m => String(m.id) === id);
    
    if (!mesa) {
        return(
            <div className="p-6">
                <p className="text-red-500">Mesa {id} no encontrada</p>
                <button onClick={() => navigate('/mesas')} className="bg-blue-500 text-white p-2">
                    Volver a mesas
                </button>
            </div>
        );
    }
    return (
        <div className="p-6">
            <Link to="/mesas">← Volver</Link>
      <h1 className="text-2xl font-bold">Mesa {mesa.numero}</h1>
      <p>Estado: {mesa.estado}</p>
    </div>
    );
    
}