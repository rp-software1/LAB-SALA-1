import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restaurante - Menú", 
    description : "Listado de Platos del Restaurante El Buen Sabor."
}

export default function page() {
  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Menú</h1>
        <p className="text-gray-500">Aquí irá la lista de platos — conectar en Día 4</p>
    </div>
  )
}
