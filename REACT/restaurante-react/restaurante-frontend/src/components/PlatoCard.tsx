import type { Plato } from "../types"
interface PlatoCardProps {
    plato : Plato
}

function PlatoCard({ plato } : PlatoCardProps) {
    return (
        <div>
            <h2>{plato.nombre}</h2>
            <p>Precio: ${plato.precio}</p>
            <p>Disponible: {plato.disponible ? "Sí" : "No"}</p>
        </div>
    );
}
export default PlatoCard