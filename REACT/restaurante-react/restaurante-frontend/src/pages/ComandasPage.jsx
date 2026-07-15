import { useState, useEffect } from "react";
import OrderForm from "../components/OrderForm";

function ComandasPage(){
    const [mesaSeleccionada, setMesaSeleccionada] = useState("1");
    const mesa = ["1","2","3","4","5"]

    return(
        <div>
            <h1>Gestion de Comandas</h1>
            <label>Seleccione la mesa</label>
            <select value={mesaSeleccionada} onChange={(e) => setMesaSeleccionada(e.target.value)}>
                {mesa.map((mesa) => (
                    <option key={mesa} value={mesa}>{mesa}</option>
                ))}
            </select>
            <hr/>
            <OrderForm mesaNumero={mesaSeleccionada}/>
        </div>
    );
}

export default ComandasPage;
