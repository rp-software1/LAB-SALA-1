# Cierre del día 3 - Flavio Silva

## Preguntas 
1) Qué diferencia hay entre `props` y `estado`? Explícalo con el ejemplo de `MesaCard` — ¿cuál de sus datos es una prop y cuál podría ser estado en el futuro?

    - Un `prop` es una **propiedad** que un componente recibe de su **_componente padre_** y un `estado` es un valor que un componente puede cambiar por sí mismo. Por ejemplo, en `MesaCard`, el `numero` y la `capacidad` son `props`, mientras que el `estado` podría ser `estado (state)` en el futuro ya que va a variar según el valor que tenga, por ejemplo si está ocupado hay **N** comensales.

2) ¿Por qué las `props` son de solo lectura dentro del componente hijo? ¿Qué pasaría si MesaCard pudiera modificar la prop estado directamente?
    - Las `props` son de solo lectura dentro del componente hijo porque son **inmutables** y solo pueden ser modificadas por el componente padre. Si `MesaCard` pudiera modificar la prop `estado` directamente, se rompería el flujo de datos y sería imposible saber qué componente es el responsable de cambiar el estado.

3) Hoy NavBar muestra "Carta", "Mesas" y "Comandas" como texto. En el Día 7 se convierte en navegación real. ¿Qué tendrás que cambiar en NavBar ese día y qué NO tendrás que tocar?
    - Solo agregaría un `link` dentro de cada `li` y ponerle un `className` y su `href` correspondiente. No tocaría el resto del código.

4) En **DevTools** viste el árbol de componentes. ¿Cómo sabes si un componente recibió las props correctas sin tener que leer el código del padre?
    - En **DevTools** se puede ver el árbol de componentes y las props que recibió cada uno. Por lo tanto, se puede saber si un componente recibió las props correctas sin tener que leer el código del padre.

