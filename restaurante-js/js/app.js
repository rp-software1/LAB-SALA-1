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
  renderListPlatos(menu);
}

// 3) FUNCIÓN: agregar plato (Tarea 2: Lógica de formulario)
function agregarPlatoDemo(object) {
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

// Tarea 3: Función de contar platos (Obligatoria)
function contarPlatos(list) {
  return list.length;
}

// VALIDACIÓN: Evitar duplicados
function validarPlato(object) {
  const nombre = FormatearNombre(object.nombre);

  if (object.precio <= 0 || object.stock <= 0) return true;

  for (let i = 0; i < menu.length; i++) {
    const plato = menu[i];
    if (plato.nombre === nombre && plato.precio === object.precio) {
      return true;
    }
  }
};

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
    const stock = Number(document.getElementById("stockNewPlato").value.trim());
    const newPlato = { nombre, precio, stock }

    if (validarPlato(newPlato)) {
      alert("Este plato ya está registrado o el precio/stock es inválido.");
      return;
    }

    agregarPlatoDemo(newPlato);
    renderMenu();
  });
}


// FUNCIONES DIA 4 
// BUSCAR POR COINCIDENCIA - FIND
// Usamos includes para buscar por coincidencia de texto en el nombre del plato
function buscarPlatoNombre(name) {
  return menu.find(plato => plato.nombre.toLowerCase().includes(name.trim().toLowerCase()));
};

// FUNCION: Filtrar platos por stock bajo (<= 3)
function filtrarStockBajo(num) {
  return menu.filter(plato => plato.stock <= num);
}


// FUNCIÓN DEL RESUMEN DEL MENÚ (MAP)
// RESUMEN DEL MENÚ (MAP)
function resumenMenu() {
  return menu.map(plato => {
    return `${menu.indexOf(plato) + 1}) ${plato.nombre} - S/.${plato.precio}`;
  });
};

// FUNCIÓN: Renderizar lista genérica en pantalla
function renderLista(titulo, listaDeTextos) {
  const output = document.getElementById("output");
  output.innerHTML = `<h3>${titulo}</h3>`;

  if (listaDeTextos.length === 0) {
    output.innerHTML += "<p>No hay elementos para mostrar.</p>";
    return;
  };

  output.innerHTML += `<p>Total de platos: ${contarPlatos(listaDeTextos)}</p>`;

  let html = "<ul>";
  listaDeTextos.forEach(texto => {
    html += `<li>${texto}</li>`;
  });
  html += "</ul>";

  output.innerHTML += html;
};

// FUNCIÓN GENERAL PARA RENDERIZAR LA LISTA DE PLATOS EN TABLA
function renderListPlatos(list) {
  const output = document.getElementById("output");

  output.innerHTML = ""
  // Contador
  output.innerHTML += `<p>Total de platos: ${contarPlatos(list)}</p>`;

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

  for (let i = 0; i < list.length; i++) {
    const plato = list[i];

    html += `
      <tr>
        <td>${i + 1}</td>
        <td>${plato.nombre}</td>
        <td>S/ ${plato.precio}</td>
        <td>${plato.stock}</td>
        <td> <button class="btn-vender" data-index ="${menu.indexOf(plato)}">Vender</button> </td>
      </tr>
    `;
  }

  html += `
      </tbody>
    </table>
  `;

  output.innerHTML += html;
};

// FORMATEAR EL NOMBRE DE CADA PLATO
function FormatearNombre(nombre) {
  if (nombre.trim().length === 0) {
    return "";
  }

  return nombre.trim()[0].toUpperCase() + nombre.trim().slice(1).toLowerCase();
}

// --- PARTE D: Conectar botones (Eventos) ---

// 1. Conectar botón de buscar
document.getElementById("btnBuscar").addEventListener("click", () => {
  const nombreBuscado = document.getElementById("inputBuscar").value.trim();

  if(nombreBuscado.length === 0) return;

  const platoEncontrado = buscarPlatoNombre(nombreBuscado);

  if(!platoEncontrado){
    document.getElementById("output").innerHTML = "<p style='color: red;'>Plato no encontrado</p>";
    return;
  }

  renderListPlatos([platoEncontrado]);

});

// Evento para buscar al presionar Enter
document.getElementById("inputBuscar").addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    document.getElementById("btnBuscar").click();
  }
});

// Evento para limpiar el input al perder el foco
document.getElementById("inputBuscar").addEventListener("blur", () => {
  document.getElementById("inputBuscar").value = document.getElementById("inputBuscar").value.trim();
});

// 2. Conectar botón de stock bajo
document.getElementById("btnStockBajo").addEventListener("click", () => {
  const listaPlatos = filtrarStockBajo(3); 
  const listaTextos = listaPlatos.map(p => `${listaPlatos.indexOf(p) + 1}). ${p.nombre} - Stock: ${p.stock}`);
  renderLista("Platos con stock bajo (<= 3):", listaTextos);
});

// 3. Conectar botón de resumen
document.getElementById("btnResumen").addEventListener("click", () => {
  const listaResumen = resumenMenu();
  renderLista("Resumen del Menú:", listaResumen);
});

// PARTE E: Tarea Extra (Venta de platos)

function venderPlato(idx, cantidad) {
  const plato = menu[idx];
  const output = document.getElementById("output");

  if (!plato) {
    output.innerHTML = "<p>Error: Plato no encontrado.</p>";
    return;
  }

  if (plato.stock >= cantidad) {
    plato.stock -= cantidad;
    alert(`¡Venta exitosa! Se vendieron ${cantidad} de ${plato.nombre}.`);
  } else {
    alert(`Error: Stock insuficiente para ${plato.nombre}. Solo hay ${plato.stock} disponibles.`);
  }

  renderMenu();
};


document.getElementById("output").addEventListener("click", e => {
  const elemento = e.target;
    const btnVender = elemento.classList.contains("btn-vender"); 

    if(btnVender){
      const cantidad = prompt("Ingrese la cantidad a vender:");

      if(cantidad == 0 || cantidad === null){
        alert("Cancelando operación...");
        return;
      }

      if(!validarCantidad(cantidad)){
        alert("Cantidad inválida");
        return;
      }

      const index = Number(elemento.dataset.index); 
      venderPlato(index, Number(cantidad));
    }
});


function validarCantidad(cantidad){
    // REGEX 
    const regexNum = /^[0-9]+$/;
    if(regexNum.test(cantidad)){
        return true;
    }else{
        return false;
    }

}