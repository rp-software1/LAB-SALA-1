# TARJETA DE EVALUACIÓN ENTRE PARES - DÍA 9

## Samir Ochoa

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Ochoa |
| **Escenario elegido** | N.° 1 |
| **Resumen de la respuesta** |El mesero selecciona la mesa actualizando el estado del PedidoContext. Luego, al hacer clic en 'Enviar comanda', el componente `CarritoPage` ejecuta `crearPedido()` enviando mediante una solicitud `POST` los datos de `mesaId`, `tipo` y `items`. El backend de NestJS procesa esta petición HTTP y almacena el documento final en MongoDB.|
| **Qué entendió bien (una frase)** |Entendió perfectamente cómo viajan los datos desde las acciones del usuario en la interfaz hasta el backend y su persistencia final.|
| **Qué necesita repasar (una frase)** |Puede repasar cómo manejar de forma más detallada las respuestas y códigos de estado que regresa el servidor tras cada operación.|

---

## Flavio Silva

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Ochoa |
| **Evaluado** | Flavio Silva |
| **Escenario elegido** | N.° 2 |
| **Resumen de la respuesta** |Si el `token` expira al momento de enviar la comanda, el interceptor de `Axios` enviará un `token` vencido, provocando que el backend responda con un error de autorización. Esto activará el bloque `catch` en el frontend, mostrando el mensaje de error correspondiente al mesero.|
| **Qué entendió bien (una frase)** |Entendió cómo se comportan las peticiones HTTP y los interceptores ante credenciales inválidas o expiradas.|
| **Qué necesita repasar (una frase)** |Puede profundizar en los mecanismos de manejo automático de sesiones expiradas para mejorar la experiencia de usuario.|