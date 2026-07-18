import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleMesa from "./pages/DetalleMesa";
import MesasPage from "./pages/MesasPage";
import Layout from "./components/Layout";
import ComandasPage from "./pages/ComandasPage";
import CarritoPage from "./pages/CarritoPage";
import MenuPage from "./pages/MenuPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MenuPage />} />
          <Route path="/mesas" element={<MesasPage />} />
          <Route path="/mesas/:id" element={<DetalleMesa />} />
          <Route path="/comandas" element={<ComandasPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;