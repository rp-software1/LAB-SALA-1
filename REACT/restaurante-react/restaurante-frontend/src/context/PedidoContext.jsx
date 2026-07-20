import {createContext, useState, useContext} from 'react';

const PedidoContext = createContext(null);

const EstadoInicial = { 
    mesaId: null,
    tipo: 'mesa',
    estado: 'pendiente',
    items: [],
    total:0,
    fecha: ''
};

export const PedidoProvider = ({children}) => { 
    const [pedido, setPedido] = useState(EstadoInicial);

    const calcularTotal = (items) => {
        return items.reduce((acc, item) => acc + (item.precioUnitario * item.cantidad), 0);
    }

    const agregarPlato = (plato) =>{
        setPedido(prev=>{
            const existe = prev.items.find(i=> i.platoId === plato._id);
            const nuevosItems = existe ? prev.items.map(i => i.platoId === plato._id ? {...i, cantidad: i.cantidad +1}:i)
            : [...prev.items, {platoId:plato._id, nombre: plato.nombre, cantidad:1, precioUnitario: plato.precio}]; 
            return {...prev, items: nuevosItems, total: calcularTotal(nuevosItems)};
        });
    };

    const quitarPlato =(platoId) => {
        setPedido(prev => {
            const nuevosItems = prev.items
            .map(i => i.platoId === platoId ? {...i, cantidad: i.cantidad - 1}:i)
            .filter(i=> i.cantidad > 0)
            return {...prev, items: nuevosItems, total: calcularTotal(nuevosItems)}
        })
    }
    
    const cambiarTipo = (tipo) => {
        setPedido(prev => ({
            ...prev,
            tipo,
            mesaId: tipo === 'para_llevar' ? null : prev.mesaId
        }))
    }

    const limpiarPedido = () => {
        setPedido(EstadoInicial);
    };

    return(
        <PedidoContext.Provider value={{pedido, setPedido, agregarPlato, quitarPlato, cambiarTipo, limpiarPedido}}>
            {children}
        </PedidoContext.Provider>
    );
}

export function usePedido() {
    const contexto = useContext(PedidoContext);
    if(!contexto){ 
        throw new Error('usePedido debe usarse dentro de PedidoProvider');
    }
    return contexto;
}