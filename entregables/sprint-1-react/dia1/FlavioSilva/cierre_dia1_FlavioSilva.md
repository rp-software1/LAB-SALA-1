# Cierre del Día 1 - Flavio Silva 

## Preguntas: 

- En el Sprint 0 tenías `renderMenu()` con `innerHTML`. Hoy construiste `PlatoCard`. ¿Qué diferencia concreta hay en cómo cada uno actualiza la pantalla cuando cambia un solo plato? Menciona el `Virtual DOM` en tu respuesta

    - Antes con `renderMenu()` y el uso de `innerHTML` si yo modificaba un elemento pues todo se volvía a renderizar, pero `React` lo que hace es usar el `Virtual DOM` para comparar el estado del `DOM` anterior con el nuevo y solo renderiza el contenido modificado.

- ¿Qué es `JSX` exactamente? ¿Es `HTML`? ¿Es `JavaScript`? ¿Qué hace Vite con él antes de que llegue al navegador?

    - `JSX` significa `JavaScript XML`, viene a ser una extensión de `JavaScript` y nos permite escribir `HTML` dentro de `JavaScript`. `Vite` se encarga de transformar el `JSX` a `JavaScript` antes de enviarlo al `Browser`. 

- `PlatoCard` recibe los mismos campos que va a devolver `GET` `/api/platos` del equipo de `Node`. ¿Por qué eso importa? ¿Qué van a tener que cambiar en `PlatoCard` cuando el endpoint esté listo?

    - Eso importa porque desed ya mantenemos la estructura que tendrá cada objeto `Plato`, así cuando todo esté listo solo nos conectamos al `endpoint` y listo.

- Mañana instalan `Vite` y crean el proyecto real. ¿Qué problema resuelve `Vite` que hoy resolvieron con el `CDN` de `React`?

    - Lo primero es que ya podemos importar otros archivos como el `platos.mock.js` pues no nos dejaba importar ese archivo en el `HTML` pues nos pedían un tipo `module` y si usabamos eso y quitabamos el `CDN` de `React` pues nos daba error.

> FIN