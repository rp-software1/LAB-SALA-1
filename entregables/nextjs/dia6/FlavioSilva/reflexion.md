# Reflexión - Flavio Silva 

## Bloque A
1) **¿La predicción sobre CarritoPage fue correcta? ¿Qué implica que Client Components no puedan exportar metadata?**
- Sí, fue correcta. Implica que los componentes de cliente no permiten `export const metadata`, por lo que se debe usar `useEffect` y `document.title` en su lugar.

## Bloque B 
1) **¿robots: { index: false } fue una decisión que esperaban en una app de restaurante? ¿Por qué importa?**
    - Si, ya que hacer esto, le dice al navegador que esta página no debe de ser indexada, así no pueden acceder a el por medio de un buscador.

## Bloque C 
1) **¿Encontraron algo inesperado en la auditoría? ¿Qué fue lo más común?**
    - Nada inesperado y lo común fue tener comentarios breves explicando ese fragmento de código, lo cual dejé por si se mantiene la aplicación más adelante.