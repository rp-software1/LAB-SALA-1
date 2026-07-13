import PlatoCard from "../components/PlatoCard";
import { platosMock } from "../data/platos.mock";
function Home() {
    return (
        <>
            <h2>Carta del Restaurante "El buen gusto"</h2>
            <p>Aquí van los platos</p>
            {platosMock.map(plato => (
                <PlatoCard key={plato.id} plato={plato} />
            ))}
        </>

    )
};

export default Home;