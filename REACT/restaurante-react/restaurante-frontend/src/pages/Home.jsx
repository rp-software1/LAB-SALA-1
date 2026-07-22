import PlatoCard from "../components/PlatoCard";
import { getPlatos } from "../services/api";
import { useState, useEffect } from "react";
function Home() {

    const [error, setError] = useState(null);
    const [platos, setPlatos] = useState([]); 
        
        useEffect(() =>{
            async function loadPlatos(){
                try{
                    const response = await getPlatos(); 
                    setPlatos(response);
                    setError(false);
                }
                catch(err){
                    console.error(err); 
                    setError(true);
                }
            }

            loadPlatos();
        }, [])

    return (
        <>
            <h2>Carta del Restaurante "El buen gusto"</h2>
            {error ? <p>Error al cargar los platos</p> : null}
            {platos.map(plato => (
                <PlatoCard key={plato._id} plato={plato} />
            ))}
        </>

    )
};

export default Home;