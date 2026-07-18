# Cierre del día 7 - Samir Ochoa

## Preguntas 
1) ¿Qué hace BrowserRouter exactamente? ¿Qué pasa si envuelves solo una parte de la app en lugar de toda?
    - Sincroniza la URL con la interfaz de la aplicación. Si solo envuelves una parte, los componentes externos no pueden acceder a las rutas ni a las herramientas de navegación.
2) NavLink recibe className como función. ¿Por qué es función y no string? ¿Qué tiene que devolver esa función?
    - Porque debe cambiar según el estado actual de la ruta. Debe devolver el string con la clase CSS que queremos aplicar cuando el link está activo.
3) El usuario está en /mesas/5 y hace clic en Atrás del navegador. ¿Qué pasa? ¿A dónde va?
    - React Router consulta el historial y regresa a la página anterior que visitó el usuario, que en este flujo sería /mesas.
4) ¿Por qué path='*' tiene que ir al final de Routes? ¿Qué pasaría si va al principio?
    - Porque el router recorre las rutas en orden. Si el `*` está al principio, capturará todo y no dejará que cargue ninguna otra página configurada después.
5) useParams devuelve string. Si el ID en el mock es número, ¿qué problema aparece al comparar? ¿Cómo lo resuelven?
    - La comparación estricta (===) da false porque los tipos no coinciden. Se resuelve convirtiendo el ID de la URL a número con Number() o el ID del mock a string con String().

> FIN DEL CIERRE DEL DÍA 7