# TARJETA DE EVALUACIÓN ENTRE PARES

## Samir Ochoa

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Ochoa |
| **Escenario elegido** | N.° 1|
| **Resumen de la respuesta** |Con `renderMneu` y el `innerHTML` si un plato se modificaba, todo se volvía a renderizar, y si hubiera otros elementos como `inputs`, perderían su foco o valor, pero con `React`, y `PlatoCard`, si un componente se mofica se puede saber cual es mediante su `key` y se modifica solo ese componente.|
| **Qué entendió bien (una frase)** |Entendió la diferencia entre renderizar todo el menú y renderizar solo el componente que se modifica.|
| **Qué necesita repasar (una frase)** |Reforzar el funcionamiento del `Virtual DOM` y cómo React utiliza la key para identificar y actualizar eficientemente los elementos de una lista.|

--- 

## Flavio Silva

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Ochoa |
| **Evaluado** | Flavio Silva |
| **Escenario elegido** | N.° 3 |
| **Resumen de la respuesta** |El error es que en `JSX` no se usa `class` sino `classNmae` y además no se usa el `if` para asignar valor a algo sino el `operador ternario`|
| **Qué entendió bien (una frase)** |Identificó correctamente que en JSX se utiliza className en lugar de class y que el operador ternario es la forma adecuada de hacer renderizado condicional.|
| **Qué necesita repasar (una frase)** |Reforzar la diferencia entre una expresión y una sentencia en JavaScript para comprender por qué if no puede escribirse directamente dentro de JSX.|
---

**Code Corregido:**
```jsx 
<li className="plato">
  {plato.disponible ? "✅" : "❌"}
</li>
```
--- 