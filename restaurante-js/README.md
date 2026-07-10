# restaurante-js  
- **Autores:** Samir Ochoa y Flavio Silva
- **Estado:** en desarrollo

---
## Estructura del proyecto
Para mantener el principio de **Responsabilidad Única** y una arquitectura profesional, el código se organiza así:
* **`menu.js`**: Maneja la lista de platos y sus validaciones de datos.
* **`operaciones.js`**: Contiene la lógica de negocio, cálculos de stock, la simulación asincrónica (Promesas) y los errores de negocio (`ErrorNegocio`).
* **`ui.js`**: Gestiona la interfaz de usuario, eventos, renderizado en tablas y la diferenciación de mensajes según el tipo de error.
* **`css/style.css`**: Hoja de estilos externa para la gestión de estados visuales (procesando, éxito, error).
* **`main.js`**: Punto de entrada que coordina los módulos.

## ¿Por qué esta estructura?
1. **Separación de responsabilidades:** Cada módulo tiene una sola responsabilidad, lo que hace que el código sea más fácil de entender y mantener.
2. **Modularidad:** El código está dividido en módulos, lo que facilita la reutilización de código y la colaboración entre desarrolladores.
3. **Escalabilidad:** La estructura modular facilita la adición de nuevas funcionalidades en el futuro.
4. **Mantenimiento:** El código es más fácil de mantener y depurar debido a la separación de responsabilidades.
5. **Reutilización:** El código puede ser reutilizado en otros proyectos sin necesidad de modificaciones.
6. **Resiliencia:** Las reglas de negocio (stock, validaciones de venta) viven solo en `operaciones.js` y se comunican mediante errores (`throw`), así ninguna otra capa puede "olvidarse" de validarlas ni duplicar esa lógica.

## Manejo de errores y validaciones (Día 8)
* Se creó la clase `ErrorNegocio` (extiende `Error`) en `operaciones.js` para representar fallos esperables del negocio (plato no encontrado, agotado, cantidad inválida, stock insuficiente).
* `venderPlatoAsync` lanza (`throw`) `ErrorNegocio` para esos casos; los fallos del servidor simulado se manejan por separado.
* `ui.js` valida antes de vender: nombre vacío y cantidad no numérica/negativa (regex), evitando que datos inválidos lleguen a `operaciones.js`.
* El `try/catch` en `ui.js` diferencia el tipo de error recibido para mostrar el mensaje adecuado.
* El stock solo se descuenta si la venta se confirma con éxito — un error nunca deja el `menu` en un estado inconsistente.

## Roadmap del proyecto
* **Día 1-2**: Variables, funciones y objetos.
* **Día 3**: Arrays y menú visual.
* **Día 4**: Métodos avanzados de arrays.
* **Día 5**: Condicionales, bucles y estados de stock.
* **Día 6**: Modularización y estructura profesional.
* **Día 7**: Async/Await, Promesas y simulación de servidor.
* **Día 8**: Manejo profesional de errores y validaciones robustas.