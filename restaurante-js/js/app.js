// 1) VARIABLES + OBJETOS + ARRAYS
let menu = [
 { nombre: "Arroz con pollo", precio: 12, stock: 5 },
 { nombre: "Lomo saltado", precio: 18, stock: 3 },
 { nombre: "Sopa", precio: 8, stock: 10 }
];

// 2) FUNCIÓN: renderizar (mostrar) el menú en pantalla
function renderMenu() {
 const output = document.getElementById("output");
 output.innerHTML = ""; // limpiar

 // crear una lista HTML simple
 let html = "<ul>";

 for (let i = 0; i < menu.length; i++) {
   const plato = menu[i];
   html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
 }

 html += "</ul>";
 output.innerHTML = html;
}

// 3) FUNCIÓN: agregar un plato demo al menú
// HACER QUE RECIBA PARÁMETROS PARA CREAR EL PLATO
function agregarPlatoDemo(object) {
 const nuevoPlato = { 
    nombre: object.nombre, 
    precio: object.precio, 
    stock: object.stock };

 menu.push(nuevoPlato);
};


// VERIFICAR QUE NO EXISTA OTRO PLATO CON EL MISMO NOMNBRE Y MISMO PRECIO
function validarPlato(object){
    for(let i = 0 ; i < menu.length; i++){
        const plato = menu[i];
        if(plato.nombre === object.nombre && plato.precio === object.precio){
            return true
        }
    }
}

// 4) EVENTOS: conectar botones con funciones
document.getElementById("btnMostrar").addEventListener("click", () => {
 renderMenu();
});

const formNewPlato = document.getElementById("form-add-platoMenu");

formNewPlato.addEventListener("submit", e => {
    e.preventDefault(); 

    const nombre = document.getElementById("nombreNewPlato").value.trim();
    const precio = Number(document.getElementById("precioNewPlato").value.trim());
    const stock = document.getElementById("stockNewPlato").value.trim();
    const newPlato = {nombre, precio, stock}

    if(validarPlato(newPlato)){
        alert("Este plato ya está registrado en el menú..."); 
        return;
    }

    agregarPlatoDemo(newPlato);
    renderMenu();

})
