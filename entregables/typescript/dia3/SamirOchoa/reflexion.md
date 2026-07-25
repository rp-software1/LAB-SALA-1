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