import { mesasMock } from "../data/mesas.mock";
import MesaCard from "../components/MesaCard";
import "../css/MesasPage.css";

export default function MesasPage(){
    return(
        <div>
            <h2>Listado de Mesas</h2>
            <div className="mesas-container">
                {mesasMock.map((mesa)=>{
                    return(
                        <MesaCard   key={mesa.id} 
                        estado = {mesa.estado}
                        numero = {mesa.numero}
                        capacidad = {mesa.capacidad}
                        comensales = {mesa.comensales}
                        />
                    )
                })}
            </div>
        </div>
    )
}