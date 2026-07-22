import axios from "axios";
// Si necesitan el 'platosMock' solo modifiquen parte de la variable como: 
// VITE_API_URL => VITE_API
// const BASE_URL = import.meta.env.VITE_API_URL

// La instancia de Axios existente (sin cambios)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


// Tipos locales en api.ts (mañana los moveremos a types/index.ts)
type EstadoMesa = 'disponible' | 'ocupada' | 'reservada' | 'fuera_servicio';
type EstadoPedido = 'pendiente' | 'en_preparacion' | 'lista' | 'entregada' | 'cancelada' | 'cerrada';
type TipoPedido = 'mesa' | 'para_llevar';


interface Mesa {
    _id: string | number;
    numero: number;
    capacidad: number;
    estado: EstadoMesa;
    pedidoActivoId: string | null;
}

interface ItemPedido {
  platoId: string | number;
  nombre: string;
  cantidad: number;
  precioUnitario: number;
}

interface Pedido {
  _id: string | number;
  mesaId: string | null;
  tipo: TipoPedido;
  estado: EstadoPedido;
  items: ItemPedido[];
  total: number;
  creadoEn: string;
  actualizadoEn: string;
}

interface Plato {
  _id: string | number;
  nombre: string;
  precio: number;
  categoria: string;
}


export async function getPlatos() : Promise<Plato[]> {

    // Original 
    // const response = await axios.get(`${BASE_URL}/api/platos`); 

    // Para prueba con backend simulado
    const response = await api.get<Plato[]>(`/platos`); 
    return response.data;
}

export async function getMesas() : Promise<Mesa[]>{
    const response = await api.get<Mesa[]>(`/mesas`); 
    return response.data;
}

export async function getMesasDisponibles() : Promise<Mesa[]>{
    const response = await api.get<Mesa[]>(`/mesas?estado=disponible`); 
    return response.data;
}

export async function crearPedido(pedidoData :Pedido ){
    const response = await api.post<Pedido>(`/pedidos`, pedidoData);
    return response.data;
}

export async function getPedido(id : string){
    const response = await api.get<Pedido>(`/pedidos/${id}`);
    return response.data;
}

export async function getPedidos() : Promise<Pedido[]>{
    const response = await api.get<Pedido[]>(`/pedidos`);
    return response.data;
}

export async function cambiarEstadoPedido(id : string, estado : EstadoPedido){
    const response = await api.patch<Pedido>(`/pedidos/${id}/estado`,{estado});
    return response.data;
}