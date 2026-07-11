import { PlatoCard } from "./PlatoCard";

export function Carta({ platos }) {
    return (
        <div>
            {platos.map(plato => (
                <PlatoCard key={plato.id} plato={plato} />
            ))}
        </div>
    );
}