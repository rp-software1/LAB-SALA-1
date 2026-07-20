# Cierre del día 8 - Flavio Silva

## Preguntas 

1) El `PedidoContext` tiene la misma forma que el modelo `Pedido` en `NestJS`. ¿Por qué crees que se diseñó así? ¿Qué ventaja da cuando llegue el momento de conectar el frontend con la `API` real?

    - La ventaja es la estructura, ya que así no se tiene que modificar su estructura cuando recibamos la data de la `API`.

2) Describe en tus palabras la diferencia entre `createContext`, `Provider` y `useContext`. ¿Cuándo se usa cada uno? ¿Quién crea el estado, quién lo comparte y quién lo lee?

    - El `createContext` es quien crea el contexto, como un contenedor, que empieza vacío. 
    - El `Provider` es quien va a entregar el valor del contexto a cada componente hijo _(children)_.
    - El `useContext` se encarga de consumir o leer el valor del contexto. 


> FIN DEL CIERRE DEL DÍA 8