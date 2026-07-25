import OrderForm from "../components/OrderForm";
import { getMesas } from "../services/api";
import { useEffect, useState } from "react";
import { Mesa } from "../types";

function ComandasPage(){
    const [mesaSeleccionada, setMesaSeleccionada] = useState("1");
    const [listMesas, setListMesas] = useState<Mesa[]>([]);

    useEffect(() => {
        const fetchMesas = async () => {
            try{
                const data = await getMesas();
                setListMesas(data);
            }catch(error){
                console.error("Error al obtener mesas:", error);
            }
        }
        fetchMesas();
    }, []);

    return(
        <div>
            <h1>Gestion de Comandas</h1>
            <label>Seleccione la mesa</label>
            <select value={mesaSeleccionada} onChange={(e) => setMesaSeleccionada(e.target.value)}>
                {listMesas.map((mesa) => (
                    <option key={mesa._id} value={mesa.numero}>{mesa.numero}</option>
                ))}
            </select>
            <hr/>
            <OrderForm mesaNumero={mesaSeleccionada}/>
        </div>
    );
}

export default ComandasPage;
