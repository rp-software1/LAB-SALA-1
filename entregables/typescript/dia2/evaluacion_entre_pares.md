# Evaluación entre Pares 

# Samir Ochoa 
## Preguntas: 
1) ¿Qué archivo creamos hoy que no existía antes? ¿Para qué sirve?
    - `index.tsc`, se creó para centralizar los tipos de la aplicación.

2) Abre el archivo `types/index.ts`. Sin leerlo, ¿puedes listar de memoria
   cuántos types y cuántas interfaces hay? ¿Cuál es la diferencia entre ellos?

    - 3 types y 6 interfaces, la principal diferencia entre cada uno es que reprensentan types de objetos _(interface)_ y tipos de datos _(type)_, además que van a representar la estructura lógica de los objetos de la aplicación.


--- 
# Flavio Silva 
## Preguntas: 
3) ¿Por qué `PedidoContext` usa `createContext<PedidoContextType | undefined>`
   en lugar de `createContext<PedidoContextType>`? Explícalo sin código.

    - Es necesario porque al crear el contexto aún no existe un `provider` por eso se le inicializa con `undefined`.

4) Si mañana el backend agrega un campo `activo`: `boolean` a `Mesa`,
   ¿en cuántos archivos tienes que hacer el cambio? ¿Cómo TypeScript
   te va a avisar dónde falta el campo?

    - Haría el cmabio en el `types/index.ts` pues el tiene la estructura de tipos de `Mesa`, y si necesito usar ese campo en la `app`, solo modifico los archivos donde sea necesario ponerlo. 

5) ¿Qué hace el hook `usePedido()`? ¿Por qué es mejor que llamar
   `useContext(PedidoContext)` directamente en cada componente?

    - Evita repetis código, pues tengo un `customHook` que lo llamo en cada componente que lo necesita.

