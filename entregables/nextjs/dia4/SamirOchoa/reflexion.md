# Reflexión - Samir Ochoa

## Bloque A 
1) **¿El backend tenía el endpoint /mesas/:id o tuvieron que usar la Opción B? ¿Qué implica eso para el rendimiento?**
    - El backend contaba con el endpoint `/mesas/:id`, lo que permitió hacer consultas directas por ID optimizando las peticiones de red en comparación con buscar en toda la lista.
## Bloque B
1) **¿La predicción sobre generateMetadata async fue correcta? ¿Qué implica hacer dos fetches iguales (en generateMetadata y en el componente)?**
    - Si fue correcta. Realizar dos fetches (uno en la metadata y otro en el componente) funciona en Next.js, aunque se puede optimizar cacheando o deduplicando la petición si es necesario.