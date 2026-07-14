import Home from "./pages/Home";
import MesasPage from "./pages/MesasPage";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
    <Navbar titulo = "Resturante el Buen Sabor" />
    <h2>Menú Principal</h2>
    <Home />
    <h2>Mesas</h2>
    <MesasPage />
    </>

  )
}
export default App
