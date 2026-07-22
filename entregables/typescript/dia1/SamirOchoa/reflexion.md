# Reflexiones - Día 1: TypeScript en React
# Nombre y Apellido: Samir Sharuk Ochoa Caballero

## Bloque A (Instalación y configuración)
- **¿Qué parte fue confusa?** La inicialización de los archivos de configuración en el proyecto existente de Vite.
- **¿Qué opción del tsconfig no tienes clara?** Algunas configuraciones avanzadas de resolución de módulos y restricciones estrictas (`strict`).

## Bloque B (Renombrar archivos y errores)
- **¿Cuántos errores aparecieron?** Múltiples errores por tipos implícitos (`any`) y props sin declarar al pasar de `.jsx` a `.tsx`.
- **¿Cuál fue el más inesperado?** La inmediatez con la que TypeScript exige interfaces estrictas en props y contextos.

## Bloque C (Tipado de PlatoCard y funciones)
- **¿El tipado de 'onAgregar' fue lo que esperabas? ¿Qué significa '(plato: Plato) => void'?** 
  Sí. Significa que `onAgregar` es una función que recibe obligatoriamente un objeto `plato` (según la interfaz `Plato`) y no retorna ningún valor (`void`).

## Bloque D (Tipar props de MesaCard y NavBar)
- **¿El union type te parece mejor que usar string?** Sí, porque restringe los valores permitidos de forma estricta, previniendo errores de tipeo y mejorando el autocompletado.

## Bloque E (Tipar funciones de la API)
- **¿Tiene sentido tipar el retorno de las funciones API?** 
  Sí, garantiza *type safety* de extremo a extremo, ofreciendo autocompletado inteligente (*IntelliSense*) y detección temprana de errores antes de ejecutar la aplicación.

## Cierre del día (Bloque F)
- **Concepto que más costó:** La relación de interfaces entre componentes.
- **Ventaja de TS frente a JS puro:** La seguridad en las props y el autocompletado que previene errores tipográficos.
- **Total de errores al cierre:** 97 (pendientes en `context/` y `pages/` para los días 2 y 3; componentes clave totalmente limpios).