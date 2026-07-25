# Reflexiones - Día 1: TypeScript en React
# Nombre y Apellido: Samir Sharuk Ochoa Caballero

# REFLEXION BLOQUE A :
 **¿Por qué err es unknown y no Error directamente? ¿Qué ventaja real da eso?**
 - Porque en JavaScript se puede lanzar cualquier valor (no solo objetos `Error`). Usar `unknown` obliga a validarlo (con `instanceof Error`) antes de usarlo, evitando fallos inesperados en ejecución.