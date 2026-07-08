// 1) VARIABLES + OBJETOS + ARRAYS (Tarea 1: 5 platos)
export const menu = [
    { nombre: "Arroz con pollo", precio: 12, stock: 5 },
    { nombre: "Lomo saltado", precio: 18, stock: 3 },
    { nombre: "Sopa", precio: 8, stock: 10 },
    { nombre: "Ceviche", precio: 25, stock: 4 },
    { nombre: "Tallarines", precio: 15, stock: 6 }
];

// FUNCIONES DE AGREGAR 
export function agregarPlato(object) {
    if (object.nombre.trim().length === 0) {
        return;
    }

    const nuevoPlato = {
        nombre: FormatearNombre(object.nombre),
        precio: object.precio,
        stock: object.stock
    };
    menu.push(nuevoPlato);
};


// VALIDACIÓN: Evitar duplicados
// Se exporta porque ui.js lo usa
export function validarPlato(object) {
    const nombre = FormatearNombre(object.nombre);

    if (object.precio <= 0 || object.stock <= 0) return true;

    for (let i = 0; i < menu.length; i++) {
        const plato = menu[i];
        if (plato.nombre === nombre && plato.precio === object.precio) {
            return true;
        }
    }

    return false;
};

// FORMATEAR EL NOMBRE DE CADA PLATO
function FormatearNombre(nombre) {
    if (nombre.trim().length === 0) {
        return "";
    }

    return nombre.trim()[0].toUpperCase() + nombre.trim().slice(1).toLowerCase();
}