## Evaluación Individual - Samir Ochoa

### 1. Retrospectiva

Al inicio del día pensaba que las variables solo eran espacios donde se guardaban datos sin mucha diferencia entre tipos. Ahora entiendo que no solo almacenan datos, sino que el comportamiento cambia dependiendo si es `let`, `const` o si es un objeto.

Algo que me confundía era pensar que `const` hacía inmutable todo, pero ahora sé que solo protege la referencia, no el contenido del objeto.

---

### 2. Proyección (Arrays)

Para crear un array con los tres platos, lo haría así:

```javascript
const platos = [
  {
    nombre: "Lomo Saltado",
    precio: 18.00,
    stock: 5
  },
  {
    nombre: "Arroz con Leche",
    precio: 8.00,
    stock: 10
  },
  {
    nombre: "Sopa Criolla",
    precio: 12.00,
    stock: 7
  }
];