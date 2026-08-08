# Reflexión - Samir Ochoa

## Bloque A 
1) **¿El backend tenía el endpoint /mesas/:id o tuvieron que usar la Opción B? ¿Qué implica eso para el rendimiento?**
    - El backend contaba con el endpoint `/mesas/:id`, lo que permitió hacer consultas directas por ID optimizando las peticiones de red en comparación con buscar en toda la lista.
## Bloque B
1) **¿La predicción sobre generateMetadata async fue correcta? ¿Qué implica hacer dos fetches iguales (en generateMetadata y en el componente)?**
    - Si fue correcta. Realizar dos fetches (uno en la metadata y otro en el componente) funciona en Next.js, aunque se puede optimizar cacheando o deduplicando la petición si es necesario.
## Bloque C 
1) **¿useTransition fue más claro o más confuso que un `useState<boolean>` de loading?**
    - Podría decir más confuso, pues es un hook nuevo para mí. 

## Bloque D
1) **¿revalidatePath fue lo que predijiste? ¿Actualiza en tiempo real o al siguiente request?**
    - `revalidatePath` cumplió exactamente lo esperado: invalida el caché del servidor de forma declarativa para que la siguiente navegación muestre la información actualizada de la base de datos.