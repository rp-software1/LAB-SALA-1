# Reflexiones - Día 1: TypeScript en React
# Nombre y Apellido: Samir Sharuk Ochoa Caballero

## Bloque A (Creación de types/index.ts)
- **¿Tiene sentido tener un único archivo de tipos? ¿Qué ventaja concreta ves frente a declarar los tipos en cada componente?**
- Sí, totalmente. Evita la duplicación de código y centraliza las estructuras de datos, facilitando actualizaciones globales de manera limpia.

## Sección B- Bien reflivo 
- **¿Qué pasa con el autocompletado en el IDE ahora que los tipos están en un solo lugar?**
- Al centralizar los tipos en un solo archivo, el IDE ofrece sugerencias precisas y autocompletado para todos los componentes y servicios que los utilizan.

## Sección C — Reflexión Bloque C
• **¿Qué error de runtime podría haberse producido sin el guard if (!context) throw?**
- Si se usa el contexto fuera del Provider, `useContext` devuelve `undefined`. Al intentar acceder a sus propiedades (como `context.pedido`), JavaScript lanzaría un `TypeError`, rompiendo la aplicación. El guardia lo evita lanzando un error claro de inmediato.