"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePedido } from "@/src/context/PedidoProvider";
import CarritoVacio from "./carritoVacio";
import type { ItemPedido } from "@/src/types";
import CarritoItem from "./carritoItem";
import CarritoResumen from "./carritoResumen";
import { enviarComanda } from "./actions";

export default function CarritoList() {
    const {
        pedido, 
        quitarPlato, 
        limpiarPedido,
    } = usePedido();

    const router = useRouter();
    const [enviando, setEnviando] = useState<boolean>(false);
    const [confirmacion, setConfirmacion] = useState<string | null>(null);
    const [errorEnvio, setErrorEnvio] = useState<string | null>(null);
    
    useEffect(() => {
        document.title = pedido.items.length > 0
            ? `Carrito (${pedido.items.length}) — Sistema de Restaurante`
            : 'Carrito — Sistema de Restaurante';
    }, [pedido.items.length]);

  const handleEnviar = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault();
        setEnviando(true);
        setErrorEnvio(null);

        const resultado = await enviarComanda(pedido);

        if (resultado.ok) {
            setConfirmacion(resultado.pedidoId);
            limpiarPedido(); 
        } else {
            setErrorEnvio(resultado.error);
        }

        setEnviando(false);
    };

if (confirmacion) {
        return (
            <div className="text-center mt-16">
                <p className="text-5xl mb-4">✅</p>
                <h1 className="text-2xl font-bold mb-2">¡Comanda enviada!</h1>
                <p className="text-gray-500 mb-2 text-sm font-mono">ID: {confirmacion}</p>
                <button
                    onClick={() => { 
                        limpiarPedido(); // Se limpia el carrito al salir de esta pantalla
                        setConfirmacion(null); 
                        router.push("/mesas"); 
                    }}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
                >
                    Volver a las mesas
                </button>
            </div>
        );
    }

    if (pedido.items.length === 0) {
        return <CarritoVacio />;
    }
    
    return (
        <div>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Tu Carrito</h1>
         
                <div className="space-y-3 mb-6">
                    {pedido.items.map((item: ItemPedido) => (
                        <CarritoItem key={item.platoId} item={item} quitarPlato={quitarPlato} />
                    ))}
                </div>
         
                <CarritoResumen total={pedido.total} />
         
                <form onSubmit={handleEnviar} className="mt-4">
                    {errorEnvio && (
                        <p className="text-red-500 text-sm mb-3 text-center">{errorEnvio}</p>
                    )}
                    <button
                        type="submit"
                        disabled={enviando}
                        className="w-full bg-blue-600 text-white rounded py-3 font-bold hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
                    >
                        {enviando ? "Enviando comanda..." : "Enviar comanda"}
                    </button>
                </form>
         
                <button
                    onClick={limpiarPedido}
                    className="w-full mt-2 border border-gray-300 rounded py-2 text-gray-500 hover:bg-gray-50 cursor-pointer"
                >
                    Vaciar carrito
                </button>
            </div>
        </div>
    );
}