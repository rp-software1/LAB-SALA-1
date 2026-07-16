import Home from "./pages/Home";
import MesasPage from "./pages/MesasPage";
import Navbar from "./components/NavBar";
import ComandasPage from "./pages/ComandasPage";
import CarritoPage from "./pages/CarritoPage";

function App() {
  return (
    <>
    <Navbar titulo = "Resturante el Buen Sabor" />
    <h2>Menú Principal</h2>
    <Home />
    <h2>Mesas</h2>
    <MesasPage />
    <h2>Comandas</h2>
    <ComandasPage/>
    <CarritoPage />
    </>
  )
}
export default App
