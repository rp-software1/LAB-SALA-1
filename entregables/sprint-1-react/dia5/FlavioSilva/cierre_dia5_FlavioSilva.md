# Cierre del día 5 - Flavio Silva

## Preguntas 
1) ¿Por qué `React` obliga a usar `setCarrito` en lugar de mutar el array directamente con `push`? ¿Qué mecanismo interno de `React` hace que esto sea necesario?
    - Porque `React` busca que la referencia en memoria del elemento sea modificada para volver a **renderizarla**, si usamos el `push` solo modificaríamos el elemento más no su referencia en memoria, por ende debemos de generar un nuevo `array` de **carrito** y además es motivo por el cual se usa `filter()` o `map()` porque generan `arrays` nuevos.

2) Hoy usaron `useEffect` con `[]` para cargar el menú. Mañana van a usar `Axios` para hacer un `GET` real a `/api/platos`. ¿Qué parte del código de hoy va a cambiar y qué parte va a quedarse igual?
    - Cambiaria el `setTimeout()` y la forma en la que obtengo los datos, no traería del `.mock` sino del `API` por medio de peticiones. 
    - Lo que se mantendría sería la lógica como `useState` o el `return` con los datos de cada **plato**. 

3) En el `Sprint 0` calculaban el total del carrito con un `for loop`. Hoy usaron `reduce`. ¿Son equivalentes? ¿En qué situación usarías uno sobre el otro?
    - Bueno serían equivalentes si hablamos del resultado, pero tienen diferencias, por ejemplo el `for loop` puede ser usado para más cosas y no solo para hallar una suma, mientras que `reduce` es más específico para reducir un array a un solo valor. Por lo tanto usaría `reduce` cuando quiera obtener un solo valor del array y `for loop` cuando quiera hacer algo más con el array o cuando necesite más control sobre el bucle.

4) Si mañana necesitaran compartir el carrito entre dos componentes distintos — por ejemplo, `CarritoPage` y una barra de navegación que muestra cuántos ítems hay — ¿dónde tendría que vivir el estado del carrito? ¿Por qué?
    - Si el carrito necesita ser utilizado por `CarritoPage` y por la barra de navegación, el estado ya no debería vivir dentro de `CarritoPage`, sino en el componente padre que contiene a ambos, por ejemplo `App`. De esa forma, ambos componentes recibirían el carrito mediante props y siempre trabajarían con el mismo estado.