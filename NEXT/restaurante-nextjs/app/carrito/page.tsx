import type { Metadata } from "next";

export const metadata : Metadata = {
    title: "Restaurante - Carrito",
    description: "Carrito de compras del Restaurante El Buen Sabor."
}

export default function page() {
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Carrito</h1>
        <p className="text-gray-500">Aquí irá el carrito de compras — conectar en Día 4</p>
    </div>
  )
}
