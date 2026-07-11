# Cierre Día 1 - Samir Ochoa

### 1. En el Sprint 0 tenías renderMenu() con innerHTML. Hoy construiste PlatoCard. ¿Qué diferencia concreta hay en cómo cada uno actualiza la pantalla cuando cambia un solo plato? Menciona el Virtual DOM en tu respuesta.
Antes con innerHTML, el navegador borra todo el menú y lo redibuja entero cada vez que algo cambia, lo cual es lento. Con PlatoCard, usamos el Virtual DOM: React compara el estado y solo actualiza el nodo específico que cambió, dejando el resto intacto.

### 2. ¿Qué es JSX exactamente? ¿Es HTML? ¿Es JavaScript? ¿Qué hace Vite con él antes de que llegue al navegador?
JSX no es ninguna de las dos, es una sintaxis que nos permite escribir estructuras tipo HTML dentro de JS para que sea más legible. Vite lo transforma a código JavaScript estándar antes de que el navegador lo ejecute.

### 3. PlatoCard recibe los mismos campos que va a devolver GET /api/platos del equipo de Node. ¿Por qué eso importa? ¿Qué van a tener que cambiar en PlatoCard cuando el endpoint esté listo?
Es importante porque así usamos la misma estructura de datos del backend desde el principio. Cuando el endpoint esté listo, no necesitaremos cambiar el componente, solo conectaremos la llamada del API para traer los datos reales en lugar de los mockeados.

### 4. Mañana instalan Vite y crean el proyecto real. ¿Qué problema resuelve Vite que hoy resolvieron con el CDN de React?
El CDN nos obligaba a cargar todo de forma externa y gestionar dependencias manualmente. Vite nos da un entorno local profesional, nos permite instalar paquetes de forma ordenada y hace que el desarrollo sea mucho más rápido y fácil de preparar para producción.
