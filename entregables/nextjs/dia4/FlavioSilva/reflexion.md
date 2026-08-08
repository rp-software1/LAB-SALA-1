# Reflexión - Flavio Silva 

## Bloque A 
1) **¿El backend tenía el endpoint /mesas/:id o tuvieron que usar la Opción B? ¿Qué implica eso para el rendimiento?**
    - Si tenía pero el que usamos fue el `_id` y en ves de llamar a `getMesas` usamos un filtro con parámetros en la petición `/mesas?_id=${id}`. De esta forma si no se encuentra nos retorna un array vacío _(manejado con el `.length === 0`)_ y no un error 404 _(pero igual dejamos el del `res.status === 404` por si luego se usa el `id`), y si llega a encontrar la mesa retornamos el `mesas[0]`. 

## Bloque B
1) **¿La predicción sobre generateMetadata async fue correcta? ¿Qué implica hacer dos fetches iguales (en generateMetadata y en el componente)?**
    - Si fue correcta. Realizar dos fetches (uno en la metadata y otro en el componente) funciona en Next.js, aunque se puede optimizar cacheando o deduplicando la petición si es necesario.