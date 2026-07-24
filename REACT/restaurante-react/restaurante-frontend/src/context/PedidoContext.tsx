import {createContext, useState, useContext} from 'react';
import type {
    Plato,
    TipoPedido,
    EstadoPedidoContext,
    PedidoContextType,
} from '../types';

const EstadoInicial: EstadoPedidoContext = {
  mesaId: null,
  tipo: 'para_llevar',
  estado: 'pendiente',
  items: [],
  total: 0,
};

const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

interface PedidoProviderProps {
  children: React.ReactNode;
}

export const PedidoProvider = ({ children }: PedidoProviderProps) => { 
    const [pedido, setPedido] = useState<EstadoPedidoContext>(EstadoInicial);

    const calcularTotal = (items: EstadoPedidoContext['items']) => {
        return items.reduce((acc, item) => acc + (item.precioUnitario * item.cantidad), 0);
    }

    function agregarPlato(plato: Plato): void {
        const existe = pedido.items.find(p => p.platoId === plato._id);
        let nuevosItems; 
        if (existe) {
            nuevosItems = pedido.items.map(p => p.platoId === plato._id 
              ? { ...p, cantidad: p.cantidad + 1 }
              : p
            );
        } else {
          nuevosItems = [
            ...pedido.items, 
            {
              platoId: plato._id,
              nombre: plato.nombre,
              cantidad: 1,
              precioUnitario: plato.precio,
            }
          ];
        }

        setPedido({...pedido, items: nuevosItems, total: calcularTotal(nuevosItems)});
    }

    function quitarPlato(platoId: string): void {
        const item = pedido.items.find(i => i.platoId === platoId);
        if (!item) return;

        let nuevosItems;
        if (item.cantidad === 1) {
          nuevosItems = pedido.items.filter(i => i.platoId !== platoId);
        } else {
          nuevosItems = pedido.items.map(i =>
            i.platoId === platoId ? { ...i, cantidad: i.cantidad - 1 } : i
          );
        }

        setPedido({ ...pedido, items: nuevosItems, total: calcularTotal(nuevosItems) });
    }

    const cambiarTipo = (tipoStr: string): void => {
        let tipoLimpio = tipoStr.trim().toLowerCase();

        if (tipoLimpio !== "para llevar" && tipoLimpio !== "para_llevar" && tipoLimpio !== "mesa") {
          alert("Tipo inválido");
          return;
        }

        const tipoFinal: TipoPedido = (tipoLimpio === "para llevar" || tipoLimpio === "para_llevar") 
          ? "para_llevar" 
          : "mesa";

        setPedido(prev => ({
          ...prev,
          tipo: tipoFinal,
          mesaId: tipoFinal === 'para_llevar' ? null : prev.mesaId
        }));
    };

    const limpiarPedido = (): void => {
        setPedido(EstadoInicial);
    };

    const asignarMesa = (mesaId: string): void => {
        setPedido(prev => ({ ...prev, mesaId, tipo: 'mesa' }));
    };

    const value: PedidoContextType = {
        pedido,
        agregarPlato,
        quitarPlato,
        cambiarTipo,
        asignarMesa,
        limpiarPedido,
    };

    return(
        <PedidoContext.Provider value={value}>
            {children}
        </PedidoContext.Provider>
    );
};

export function usePedido(): PedidoContextType {
  const contexto = useContext(PedidoContext);
  if (!contexto) {
    throw new Error('usePedido debe usarse dentro de PedidoProvider');
  }
  return contexto;
}

export default PedidoContext;