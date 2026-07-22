import { useEffect, useState } from "react";
import { getMesas } from "../services/api";
import MesaCard from "../components/MesaCard";
import { useNavigate } from "react-router-dom";
import { usePedido } from "../context/PedidoContext";
import "../css/MesasPage.css";

export default function MesasPage(){
    const [mesas, setMesas] = useState([]); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const {asignarMesa} = usePedido();
    const navigate = useNavigate();

    useEffect(() =>{
        async function loadMesas(){
            try{
                const dataList = await getMesas(); 
                setMesas(dataList)
            }catch(error){
                console.error("Error al cargar mesas", error);
                setError("Error al cargar mesas...");
            }
            finally{
                setLoading(false);
            }
        }

        loadMesas();
    }, []);

    function handleSeleccionarMesa(mesa){
        asignarMesa(mesa._id);
        navigate("/carrito");
    }

    return(
        <div>
            <h2>Listado de Mesas</h2>
            {loading && <p>Cargando mesas...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="mesas-container">
                {mesas.map((mesa) => (
                    <div key={mesa._id}>
                        <MesaCard
                        _id={mesa._id}
                        estado={mesa.estado}
                        numero={mesa.numero}
                        capacidad={mesa.capacidad}
                        pedidoActivoId={mesa.pedidoActivoId}
                        />    

                        {mesa.estado === "disponible" && (
                            <button onClick={() => handleSeleccionarMesa(mesa)}>
                                Seleccionar Mesa
                            </button>
                        )}
            
                     </div>


                    
                ))}
            </div>

        </div>
    )
}