# Predicciones - Samir Ochoa

## Predicción A  
1) ¿Qué archivo generará el comando de instalación además de actualizar `package.json`?

    - Generará y actualizará el archivo `package-lock.json`, que guarda las versiones exactas de las dependencias instaladas.

2) ¿Qué opciones del `tsconfig.json` son específicas para React con JSX?

    - La opción principal y específica para React con JSX es la siguiente, segun por lo que investigue con ayuda de la **IA** ya que es mi primera vez en TypeScript:
        ```json
        "jsx": "react-jsx",
        ```
## Predicción B
1) ¿Cuántos archivos vas a renombrar en total? Lista sus nombres.

    - Como tal renombrariamos en total 11 archivos en total:
    - `NavBar.tsx`, `PlatoCard.tsx`, `MesaCard.tsx`
    - `MenuPage.tsx`, `MesasPage.tsx`, `CarritoPage.tsx`, `DetalleMesa.tsx`, `NotFound.tsx`
    - `PedidoContext.tsx`
    - `App.tsx`, `main.tsx`

2) ¿En qué tipo de líneas crees que aparecerá el primer error TS?
    -Creemos que aparecerá en los parametros de las funciones de los componentes que reciben props (como '({plato})') , porque Typescript exigira ver, de que tipo son.

# Predicción C 
1) El componente PlatoCard recibe un plato como prop. ¿Qué propiedades tiene un plato según el modelo de datos del sistema?
¿Qué tipo TypeScript corresponde a cada una? Escríbelo aquí antes de ver el código:

| Prop | Type |
|------------|------|
| id / _id | `number` |
| nombre | `string` |
| precio | `number` |
| categoria | `string` |
| disponible | `boolean` |

> Como el `_id` nos dice el que es un `objectId`, pero como no tenemos la `API` real del `backend`, usamos un servidor simulado con `number` en `auto_increment`.

# Predicción D
1) ¿Qué props recibe MesaCard? (mira tu implementación de días anteriores)
 - Recibe propiedades como el número de la mesa, su estado (disponible, ocupada), la capacidad y funciones o manejadores de eventos para hacer clic o ver el detalle.
 2) ¿TypeScript puede inferir el tipo de retorno de una función que retorna JSX sin que lo declares?
 - Sí, TypeScript puede inferir automáticamente que un componente funcional de React retorna un elemento de tipo JSX.Element (o React.ReactNode), aunque muchas veces se recomienda declarar explícitamente las props para mantener la claridad.

 # Predicción E
 1) Si getMesas() retorna Promise<Mesa[]>, ¿qué tipo tiene 'mesas' en este código?
  const mesas = await getMesas();
 - mesas es de tipo `Mesa[]`

 