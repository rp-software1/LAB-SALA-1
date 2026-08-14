# Predicción - Flavio Silva 

## Bloque A
1) **¿El backend tiene `GET` `/pedidos?estado=pendiente` para filtrar? Verificarlo con Postman antes de escribir código.**
- Si lo tiene
    ```tsx 
    ${BASE_URL}/pedidos/${pedidoId}/estado // URL
    ```

## Bloque B
1) - **¿generateMetadata necesita async en /comandas? ¿Necesita hacer fetch para construir el título?** 
    - No, porque el título de esta página es estático ("Comandas — Restaurante") y no depende de datos `async`. 
- **¿Puede ser síncrona?** Sí.
- **¿Por qué?** Al no requerir parámetros de URL ni llamadas asíncronas para buscar información específica de un registro, se puede declarar directamente como un objeto estático `export const metadata`

## Bloque C 
1) **¿Qué muestra ComandaCard para un pedido tipo "para_llevar" donde mesaId es null?**
    - Debería de mostrar algún mensaje representativo según el tipo que es.

## Bloque D 
1) **Si `avanzarEstadoPedido()` llama a `revalidatePath("/comandas")` en el servidor, `¿ComandasPage` hace el `fetch` automáticamente o el usuario tiene que recargar?**
    - Es automáticamente, la `caché` se invalida y al volver a renderizarlo `Next.js` hace el `fetch` nuevamente.