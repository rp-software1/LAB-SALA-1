# Cierre del día 8 - Samir Ochoa

## Preguntas 

1) El `PedidoContext` tiene la misma forma que el modelo `Pedido` en `NestJS`. ¿Por qué crees que se diseñó así? ¿Qué ventaja da cuando llegue el momento de conectar el frontend con la `API` real?

    - Se diseñó igual para que los datos del frontend y el backend hablen el mismo idioma. La ventaja es que no tendremos que modificar nada cuando conectemos la API, porque la estructura ya coincide perfectamente.

2) Describe en tus palabras la diferencia entre `createContext`, `Provider` y `useContext`. ¿Cuándo se usa cada uno? ¿Quién crea el estado, quién lo comparte y quién lo lee?

    - **createContext:** Es el que crea el espacio o "contenedor" para guardar los datos.
    - **Provider:** Es el encargado de envolver a la app y compartir el estado (que se crea con useState) a todos los componentes.
    - **useContext:** Es el gancho (hook) que permite a cualquier componente leer o consumir lo que el Provider está compartiendo.

> FIN DEL CIERRE DEL DÍA 8