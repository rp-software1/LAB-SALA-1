import {createContext, useState, useContext} from 'react';

const PedidoContext = createContext(null);

const EstadoInicial = { 
    _id : null,
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
        return items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    }

    function agregarPlato(plato){
        const existe = pedido.items.find(p => (p._id ?? p.id) === (plato._id ?? plato.id)); 

        let nuevosItems; 

        if(existe){
            nuevosItems = pedido.items.map(p => (p._id ?? p.id) === (plato._id ?? plato.id) 
                 ? {...p, cantidad: p.cantidad + 1}
                 : p)
        }else{
            nuevosItems = [...pedido.items, {...plato, cantidad: 1}]  
        }

        setPedido({...pedido,  items: nuevosItems , total: calcularTotal(nuevosItems)})
    }

    function eliminarPlatoCompleto(plato){
        
        const nuevosItems =  pedido.items.filter( p => (p._id ?? p.id) !== (plato._id ?? plato.id))
        setPedido({...pedido, items: nuevosItems, total: calcularTotal(nuevosItems)})
    }

    function eliminarPlatoMenosUno(plato){
        const existe = pedido.items.find(p => (p._id ?? p.id) === (plato._id ?? plato.id)); 

        if(existe?.cantidad === 1){
            eliminarPlatoCompleto(plato);
        }
        else if (existe?.cantidad > 1){
            const nuevosItems = pedido.items.map(p => (p._id ?? p.id) === (plato._id ?? plato.id) 
                ? {...p, cantidad: p.cantidad - 1}
                : p)
            setPedido({...pedido, items: nuevosItems, total: calcularTotal(nuevosItems)})
        }
    }
    
    const cambiarTipo = (tipo) => {
        tipo = tipo.trim().toLowerCase();

        if(tipo !== "para llevar" && tipo !== "para_llevar" && tipo !== "mesa"){
            alert("Tipo inválido"); 
            return;
        }

        if(tipo === "para llevar" || tipo === "para_llevar"){
            tipo = "para_llevar";
        }

        setPedido(prev => ({
            ...prev,
            tipo,
            mesaId: tipo === 'para_llevar' ? null : prev.mesaId
        }))
    }

    const limpiarPedido = () => {
        setPedido(EstadoInicial);
    };

    // Asignar mesa al pedido
    const asignarMesa = (mesaId) => {
        setPedido(prev => ({ ...prev, mesaId, tipo: 'mesa' }));
    };


    return(
        <PedidoContext.Provider value={{pedido, setPedido, asignarMesa, agregarPlato, eliminarPlatoCompleto, eliminarPlatoMenosUno, cambiarTipo, limpiarPedido}}>
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