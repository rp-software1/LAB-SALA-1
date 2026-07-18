import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleMesa from "./pages/DetalleMesa";
import MesasPage from "./pages/MesasPage";
import Navbar from "./components/NavBar";
import ComandasPage from "./pages/ComandasPage";
import CarritoPage from "./pages/CarritoPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar titulo="Restaurante el Buen Sabor" /> 
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/mesas" element={<MesasPage />} />
        <Route path="/mesas/:id" element={<DetalleMesa />} />
        <Route path="/comandas" element={<ComandasPage />} />
        <Route path="/carrito" element={<CarritoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;