# restaurante-js  
- **Autores:** Samir Ochoa y Flavio Silva
- **Estado:** en desarrollo

---
## Estructura del proyecto (Día 7)
Para mantener el principio de **Responsabilidad Única** y una arquitectura profesional, el código se organiza así:
* **`menu.js`**: Maneja la lista de platos.
* **`operaciones.js`**: Contiene la lógica de negocio, cálculos de stock y la simulación asincrónica (Promesas).
* **`ui.js`**: Gestiona la interfaz de usuario, eventos y la actualización dinámica de mensajes.
* **`css/style.css`**: Hoja de estilos externa para la gestión de estados visuales (procesando, éxito, error).
* **`main.js`**: Punto de entrada que coordina los módulos.

## ¿Por qué esta estructura?
1. **Separacion de responsabilidades:** Cada módulo tiene una sola responsabilidad, lo que hace que el código sea más fácil de entender y mantener.
2. **Modularidad:** El código está dividido en módulos, lo que facilita la reutilización de código y la colaboración entre desarrolladores. 
3. **Escalabilidad:** La estructura modular facilita la adición de nuevas funcionalidades en el futuro.
4. **Mantenimiento:** El código es más fácil de mantener y depurar debido a la separación de responsabilidades. 
5. **Reutilización:** El código puede ser reutilizado en otros proyectos sin necesidad de modificaciones.

## Roadmap del proyecto
* **Día 1-2**: Variables, funciones y objetos.
* **Día 3**: Arrays y menú visual.
* **Día 4**: Métodos avanzados de arrays.
* **Día 5**: Condicionales, bucles y estados de stock.
* **Día 6**: Modularización y estructura profesional.
* **Día 7**: Async/Await, Promesas y simulación de servidor.