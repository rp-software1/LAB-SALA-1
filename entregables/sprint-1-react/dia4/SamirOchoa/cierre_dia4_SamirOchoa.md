# Documento de Cierre — Día 4
**Alumno:** Samir Ochoa

1) ¿Qué problema concreto resolvió `React` con los `hooks` que los **componentes de clase** no podían resolver bien? No digas **_"es más simple"_** — da un ejemplo técnico concreto
- Los hooks resolvieron el problema de reutilizar lógica entre componentes, algo que con las clases era muy complicado porque terminabas repitiendo código en métodos como `componentDidMount` o `componentDidUpdate`. Por ejemplo, si necesitabas manejar la lógica de una `API` (carga, error, datos) en varios componentes, antes tenías que usar patrones complejos como *Higher-Order Components*; con hooks, simplemente creas un *custom hook* y lo usas en cualquier lado, sin depender de `this` ni de estar haciendo `bind` a cada rato.

2) En la clase, `handleChange` usaba `this.setState({ [name]: value })` para actualizar cualquier campo con una sola función. En el funcional usaron un setter por campo. ¿Cuál de los dos enfoques prefieres y por qué?

- Prefiero el enfoque funcional porque es mucho más explícito y fácil de seguir. Al tener un setter específico por campo, sabes exactamente qué variable de estado está cambiando y no tienes sorpresas con el objeto de estado completo. Además, me quita el miedo a cometer errores con el `this` que siempre pasaban en las clases.

3) En el Sprint 0 de JavaScript usaban clases de `ES6`. ¿En qué se parece un componente de clase de React a una clase de `ES6` normal? ¿Qué agrega `React.Component`?

- Se parecen en que ambas usan `class`, `constructor` y permiten definir métodos propios. La gran diferencia es que un componente de React hereda de `React.Component`, lo que le inyecta toda la lógica necesaria para manejar el ciclo de vida (como el montaje o actualización) y la capacidad de renderizar `JSX`. Una clase de `ES6` normal es solo una estructura de datos, mientras que `React.Component` es lo que le da "vida" dentro de React.

4) Mañana es el día de useState y useEffect en profundidad. Hoy los usaron por primera vez en el funcional. ¿Qué pregunta te quedó sin responder sobre useState que quieres que se responda mañana?
- De por si no entendi algunas cosas y me ayuden con la ia, ya que como tal no pude entender bien el tema.