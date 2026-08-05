# Reflexión del Día 3: Flavio Silva

## Bloque A: 
1) **¿La predicción A fue correcta? ¿layout.tsx necesitaba `"use client"` para importar PedidoProvider?**
    - Sí, fue correcta, no necesitaba el `"use client"`

## Bloque B: 
1) **¿El TODO era más simple de conectar de lo que esperabas, o fue complicado?**
    - Fue bastante simple, ya que solo bastó con que llame`agregarPlato(plato)` y usar `reduce` en el NavBar para mostrar las unidades totales en tiempo real.

## Bloque C: 
1) **¿La predicción sobre metadata fue correcta? ¿Qué implica esa limitación para el diseño de la app?**
    - Sí, fue correcta, implica que los Client Components no pueden exportar `metadata`, pero convertí a `carrito/page.tsx` en un `Server Component`, ya que dividí en componentes para no tener todo en uno solo, sino en varios archivos, divididor por responsabilidades, facilitando el manejo.

## Bloque D: 
1) **¿La separación entre lo que hace el Server Action y lo que hace el cliente fue clara?**
    - Sí, fue clara, ya que el Server Action se encarga de enviar la comanda al backend, mientras que el cliente se encarga de mostrar el estado del pedido y manejar la interacción del usuario.

## Bloque E: 
1) **¿Cuántos errores TypeScript había antes de resolver? Anota en reflexion.md sección E.**
    - Bueno ayer no hubo errores pendientes a reolver y ahora tampoco hay ningún error.