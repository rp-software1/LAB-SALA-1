# TARJETA DE EVALUACIÓN ENTRE PARES

## Samir Ochoa

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Ochoa |
| **Escenario elegido** | N.° 1|
| **Resumen de la respuesta** |`PlatoCard` vive en la carpeta de `components` por qué es un **_componente reutilizable_** , no está en la carpeta `pages` porque una **página o vista** es un conjunto de `componentes`.|
| **Qué entendió bien (una frase)** |Identificó correctamente la diferencia entre un componente reutilizable y una página, y ubicó adecuadamente el `NavBar` en `components`. |
| **Qué necesita repasar (una frase)** |Profundizar en el rol de las `pages` como vistas asociadas a rutas que organizan y renderizan varios componentes. |

--- 

## Flavio Silva

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Ochoa |
| **Evaluado** | Flavio Silva |
| **Escenario elegido** | N.° 2 |
| **Resumen de la respuesta** |Se importa el `StrictMode`de `React`, esto ayuda a detectar problemas en el código, `createRoot` de `react-dom/client` ayuda a conectar `React` con `HTML`, después importamos `./index.css` acá solo importamos estilos, luego `import App from './App.jsx'` simplemente importamos el **componente** principal, también tenemos el `createRoot()` que crea la raíz de la app, acá dentro seleccionamos por **id** `document.getElementById('root')`, el método `render()` va a renderizar los componentes.|
| **Qué entendió bien (una frase)** | Explicó correctamente la función de cada importación y el proceso de creación de la raíz y renderizado de la aplicación. |
| **Qué necesita repasar (una frase)** |Profundizar en la diferencia entre `createRoot()` (crear la raíz de React) y `render()` (mostrar los componentes dentro de esa raíz), así como el propósito de `StrictMode` solo en desarrollo. |
---