import axios from "axios";
// Si necesitan el 'platosMock' solo modifiquen parte de la variable como: 
// VITE_API_URL => VITE_API
const BASE_URL = import.meta.env.VITE_API_URL

export async function getPlatos(){

    // Original 
    // const response = await axios.get(`${BASE_URL}/api/platos`); 

    // Para prueba con backend simulado
    const response = await axios.get(`${BASE_URL}/platos`); 
    return response.data;
}

export async function getMesas(){
    const response = await axios.get(`${BASE_URL}/api/mesas`); 
    return response.data;
}

export async function getMesasDisponibles(){
    const response = await axios.get(`${BASE_URL}/api/mesas?estado=disponible`); 
    return response.data;
}

export async function crearPedido(pedidoData){
    const response = await axios.post(`${BASE_URL}/pedidos`, pedidoData);
    return response.data;
}

export async function getPedido(id){
    const response = await axios.get(`${BASE_URL}/pedidos/${id}`);
    return response.data;
}

export async function cambiarEstadoPedido(id, estado){
    const response = await axios.patch(`${BASE_URL}/pedidos/${id}/estado`,{estado});
    return response.data;
}