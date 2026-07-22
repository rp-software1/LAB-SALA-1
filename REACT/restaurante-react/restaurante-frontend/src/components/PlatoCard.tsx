interface Plato {
    _id : number 
    nombre : string 
    precio : number 
    stock : number 
    disponible : boolean
}

interface PlatoCardProps {
    plato : Plato
}

function PlatoCard({ plato } : PlatoCardProps) {
    return (
        <div>
            <h2>{plato.nombre}</h2>
            <p>Precio: ${plato.precio}</p>
            <p>Stock: {plato.stock}</p>
            <p>Disponible: {plato.disponible ? "Sí" : "No"}</p>
        </div>
    );
}
export default PlatoCard