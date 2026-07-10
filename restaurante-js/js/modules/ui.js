// Import necesarios
import { menu, agregarPlato, validarPlato } from "./menu.js";
import {
  buscarPlatoNombreExacto,
  buscarPlatoNombreCoincidencia,
  filtrarStockBajo,
  resumenMenu,
  venderPlatoAsync,
  verificarEstadoGeneral,
} from "./operaciones.js";

// SELECCIONAR BOTONES Y FORMULARIO
const btnMostrar = document.getElementById("btnMostrar");
const btnBuscar = document.getElementById("btnBuscar");
const btnVender = document.getElementById("btnVender");
const btnResumen = document.getElementById("btnResumen");
const formNewPlato = document.getElementById("form-add-platoMenu");
const inputBuscar = document.getElementById("inputBuscar");
const btnStockBajo = document.getElementById("btnStockBajo");
const output = document.getElementById("output");

// FUNCIÓN PARA HALLAR EL ESTADO
function estadoPlato(stock) {
  if (stock === 0) return { texto: "Agotado", clase: "agotado" };
  else if (stock <= 3) return { texto: "Bajo", clase: "bajo" };

  return { texto: "Normal", clase: "normal" };
}

// Función de contar platos (Obligatoria)
function contarPlatos(list) {
  return list.length;
}

// Renderizar lista genérica en pantalla
function renderLista(titulo, listaDeTextos) {
  output.innerHTML = `<h3>${titulo}</h3>`;

  if (listaDeTextos.length === 0) {
    output.innerHTML += "<p>No hay elementos para mostrar.</p>";
    return;
  }

  output.innerHTML += `<p>Total de platos: ${contarPlatos(listaDeTextos)}</p>`;

  let html = "<ul>";
  listaDeTextos.forEach((texto) => {
    html += `<li>${texto}</li>`;
  });
  html += "</ul>";

  output.innerHTML += html;
}

// FUNCIÓN GENERAL PARA RENDERIZAR LA LISTA DE PLATOS EN TABLA
function renderListPlatos(list) {
  output.innerHTML = "";
  // Contador
  const title = document.createElement("h3");
  title.textContent = `Total de platos: ${contarPlatos(list)}`;

  output.appendChild(title);

  let html = `
    <table border="1">
      <thead>
        <tr>
          <th>N°</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th> Vender </th> 
          <th> Estado </th>
        </tr>
      </thead>
      <tbody>
  `;

  for (let i = 0; i < list.length; i++) {
    const plato = list[i];

    html += `
      <tr class= "${estadoPlato(plato.stock).clase}">
        <td>${i + 1}</td>
        <td>${plato.nombre}</td>
        <td>S/ ${plato.precio}</td>
        <td>${plato.stock}</td>
        <td> <button class="btn-vender" data-index ="${menu.indexOf(plato)}">Vender</button> </td>
        <td> ${estadoPlato(plato.stock).texto}</td>
      </tr>
    `;
  }

  html += `
      </tbody>
    </table>
  `;

  output.innerHTML += html;
}

// FUNCIONES PARA USAR EN LOS EVENTOS DE UI.JS

// renderizar el menú en pantalla
function renderMenu() {
  renderListPlatos(menu);
  alert(verificarEstadoGeneral());
}

// formAgregarPlato
function formAgregarPlato(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombreNewPlato").value.trim();
  const precio = Number(document.getElementById("precioNewPlato").value.trim());
  const stock = Number(document.getElementById("stockNewPlato").value.trim());
  const newPlato = { nombre, precio, stock };
  if (validarPlato(newPlato)) {
    alert("Este plato ya está registrado o el precio/stock es inválido.");
    return;
  }
  agregarPlato(newPlato);
  renderMenu();
}

// btnBuscarPorNombre
function btnBuscarPorNombre() {
  const nombreBuscado = inputBuscar.value.trim();

  if (nombreBuscado.length === 0) return;

  const platoEncontrado = buscarPlatoNombreCoincidencia(nombreBuscado);

  if (!platoEncontrado) {
    output.innerHTML = "<p style='color: red;'>Plato no encontrado</p>";
    return;
  }

  renderListPlatos([platoEncontrado]);
}

// btnVnederPlato
async function btnVenderPlato() {
  try{
    const nombre = prompt("Ingrese el nombre del plato:"); 

    if(nombre === null){
      alert("Cancelando operación..."); 
      return;
    }

    if(nombre.trim() === ""){
      alert("Debe de ingresar un nombre"); 
      return;
    }

    const plato = buscarPlatoNombreExacto(nombre.trim());
    const index = menu.indexOf(plato); 

    if(!plato || index === -1){
      alert("Plato no encontrado"); 
      return;
    }

    alert(`Plato Encontrado: \nNombre: ${plato.nombre} \nPrecio: ${plato.precio} \nStock: ${plato.stock} \nAhora ingresará la cantidad`);

    const cantidad = prompt("Ingrese la cantidad a vender:");

    if (cantidad == 0 || cantidad === null) {
      alert("Cancelando operación...");
      return;
    }

    if (!validarCantidad(cantidad)) {
      alert("Cantidad inválida");
      return;
    }

    let mensaje = document.querySelector(".message"); 
    mensaje ? mensaje.innerHTML = "" : mensaje = document.createElement("p"); 
    // Agregar Clases proximas  
    mensaje.classList.remove("error", "success");
    mensaje.classList.add("wait", "message");

    mensaje.innerHTML = "Procesando Pedido..."; 
    output.appendChild(mensaje); 

    const venta = await venderPlatoAsync(index, cantidad); 
    // Modiifcar clases del mensaje 
    mensaje.classList.remove("wait");
    mensaje.classList.add("success");

    renderMenu(); 
    output.appendChild(mensaje); 
    mensaje.innerHTML = venta.replaceAll("\n", "<br>");

  }
  catch(err){
    const mensaje = document.querySelector(".message"); 
    mensaje.classList.remove("wait", "success"); 
    mensaje.classList.add("error"); 
    
    if(err.name === "ErrorNegocio"){
      mensaje.textContent = `${err.name}: ${err.message}`;
      console.error(`${err.name}: ${err.message}`);
    }
    else{
      mensaje.textContent = err;
      console.error(err);
    }

    output.appendChild(mensaje);   
  }
};

// Validar cantidad
function validarCantidad(cantidad) {
  // REGEX
  const regexNum = /^[0-9]+$/;
  if (regexNum.test(cantidad)) {
    return true;
  } else {
    return false;
  }
}

// EXPORTAR LA FUNCION PARA EL UI
export function inicializarUI() {
  btnMostrar.addEventListener("click", () => renderMenu());
  formNewPlato.addEventListener("submit", (e) => formAgregarPlato(e));
  btnBuscar.addEventListener("click", () => btnBuscarPorNombre());
  inputBuscar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnBuscar.click();
  });
  inputBuscar.addEventListener(
    "blur",
    () => (inputBuscar.value = inputBuscar.value.trim()),
  );

  btnStockBajo.addEventListener("click", () => {
    const listaPlatos = filtrarStockBajo(3);
    const listaTextos = listaPlatos.map(
      (p) => `${listaPlatos.indexOf(p) + 1}). ${p.nombre} - Stock: ${p.stock}`,
    );
    renderLista("Platos con stock bajo (<= 3):", listaTextos);
  });

  btnResumen.addEventListener("click", () => {
    const listaResumen = resumenMenu();
    renderLista("Resumen del Menú:", listaResumen);
    verificarEstadoGeneral();
  });

  btnVender.addEventListener("click", () => btnVenderPlato());
}
