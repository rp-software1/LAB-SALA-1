## Cierre del dia 2 - Samir Ochoa
**1. ¿Qué hace main.jsx exactamente? ¿Qué pasaría si lo borraras del proyecto?**
Es el archivo principal que conecta React con el HTML (`index.html`). Si lo borras, la página se queda en blanco porque el navegador no tendría el punto de entrada para cargar y renderizar toda la aplicación en el `div` con id "root".

**2. ¿Por qué PlatoCard vive en components/ y Home vive en pages/? ¿Cuál es la diferencia concreta entre los dos?**
PlatoCard es un componente pequeño y reutilizable que puedes usar en varias partes, por eso va en components. Home es una vista completa que representa una sección específica de la web, por eso va en pages. La diferencia es que la página es el contenedor y el componente es la pieza que va dentro.

**3. En el Día 1 usabas import { platosMock } from "./data/platos.mock.js". ¿Por qué ese import funciona ahora con Vite y no funcionaba con el CDN del Día 1?**
Porque Vite tiene un sistema de empaquetado (bundler) que entiende los módulos de JavaScript y sabe cómo resolver las rutas de archivos locales. Con el CDN del Día 1, el navegador no sabía qué hacer con una ruta local porque simplemente no estaba preparado para gestionar un sistema de módulos de archivos.

**4. hooks/, services/ y context/ están vacías hoy. ¿Qué va a vivir en cada una y desde qué día del proyecto se van a usar?**
* **hooks/**: Aquí pondremos nuestra propia lógica reutilizable (ej. lógica de filtros). Se empezará a usar cuando necesitemos simplificar los componentes.
* **services/**: Aquí irá la conexión real con la API (las llamadas al backend). Se usará cuando dejemos de usar el mock y empecemos a pedir los datos reales de Node.
* **context/**: Aquí irá la información global que muchas partes de la app necesitan a la vez, como el carrito de compras. Se usará cuando la app crezca y pasar props se vuelva un dolor de cabeza.