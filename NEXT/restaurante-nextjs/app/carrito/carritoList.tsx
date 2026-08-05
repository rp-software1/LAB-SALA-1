"use client";

import { usePedido } from "@/src/context/PedidoProvider";
import CarritoVacio from "./carritoVacio";
import type { ItemPedido } from "@/src/types";
import CarritoItem from "./carritoItem";
import CarritoResumen from "./carritoResumen";

export default function CarritoList() {
    const {
        pedido, 
        quitarPlato, 
        limpiarPedido,
      } = usePedido()

  return (
    <>
        {pedido.items.length === 0 ? <CarritoVacio /> : (
            <div>
                  <div className="max-w-2xl mx-auto">
                  <h1 className="text-2xl font-bold mb-6">Tu Carrito</h1>
            
                  {/* Lista de items */}
                  <div className="space-y-3 mb-6">
                    {pedido.items.map((item: ItemPedido) => (
                      <CarritoItem key={item.platoId} item={item} quitarPlato={quitarPlato} />
                    ))}
                  </div>
            
                  {/* Total y tipo de pedido */}
                  <CarritoResumen total={pedido.total} />
            
                  {/* Botón de envío — llama al Server Action */}
                  <form>
                    {/* El Server Action real va en Bloque D */}
                    <p className="text-sm text-gray-400 text-center mb-3">
                      Botón de envío — se conecta en Bloque D
                    </p>
                  </form>
            
                  <button
                    onClick={limpiarPedido}
                    className="w-full mt-2 border border-gray-300 rounded py-2 text-gray-500 hover:bg-gray-50 cursor-pointer"
                  >
                    Vaciar carrito
                  </button>
                </div>
                </div>
        )}
    </>
  )
}
