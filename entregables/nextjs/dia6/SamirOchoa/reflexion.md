# Reflexión - Samir Ochoa 

## Bloque A
1) **¿La predicción sobre CarritoPage fue correcta? ¿Qué implica que Client Components no puedan exportar metadata?**
- Sí, fue correcta. Implica que los componentes de cliente no permiten `export const metadata`, por lo que se debe usar `useEffect` y `document.title` en su lugar.
## Sección B
1) **¿robots: { index: false } fue una decisión que esperaban en una app de restaurante? ¿Por qué importa?**
- Sí, porque es un sistema interno de gestión de comandas y mesas, por lo que no debe ser indexado por motores de búsqueda públicos para proteger la privacidad de los datos operativos.
## Bloque C 
1) **¿Encontraron algo inesperado en la auditoría? ¿Qué fue lo más común?**
    - No se a encontrado nada inesperado en la auditoría, lo más común fue encontrar comentarios breves explicando el código.

## Bloque D 
1) **¿El build tuvo errores? ¿Cuáles y cómo los resolvieron?**
    - No hubo error, solo no tenemos correctamente el endpoint del backend.

## Bloque E
1) **¿Cuántos errores TypeScript quedaban antes de este bloque?**
    - Por lo que pude ver y entender es que no hubo ningun error de TypeScript a mi parecer.