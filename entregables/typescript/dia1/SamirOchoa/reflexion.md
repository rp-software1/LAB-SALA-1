# Reflexiones - Día 1: TypeScript en React
# Nombre y Apellido : Samir Sharuk Ochoa Caballero
## Reflexión - Bloque A (Configuración inicial)
- ¿Qué implicancias tiene configurar TypeScript desde cero en un proyecto existente? Requiere prestar mucha atención a los archivos de configuración (`tsconfig.json` y `tsconfig.node.json`) para que el compilador entienda dónde buscar el código y cómo interpretar la sintaxis sin romper la estructura previa.

## Reflexión - Bloque B (Renombrar archivos y primer error TS)
- ¿Cuántos errores aparecieron? Aparecieron múltiples errores en la consola al correr la compilación, principalmente relacionados con tipos implícitos (`any`) y props sin declarar en los componentes que pasamos de `.jsx` a `.tsx`.
- ¿Qué error fue el más inesperado? Ver la inmediatez con la que TypeScript audita el código exigiendo interfaces estrictas en las props y en los contextos, obligándonos a tipar correctamente.

## Reflexión - Bloque D (Tipar props de MesaCard y NavBar)
- ¿El union type te parece mejor que usar string? ¿Por qué sí o por qué no? Sí, porque restringe los valores permitidos de forma estricta, previniendo errores de tipeo y mejorando drásticamente el autocompletado en el editor.

## Cierre del día (Bloque F)
- **¿Qué concepto de TypeScript te costó más entender hoy?** La configuración inicial de los tipos y la relación de interfaces entre componentes.
- **¿Qué ventaja concreta viste de TypeScript vs JavaScript puro?** La seguridad en las props y el autocompletado inteligente que previene errores de tipeo.
- **Total de errores TypeScript al cierre:** 97 (quedan pendientes en las carpetas `context/` y `pages/` para los días 2 y 3, estando los componentes clave como `PlatoCard`, `MesaCard`, `NavBar` y `api.ts` completamente limpios).