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
**¿Qué concepto de TypeScript te resultó más difícil en los 3 días?**
  - Me costó un poco aprender cuándo era estrictamente necesario declarar los tipos a mano y en qué momentos `TypeScript` los deducía automáticamente por su cuenta.

**¿Qué error de los 3 días fue el más útil para aprender? ¿Por qué?**
  - En general, todos me ayudaron muchísimo porque al dominar poco el lenguaje, cada error me sirvió para entender cómo funciona la herramienta desde cero y ganar bases firmes.

**¿En qué parte del proyecto React del Día 9 detectarías bugs ahora que antes no veías?**
  - Sobre todo al momento de conectar los servicios, identificando con mayor claridad diferencias entre el uso de datos locales (`mock`) y la API definitiva.

**Total de errores al inicio del Día 1: _97_  →  Total de errores hoy: _0_**

**Una cosa que cambiaría de la forma en que escribí JavaScript antes de TypeScript:**
  - Implementar tipados para saber con certeza absoluta qué estructura tiene cada variable y prevenir confusiones.