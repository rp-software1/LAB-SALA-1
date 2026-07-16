# Cierre del día 5 - Samir Ochoa

## Preguntas 

1) ¿Por qué `React` obliga a usar `setCarrito` en lugar de mutar el array directamente con `push`? ¿Qué mecanismo interno de `React` hace que esto sea necesario?
    - Porque `React` es como un vigilante que solo mira si algo cambió cuando le entregas una "copia nueva". Si usas `push`, el array es el mismo que antes, solo que con un dato extra, y `React` no se da cuenta del cambio y no actualiza la pantalla. Al usar `setCarrito` con un nuevo array, obligas a `React` a darse cuenta de que algo cambió y así refresca la vista.

2) Hoy usaron `useEffect` con `[]` para cargar el menú. Mañana van a usar `Axios` para hacer un `GET` real a `/api/platos`. ¿Qué parte del código de hoy va a cambiar y qué parte va a quedarse igual?
    - Lo que cambia es el contenido del `useEffect`: en lugar del `setTimeout` y el `mock`, pondremos la llamada a la base de datos con `Axios`. Lo que se queda igual es la estructura, es decir, el uso de estados (`useState`) para guardar los platos y el carrito, y la forma en que mostramos todo en la pantalla.

3) En el `Sprint 0` calculaban el total del carrito con un `for loop`. Hoy usaron `reduce`. ¿Son equivalentes? ¿En qué situación usarías uno sobre el otro?
    - Sí, al final ambos dan el mismo resultado. El `for loop` es como hacer el trabajo paso a paso manualmente, y `reduce` es como una herramienta rápida para sumar todo de un solo golpe. Usaría `reduce` siempre que quiera sumar o reducir una lista a un solo número, porque es mucho más cortito y fácil de leer.

4) Si mañana necesitaran compartir el carrito entre dos componentes distintos — por ejemplo, `CarritoPage` y una barra de navegación que muestra cuántos ítems hay — ¿dónde tendría que vivir el estado del carrito? ¿Por qué?
    - El carrito tendría que estar en un lugar más "alto", como en el componente principal (`App`), para que todos los hijos puedan verlo. Si lo dejo guardado adentro de `CarritoPage`, los otros componentes son como si no pudieran ver lo que pasa ahí adentro; al subirlo de nivel, todos tienen acceso a la misma información.