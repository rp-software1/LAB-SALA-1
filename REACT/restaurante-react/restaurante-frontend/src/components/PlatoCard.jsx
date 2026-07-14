function PlatoCard({ plato }) {
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