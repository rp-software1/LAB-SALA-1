# Cierre del día 4 - Flavio Silva

## Preguntas 

1) ¿Qué problema concreto resolvió `React` con los `hooks` que los **componentes de clase** no podían resolver bien? No digas **_"es más simple"_** — da un ejemplo técnico concreto
    
    - Los hooks resolvieron el problema de reutilizar lógica entre componentes, algo que con componentes de clase era más complicado porque se tenía que repetir código usando métodos como `componentDidMount`, `constructor` y estados de clase. Por ejemplo, si varios componentes necesitaban consumir una `API` y manejar estados de carga y error, antes se repetía la misma estructura en cada clase; con hooks se puede crear una lógica reutilizable mediante un custom hook. Además, permitieron usar estado y efectos en componentes funcionales sin depender de `this` ni de `.bind()`.

2) En la clase, `handleChange` usaba `this.setState({ [name]: value })` para actualizar cualquier campo con una sola función. En el funcional usaron un setter por campo. ¿Cuál de los dos enfoques prefieres y por qué?

    - Prefiero el enfoque funcional porque es más claro y directo. Al tener un setter por campo, se sabe exactamente qué estado se está modificando.

3) En el Sprint 0 de JavaScript usaban clases de `ES6`. ¿En qué se parece un componente de clase de React a una clase de `ES6` normal? ¿Qué agrega `React.Component`?

    - Se parecen en que ambos tienen un constructor, métodos y pueden heredar de otra clase, su mayor diferencia es que un componente de clase de React hereda de `React.Component`, lo que le da acceso a funcionalidades específicas de React, como el estado y los métodos del ciclo de vida. Además, un componente de clase de React debe retornar `JSX`, mientras que una clase de `ES6` normal no tiene esta restricción.

4) Mañana es el día de useState y useEffect en profundidad. Hoy los usaron por primera vez en el funcional. ¿Qué pregunta te quedó sin responder sobre useState que quieres que se responda mañana?
    
    - La verda no entendí tanto sobre estos dos, me apoyé en la IA para poder entender algo básico sobre su uso.