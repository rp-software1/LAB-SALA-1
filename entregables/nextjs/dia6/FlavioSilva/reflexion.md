# Reflexión - Flavio Silva 

## Bloque A
1) **¿La predicción sobre CarritoPage fue correcta? ¿Qué implica que Client Components no puedan exportar metadata?**
- Sí, fue correcta. Implica que los componentes de cliente no permiten `export const metadata`, por lo que se debe usar `useEffect` y `document.title` en su lugar.
