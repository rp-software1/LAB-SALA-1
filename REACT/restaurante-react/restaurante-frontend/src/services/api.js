import axios from "axios";
import { platosMock } from "../data/platos.mock";

// Si necesitan el 'platosMock' solo modifiquen parte de la variable como: 
// VITE_API_URL => VITE_API
const BASE_URL = import.meta.env.VITE_API_URL

export async function getPlatos(){

    if(!BASE_URL){
        return platosMock;
    }
    // Original 
    // const response = await axios.get(`${BASE_URL}/api/platos`); 

    // Para prueba con backend simulado
    const response = await axios.get(`${BASE_URL}/platos`); 
    return response.data;
}