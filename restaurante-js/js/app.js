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
  output.innerHTML = ""; // limpiar todo antes de renderizar

  // Contador
  output.innerHTML += `<p>Total de platos en el menú: ${contarPlatos()}</p>`;

  let html = `
    <table border="1">
      <thead>
        <tr>
          <th>N°</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < menu.length; i++) {
    const plato = menu[i];

    html += `
      <tr>
        <td>${i + 1}</td>
        <td>${plato.nombre}</td>
        <td>S/ ${plato.precio}</td>
        <td>${plato.stock}</td>
      </tr>
    `;
  }

  html += `
      </tbody>
    </table>
  `;

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