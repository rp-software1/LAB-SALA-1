# Predicción - Samir Ochoa 

## Bloque A
1) **¿El backend tiene `GET` `/pedidos?estado=pendiente` para filtrar? Verificarlo con Postman antes de escribir código.**
- Si lo tiene
    ```tsx 
    ${BASE_URL}/pedidos/${pedidoId}/estado // URL
    ```
## Bloque B
1) - **¿generateMetadata necesita async en /comandas? ¿Necesita hacer fetch para construir el título?** 
    - No, porque el título de esta página es estático ("Comandas — Restaurante") y no depende de datos dinámicos del backend.
- **¿Puede ser síncrona?** Sí.
- **¿Por qué?** Al no requerir parámetros de URL ni llamadas asíncronas para buscar información específica de un registro, se puede declarar directamente como un objeto estático `export const metadata`