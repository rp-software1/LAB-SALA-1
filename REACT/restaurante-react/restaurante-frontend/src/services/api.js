import axios from "axios";
import { platosMock } from "../data/platos.mock";

// Si necesitan el 'platosMock' solo modifiquen parte de la variable como: 
// VITE_API_URL => VITE_API
const BASE_URL = import.meta.env.VITE_API_URL

export async function getPlatos(){

    if(!BASE_URL){
        return platosMock;
    }

    const response = await axios.get(`${BASE_URL}/api/platos`); 
    return response.data;
}