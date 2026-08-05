"use client";

import { useRouter } from "next/navigation";

export default function CarritoVacio() {
    const router = useRouter();
    return(
      <div className="text-center mt-16">
        <p className="text-5xl mb-4">🛒</p>
        <h1 className="text-2xl font-bold mb-4">El carrito está vacío</h1>
        <button
          onClick={() => router.push("/menu")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Ver el menú
        </button>
      </div>
    )
}
