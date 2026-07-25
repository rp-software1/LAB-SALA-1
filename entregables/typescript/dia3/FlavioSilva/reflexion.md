# Reflexión - Flavio Silva 

# Preguntas: 

## Bloque A 
1)  **¿Por qué err es unknown y no Error directamente? ¿Qué ventaja real da eso?** 
    - Obliga a verificar el tipo de error antes de usarlo y puedo tener formas de manejarlo dependiendo de lo que sea.

## Bloque B 
2) **¿`Omit<Pedido, ...>` fue lo que esperabas? ¿Cuándo usarías `Omit` en otros contextos del proyecto?**
    - Si, esperaba algo asi.
    - Lo usaría para crear un tipo de pedido que no tenga ciertos campos, o sea que serían omitidos.

## Bloque C 
3) **¿El comportamiento de useParams te sorprendió? ¿Por qué el genérico no garantiza el tipo?**
    - Si, me sorprendió.
    - Porque como tal React Router tipea el Resultado como `string | undefined` ya que la ruta no podria coincidir en ejecución. El genérico solo es una anotación y se requiere obligatoriamente el control de flujo (*narrowing*) con un guard.

## Bloque D 
4) **¿Cuántos errores había al inicio del Día 1? ¿Y ahora?**
    - Habia **_97_** errores.
    - Ahora hay **_0_** errores.

5) **¿Qué error fue el más difícil de resolver en los 3 días?**
    - El más dificil para mi fue el de `CarritoPage.tsx` sus `types`.

## Bloque F
6) **¿Qué concepto de TypeScript te resultó más difícil en los 3 días?**
    - Más que conceptos fue el manejar el tipado, las formas de tipar como `:string` o `<string[]>` y entender cuando hacerlo y cunado lo infiere `TypeScript`.

7) **¿Qué error de los 3 días fue el más útil para aprender? ¿Por qué?**
    - Creo que todos, pues no conozco casi nada de `TypeScript` y me sirvió para entender como funciona, no al 100% pero al menos una base.

8) **¿En qué parte del proyecto React del Día 9 detectarías bugs ahora que antes no veías?**
    - Quizás en la llamada a la `API` pues habia algunos que aún usaban el `.mock` en vez de la `API` real.

9) **Total de errores al inicio del Día 1: _97_  →  Total de errores hoy: _0_**

10) **Una cosa que cambiaría de la forma en que escribí JavaScript antes de TypeScript: El tipado pues me da una idea del tipo que es cada cosa.**