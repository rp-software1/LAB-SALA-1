export function PlatoCard({ plato }) {
    return (
        <div className={`cardPlato ${plato.disponible ? "disponible" : "no-disponible"}`}>
            <h3>{plato.nombre}</h3>
            <p>Categoría: {plato.categoria}</p>
            <p>Precio: S/ {plato.precio}</p>
            <p>Stock: {plato.stock}</p>

            <span>
                {plato.disponible ? "✅ Disponible" : "❌ Agotado"}
            </span>
        </div>
    );
}

