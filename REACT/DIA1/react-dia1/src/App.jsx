import { Carta } from "./components/Carta";
import { platosMock } from "./data/platos.mock";

function App() {
    return (
        <div>
            <Carta platos={platosMock} />
        </div>
    );
}

export default App;
