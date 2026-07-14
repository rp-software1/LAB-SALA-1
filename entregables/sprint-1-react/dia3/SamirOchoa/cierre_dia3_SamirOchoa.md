# Documento de Cierre — Día 3
**Alumno:** Samir Ochoa

### 1. ¿Qué diferencia hay entre props y estado? Explícalo con el ejemplo de MesaCard — ¿cuál de sus datos es una prop y cuál podría ser estado en el futuro?
La diferencia principal es el origen y quién controla el dato. Las **props** son la información que un padre le pasa a un hijo; son de solo lectura, el hijo no puede tocarlas. En cambio, el **estado** es como la memoria interna del componente, datos que cambian según lo que haga el usuario.
* Ejemplo en MesaCard: El `numero` o `capacidad` de la mesa son **props** porque vienen del mock. Un ejemplo de **estado** a futuro sería si la mesa se "ilumina" o cambia de color cuando el usuario le hace clic para seleccionarla.

### 2. ¿Por qué las props son de solo lectura dentro del componente hijo? ¿Qué pasaría si MesaCard pudiera modificar la prop estado directamente?
Porque React se basa en un flujo de datos que va de arriba hacia abajo (unidireccional). Si el hijo pudiera cambiar sus propias props, el padre perdería el control de lo que está pasando y sería un lío seguirle la pista a los cambios. Si MesaCard pudiera modificar `estado` directamente, romperíamos la lógica de React y la aplicación mostraría datos inconsistentes.

### 3. Hoy NavBar muestra "Carta", "Mesas" y "Comandas" como texto. En el Día 7 se convierte en navegación real. ¿Qué tendrás que cambiar en NavBar ese día y qué NO tendrás que tocar?
Ese día, la tarea será reemplazar los textos planos por componentes `<Link>` para que la navegación funcione. Lo que **NO voy a tocar** es la prop `nombreRestaurante`, porque esa parte ya cumple su función de recibir y mostrar el nombre, esa lógica ya está lista y no depende de la navegación.

### 4. En DevTools viste el árbol de componentes. ¿Cómo sabes si un componente recibió las props correctas sin tener que leer el código del padre?
Es directo: abro las DevTools, voy a la pestaña **Components**, selecciono el componente en el árbol y miro el panel de la derecha. Ahí React me muestra exactamente qué valor tiene cada `prop` en ese preciso momento. Es mucho más rápido que revisar el archivo del componente padre para ver qué le estamos pasando.