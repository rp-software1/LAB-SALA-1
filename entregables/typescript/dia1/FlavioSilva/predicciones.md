# Predicciones - Flavio Silva 

## Predicción A  
1) ¿Qué archivo generará el comando de instalación además de actualizar `package.json`?

    - No sé la verdad, supongo que solo modificará el package.json como depdencias o algo así. 

2) ¿Qué opciones del `tsconfig.json` son específicas para `React` con `JSX`?

    - Bueno preguntando a la **IA** acerca de esto _(ya que es la primera vez que veo ts)_ pues me digo que la opción principal sería este: 
       ```json
       "jsx": "react-jsx",
       ```

## Predicción B 
1) ¿Cuántos archivos vas a renombrar en total? Lista sus nombres. 

    - 10 archivos en total: 
    ```txt 
    MenuPage.jsx             
    MesasPage.jsx            
    CarritoPage.jsx         
    DetalleMesa.jsx         
    NotFound.jsx            
    NavBar.jsx               
    PlatoCard.jsx            
    MesaCard.jsx             
    App.jsx                   
    main.jsx                  
    ```

2) ¿En qué tipo de líneas crees que aparecerá el primer error `TS`?

    - Seguro en lineas de props por el tipo de datos. 

## Predicción C 
1) El componente PlatoCard recibe un plato como prop. ¿Qué propiedades tiene un plato según el modelo de datos del sistema?
¿Qué tipo TypeScript corresponde a cada una? Escríbelo aquí antes de ver el código:

  | Prop       | Type |
  |------------|------|
  | _id:       | `Number`|
  | nombre:    |`String` |
  | precio:    | `Number`|
  | categoria: | `String`|
  | disponible:| `Boolean`|

> Como el `_id` nos dice el que es un `objectId`, pero como no tenemos la `API` real del `backend`, usamos un servidor simulado con `Number` en `auto_increment`.  

## Predicción D 
1) ¿Qué props recibe MesaCard? (mira tu implementación de días anteriores) 

    - `_id`, `estado`, `numero`, `capacidad`, `pedidoActivoId`

2) ¿TypeScript puede inferir el tipo de retorno de una función que retorna JSX sin que lo declares?

    - Sí, TypeScript podrá inferir automáticamente que la función retorna un elemento JSX sin necesidad de declarar explícitamente el tipo de retorno.