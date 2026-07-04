// 1) VARIABLES + OBJETOS + ARRAYS (Tarea 1: 5 platos)
let menu = [
 { nombre: "Arroz con pollo", precio: 12, stock: 5 },
 { nombre: "Lomo saltado", precio: 18, stock: 3 },
 { nombre: "Sopa", precio: 8, stock: 10 },
 { nombre: "Ceviche", precio: 25, stock: 4 }, 
 { nombre: "Tallarines", precio: 15, stock: 6 } 
];

// 2) FUNCIÓN: renderizar el menú en pantalla
function renderMenu() {
 const output = document.getElementById("output");
 output.innerHTML = ""; // Limpiar antes de mostrar

 // Tarea 3: Mostrar contador en pantalla
 output.innerHTML += `<p>Total de platos en el menú: ${contarPlatos()}</p>`;

 let html = "<ul>";
 for (let i = 0; i < menu.length; i++) {
   const plato = menu[i];
   html += `<li>${plato.nombre} — S/ ${plato.precio} — Stock: ${plato.stock}</li>`;
 }
 html += "</ul>";
 output.innerHTML += html;
}

// 3) FUNCIÓN: agregar plato (Tarea 2: Lógica de formulario)
function agregarPlatoDemo(object) {
 const nuevoPlato = { 
    nombre: object.nombre, 
    precio: object.precio, 
    stock: object.stock };
 menu.push(nuevoPlato);
}

// Tarea 3: Función de contar platos (Obligatoria)
function contarPlatos() {
 return menu.length;
}

// VALIDACIÓN: Evitar duplicados
function validarPlato(object){
    for(let i = 0 ; i < menu.length; i++){
        const plato = menu[i];
        if(plato.nombre === object.nombre && plato.precio === object.precio){
            return true;
        }
    }
}

// 4) EVENTOS: Conectar botones
document.getElementById("btnMostrar").addEventListener("click", () => {
 renderMenu();
});

// Evento del formulario (Tarea 2)
const formNewPlato = document.getElementById("form-add-platoMenu");
if (formNewPlato) {
    formNewPlato.addEventListener("submit", e => {
        e.preventDefault(); 
        const nombre = document.getElementById("nombreNewPlato").value.trim();
        const precio = Number(document.getElementById("precioNewPlato").value.trim());
        const stock = document.getElementById("stockNewPlato").value.trim();
        const newPlato = {nombre, precio, stock}

        if(validarPlato(newPlato)){
            alert("Este plato ya está registrado..."); 
            return;
        }

        agregarPlatoDemo(newPlato);
        renderMenu();
    });
}