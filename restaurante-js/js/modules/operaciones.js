// Importar
import { menu } from "./menu.js";

// BUSCAR POR COINCIDENCIA - FIND
// Usamos includes para buscar por coincidencia de texto en el nombre del plato
export function buscarPlatoNombre(name) {
  return menu.find((plato) =>
    plato.nombre.toLowerCase().includes(name.trim().toLowerCase()),
  );
}
export function buscarPlatoNombreExacto(name) {
  return menu.find((plato) =>
    plato.nombre.toLowerCase() === (name.trim().toLowerCase())
  );
}
// FUNCION: Filtrar platos por stock bajo (<= 3)
export function filtrarStockBajo(num) {
  return menu.filter((plato) => plato.stock <= num);
}

// FUNCIÓN DEL RESUMEN DEL MENÚ (MAP)
// RESUMEN DEL MENÚ (MAP)
export function resumenMenu() {
  return menu.map((plato) => {
    return `${menu.indexOf(plato) + 1}) ${plato.nombre} - S/.${plato.precio}`;
  });
}

// Tarea Extra (Venta de platos)
function venderPlato(idx, cantidad) {
  const plato = menu[idx];

  if (!plato) return { ok: false, mensaje: "Plato no Encontrado" }

  if (plato.stock === 0) return { ok: false, mensaje: "No Disponible (agotado)" }

  if (cantidad <= 0) return { ok: false, mensaje: "Cantidad Inválida" }

  if (cantidad > plato.stock) return { ok: false, mensaje: `Stock insuficiente, solo quedan ${plato.stock} platos` }

  return {
    plato,
    ok: true,
    mensaje: `Venta Realizada Exitosamente! \nDetalles: \nPlato: ${plato.nombre} \nCantidad: ${cantidad} \nPrecio Unitario: S/.${plato.precio} \nTotal: S/.${plato.precio * Number(cantidad)}`
  }

}

export function verificarEstadoGeneral() {
  let agotados = 0;
  let bajos = 0;

  // Bucle for tradicional obligatorio
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].stock === 0) {
      agotados++;
    } else if (menu[i].stock <= 3) {
      bajos++;
    }
  }

  // Mensajes visuales
  if (agotados > 0) {
    return `Hay platos agotado: ${agotados}`;
  } else if (bajos > 0) {
    return `Hay platos con stock bajo: ${bajos}`;
  } else {
    return "Todo disponible.";
  }
}

//DIA 7
export function simularRespuestaServidor(result) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const time = Math.random();
      if (time < 0.3) {
        rej("Error del servidor simulado...");
      }
      else {
        res(result);
      }
    }, 2000);
  })
};

// Función de vender plato (Async) 
export async function venderPlatoAsync(idx, cantidad) {
  const result = venderPlato(idx, cantidad);

  if (!result.ok) throw new ErrorNegocio(result.mensaje);

  const respuesta = await simularRespuestaServidor(result.mensaje);

  if (respuesta === result.mensaje) result.plato.stock -= cantidad;

  return respuesta;
};
// CLase ErrorNegocio (hereda de la clase nativa Error)
export class ErrorNegocio extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ErrorNegocio"
  };
};