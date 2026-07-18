# Cierre del día 7 - Flavio Silva

## Preguntas 
1) ¿Qué hace `BrowserRouter` exactamente? ¿Qué pasa si envuelves solo una parte de la app en lugar de toda?
    - Permite que React pueda manejar las rutas y cambiar de página sin recargar. Si solo una parte tiene `BrowserRouter`, los componentes fuera no podrán usar rutas.


2) `NavLink` recibe `className` como función. ¿Por qué es función y no string? ¿Qué tiene que devolver esa función?
    - Porque necesita saber si el enlace está activo. La función debe devolver el nombre de la clase que se aplicará.


3) El usuario está en /mesas/5 y hace clic en Atrás del navegador. ¿Qué pasa? ¿A dónde va?
    - Buscaría la mesa 5 y la mostaría, pero en caso de que no existe moestraría un mensaje de **Mesa 5 no encontrada** con un botón de **Volver a mesas** que lo llevaría a la lista de mesas.


4) ¿Por qué path='*' tiene que ir al final de Routes? ¿Qué pasaría si va al principio?
    - Porque `*` captura cualquier ruta. Si está primero, tomaría todas las rutas y las demás páginas nunca cargarían.


5) useParams devuelve string. Si el ID en el mock es número, ¿qué problema aparece al comparar? ¿Cómo lo resuelven?
    -  La comparación falla porque `"5"` y `5` son diferentes. Se resuelve convirtiendo el string a número con `Number()`.


> FIN DEL CIERRE DEL DÍA 7