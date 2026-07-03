"use stric"; 

// Plato 1 - Lomo Saltado
const nombrePlato1 = "Lomo Saltado"; 
const precioPlato1 = 18.0;
let stockPlato1 = 5; 

// Plato 2 - Arroz con Leche 
const nombrePlato2 = "Arroz con Leche"; 
const precioPlato2 = 8.0;
let stockPlato2 = 10;

// Plato 3 - Sopa Criolla 
const nombrePlato3 = "Sopa Criolla"; 
const precioPlato3 = 12.0; 
let stockPlato3 = 7;

// Salidas 
// Usar 'console.log' para mostrar la info de cada plato
console.log("--- Bloque A ---");
console.log(`Plato 1: ${nombrePlato1} | Precio: ${precioPlato1} | Stock: ${stockPlato1}`);
console.log(`Plato 2: ${nombrePlato2} | Precio: ${precioPlato2} | Stock: ${stockPlato2}`);
console.log(`Plato 3: ${nombrePlato3} | Precio: ${precioPlato3} | Stock: ${stockPlato3}`);

// Bloque B - Funciones

function describir(nombre, precio) {
    return `${nombre} - S/ ${precio}`;
}

function estaDisponible(stock) {
    return stock > 0;
}

function vender(stockActual) {
    return stockActual - 1;
}

const descripcion = describir(nombrePlato1, precioPlato1);
const disponible = estaDisponible(stockPlato1);
const nuevoStock = vender(stockPlato1);

console.log("--- Bloque B ---");
console.log(descripcion);
console.log(disponible);
console.log(nuevoStock);

// Bloque C - Objeto Plato del Restaurante 
const plato1 = {
    nombre : "Lomo Saltado",
    precio : 18.00, 
    stock : 5
};

const plato2 = {
    nombre : "Arroz con Leche",
    precio : 8.00, 
    stock : 10
};

const plato3 = {
    nombre : "Sopa Criolla",
    precio : 12.00, 
    stock : 7
};

// Adaptar funciones 
/* 
Lo ideal sería modificar las primeras declaraciones de las funciones 
Pero para este ejercicio preferimos que se sobreescriban, al final estas 
últimas van a reemplazar a las primeras.
*/
function describir(object) {
    return `${object.nombre} - S/ ${object.precio}`;
};

function estaDisponible(object) {
    return object.stock > 0;
};

function vender(object) {
    object.stock =  object.stock - 1;
    return object.stock;
};

console.log("--- Bloque C ---");
console.log(vender(plato1));
console.log(describir(plato1));
console.log(describir(plato2));
console.log(describir(plato3));