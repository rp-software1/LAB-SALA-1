# Reflexiones - Día 1: TypeScript en React
# Nombre y Apellido: Samir Sharuk Ochoa Caballero

# REFLEXION BLOQUE A :
 **¿Por qué err es unknown y no Error directamente? ¿Qué ventaja real da eso?**
 - Porque en JavaScript se puede lanzar cualquier valor (no solo objetos `Error`). Usar `unknown` obliga a validarlo (con `instanceof Error`) antes de usarlo, evitando fallos inesperados en ejecución.
# REFLEXION BLOQUE B :
 **¿`Omit<Pedido, ...>` fue lo que esperabas? ¿Cuándo usarías `Omit` en otros contextos del proyecto?**
 - Sí, era lo esperado para excluir campos automáticos del backend como `_id` o fechas. Se usa para reutilizar un tipo base omitiendo propiedades específicas.
# REFLEXION BLOQUE C : 
 **¿El comportamiento de useParams te sorprendió? ¿Por qué el genérico no garantiza el tipo?**
 - La verdad es que me sorprendio, porque como tal React Router tipea el Resultado como `string | undefined` ya que la ruta no podria coincidir en ejecución. El genérico solo es una anotación y se requiere obligatoriamente el control de flujo (*narrowing*) con un guard.

 ## REFLEXION BLOQUE D: 
 4) **¿Cuántos errores había al inicio del Día 1? ¿Y ahora?**
    - Al comenzar el primer día teníamos **_97_** errores registrados.
    - Tras el trabajo realizado, el proyecto cuenta actualmente con **_0_** errores.

5) **¿Qué error fue el más difícil de resolver en los 3 días?**
    - El obstáculo más complejo de destrabar durante estas jornadas fue configurar correctamente los tipos en `CarritoPage.tsx`.

## Cierre de los 3 días

**¿Qué concepto de TypeScript te resultó más difícil en los 3 días?**
  - El tipado avanzado de eventos en formularios y la manipulación de contextos complejos con múltiples funciones (*callbacks*).

**¿Qué error de los 3 días fue el más útil para aprender? ¿Por qué?**
  - Los errores de incompatibilidad de tipos en los estados globales (`null` vs objetos), porque me obligaron a entender la importancia del tipado estricto y el manejo defensivo con operadores de fusión nula (`??`).

**¿En qué parte del proyecto React del Día 9 detectarías bugs ahora que antes no veías?**
  - Al pasar props entre componentes y consumir APIs, ahora podría identificar de inmediato discrepancias en las estructuras de datos antes de que rompan la interfaz en tiempo de ejecución.

**Total de errores al inicio del Día 1: 97  →  Total de errores hoy: 0**

**Una cosa que cambiaría de la forma en que escribí JavaScript antes de TypeScript:**
  - Dejar de asumir que los objetos y parámetros siempre tienen las propiedades que espero; ahora implementaría interfaces claras desde el inicio para evitar sorpresas con valores `undefined`.