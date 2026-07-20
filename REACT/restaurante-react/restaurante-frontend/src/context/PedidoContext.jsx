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

    return(
        <PedidoContext.Provider value={{pedido, setPedido}}>
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