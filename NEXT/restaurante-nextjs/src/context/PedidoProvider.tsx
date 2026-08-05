"use client"; 

import { createContext, useContext, useState} from "react";

import type {
    Plato,
    TipoPedido,
    EstadoPedidoContext, 
    PedidoContextType 
} from "@/src/types/index"

const initialState : EstadoPedidoContext = {
    mesaId : null,
    tipo : "para_llevar", 
    estado : "pendiente", 
    items: [],
    total: 0
};

const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

// Consumir el Context 
export function usePedido(): PedidoContextType{
    const ctx = useContext(PedidoContext); 
    if(!ctx) throw new Error("usePedido debe usarse dentro de PedidoProvider"); 
    return ctx; 
}

// El Provider - envuelve los hijos que necesiten acceso 
export default function PedidoProvider({children}: {children: React.ReactNode}){
    const [pedido, setPedido] = useState<EstadoPedidoContext>(initialState);

    // Funciones 
    function agregarPlato(plato : Plato): void {
        setPedido((prev) => {
            const existe = prev.items.find((item) => item.platoId === plato._id);

            if(existe){
                // Actualizar Items 
                const itemsUpdate = prev.items.map((item) => item.platoId === plato._id ? {...item, cantidad: item.cantidad + 1}: item);
                return {
                   ...prev,
                   items: itemsUpdate,
                   total: itemsUpdate.reduce((sum, item) => sum + item.cantidad * item.precioUnitario, 0)
                }
            }

            else{
                const newItem= {
                    platoId: plato._id,
                    nombre: plato.nombre,
                    cantidad: 1,
                    precioUnitario: plato.precio
                }; 

                return{
                    ...prev, 
                    items: [...prev.items, newItem],
                    total: prev.total + newItem.precioUnitario
                }
            }
        })
    }

    function quitarPlato(platoId: string): void {
        setPedido((prev) => {
            const itemEncontrado = prev.items.find((item) => item.platoId === platoId); 

            if(!itemEncontrado){
                console.warn(`No se encuentra el palto con ID: ${platoId}`);
                return prev 
            }

            if(itemEncontrado.cantidad > 1){
                const itemsUpdate = prev.items.map((item) => item.platoId === platoId ? {...item, cantidad: item.cantidad - 1}: item)
                return {
                    ...prev,
                    items: itemsUpdate,
                    total: itemsUpdate.reduce((sum, item) => sum + item.cantidad * item.precioUnitario,0)
                }
            }

            else{
                const itemsUpdate = prev.items.filter(item => item.platoId !== platoId); 

                return {
                    ...prev,
                    items: itemsUpdate, 
                    total: itemsUpdate.reduce((sum, item) => sum + item.cantidad * item.precioUnitario,0)
                }
            }
        })
    }

    function cambiarTipo(tipo: TipoPedido): void{ 
        setPedido((prev) => ({
            ...prev,
            tipo: tipo,
            mesaId: tipo === "mesa" ? prev.mesaId : null
        }))
    }

    function asignarMesa(mesaId: string): void {
        setPedido((prev) => ({
            ...prev,
            mesaId,
            tipo: "mesa"
        }))
    }

    function limpiarPedido(): void {
        setPedido(initialState);
    }

    const value: PedidoContextType = {
        pedido,
        agregarPlato,
        quitarPlato,
        cambiarTipo,
        asignarMesa,
        limpiarPedido
    }

    return (
        <PedidoContext.Provider value={value}>
            {children}
        </PedidoContext.Provider>
    )
}