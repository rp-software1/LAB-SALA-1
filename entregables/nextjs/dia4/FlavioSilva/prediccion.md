# Predicción - Flavio Silva 

## Bloque A 
1) **¿El backend tiene un endpoint GET /mesas/:id? Verificarlo con Postman antes de escribir código. ¿Qué retorna si el ID no existe — un 404 o un objeto vacío?**
    - Si tiene el endpoint de `/meas/:id`, el `id` es un string porque usamos el `_id` numérico, y si no existe me retorna un objeto con `error: Not Found`.

## Bloque B 
1) **¿generateMetadata puede hacer fetch de datos del backend para construir el title dinámico? ¿O solo puede usar los params de la URL?**
    - Si puede hacer el fetch. 

## Bloque C 
1) **¿El Suspense manual que envuelve `<MesaDetalle>` en `page.tsx` — cuándo exactamente muestra el skeleton? ¿`MesaDetalle` hace algún `fetch` asíncrono?**
    - El skeleton se muestra cuando `MesaDetalle` hace el fetch de los datos de la mesa, y sí, `MesaDetalle` hace un fecth. 