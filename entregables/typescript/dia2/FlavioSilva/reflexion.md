# Reflexión - Flavio Silva 

# Preguntas: 
## Bloque A
1)  **¿Tiene sentido tener un único archivo de tipos? ¿Qué ventaja concreta ves frente a declarar los tipos en cada componente?**
    - Si, tiene sentido tener un único archivo de tipos, ya que evita la duplicación de código y centraliza las estructuras de datos, facilitando actualizaciones globales de manera limpia.

## Bloque B 
1) **¿Qué pasa con el autocompletado en el IDE ahora que los tipos están en un solo lugar?**
    - Mejora significativamente, ya que el IDE puede inferir los tipos de manera más precisa y ofrecer sugerencias más relevantes.

## Bloque C
1) **¿Qué error de runtime podría haberse producido sin el guard if (!context) throw?**
    - Si se usa el contexto fuera del Provider, `useContext` devuelve `undefined`. Al intentar acceder a sus propiedades (como `context.pedido`), JavaScript lanzaría un `TypeError`, rompiendo la aplicación. El guardia lo evita lanzando un error claro de inmediato.

## Bloque F
1) **¿Qué concepto de TypeScript te costó más entender hoy?**
    - Los conceptos de TypeScript que más me costaron entender hoy fueron los tipos genéricos y las interfaces, ya que requieren un cambio de mentalidad al pensar en la estructura de los datos y cómo se relacionan entre sí.

2) **¿Qué ventaja concreta viste de centralizar los tipos en `types/index.ts`?**
    - La ventaja concreta que vi de centralizar los tipos en `types/index.ts` es que facilita la gestión de los tipos y evita la duplicación de código, lo que hace que el código sea más limpio y fácil de mantener.

3)  **Total de errores TypeScript al cierre del Día 2:** `44` _(los eliminaremos mañana)_
