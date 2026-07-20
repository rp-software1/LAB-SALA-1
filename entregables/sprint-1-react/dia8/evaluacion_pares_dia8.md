# TARJETA DE EVALUACIÓN ENTRE PARES - DÍA 8

## Samir Ochoa

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Ochoa |
| **Escenario elegido** | N.° 2 |
| **Resumen de la respuesta** |No se puede porque el `push()` solo modifica el array en memoria, y lo que se necesita es modificar la referencia en memoria del estado _(sea array, u otro tipo de dato)_, por eso en este caso buscamos crear un nuevo `array` con los elementos anteriores y solo modificando lo necesario.|
| **Qué entendió bien (una frase)** |Entendió que en `React` no se debe modificar directamente el estado, sino crear una nueva referencia para que `React` detecte el cambio y actualice la interfaz.|
| **Qué necesita repasar (una frase)** |Puede reforzar la diferencia entre modificar un array normal de `JavaScript` y actualizar un estado usando las funciones de ``React`` como `setState`.|

---

## Flavio Silva

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Ochoa |
| **Evaluado** | Flavio Silva |
| **Escenario elegido** | N.° 3 |
| **Resumen de la respuesta** |La diferencia es que el `useState` podemos ver que maneja un estado pero dentro del componente, se puede asignar por `props`, mientras el `useContext` maneja algo global, a lo cual todos los componentes puede acceder sin necesidad de pasas `props`|
| **Qué entendió bien (una frase)** |Entendió que `useState` maneja estados dentro de un componente y que Context permite compartir información entre varios componentes sin pasar props.|
| **Qué necesita repasar (una frase)** |Puede repasar cuándo conviene usar `Context` y cuándo es suficiente usar `props` o `useState` para evitar usar `Context` innecesariamente.|