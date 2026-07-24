import axios from "axios";
import type {  EstadoPedido,  Mesa, Pedido, Plato } from "../types";

// const BASE_URL = import.meta.env.VITE_API_URL

// La instancia de Axios existente (sin cambios)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

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