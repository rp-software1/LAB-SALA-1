"use client";

import { ItemPedido } from "@/src/types";

type PropsItemPedido = {
    item: ItemPedido,
    quitarPlato: (platoId: string) => void
}

export default function CarritoItem({ item, quitarPlato }: PropsItemPedido) {
  return (
    <div
      key={item.platoId}
      className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm"
    >
      <div>
        <p className="font-medium">{item.nombre}</p>
        <p className="text-sm text-gray-500">
          S/ {item.precioUnitario.toFixed(2)} x {item.cantidad}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold">
          S/ {(item.precioUnitario * item.cantidad).toFixed(2)}
        </span>
        <button
          onClick={() => quitarPlato(item.platoId)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-semibold cursor-pointer transition-colors duration-200 shadow-sm"
        >
          -1
        </button>
      </div>
    </div>
  );
}
