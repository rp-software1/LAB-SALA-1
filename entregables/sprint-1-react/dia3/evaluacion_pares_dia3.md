# TARJETA DE EVALUACIÓN ENTRE PARES - DÍA 3

## Samir Ochoa

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Ochoa |
| **Escenario elegido** | N.° 2 |
| **Resumen de la respuesta** | El panel derecho de DevTools muestra las **props** (como `numero`, `estado`, `capacidad`), que son los datos que el componente padre (`MesasPage`) le está enviando a `MesaCard`. Estos valores coinciden exactamente con lo que definimos en el `mesas.mock.js` y cambian automáticamente si actualizamos el archivo. |
| **Qué entendió bien (una frase)** | Comprendió correctamente que las `props` son el puente de información entre el padre y el hijo y cómo visualizar ese flujo en tiempo real. |
| **Qué necesita repasar (una frase)** | Diferenciar con mayor claridad en qué casos específicos es necesario usar `PropTypes` para evitar errores de tipo en las `props` recibidas. |

---

## Flavio Silva

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Ochoa |
| **Evaluado** | Flavio Silva |
| **Escenario elegido** | N.° 3 |
| **Resumen de la respuesta** | `NavBar` es un componente de estructura, no de datos; por eso no necesita el `mock` de mesas o platos. Mientras que `MesaCard` recibe datos dinámicos (props que cambian según la mesa), `NavBar` recibe una configuración fija (nombre del restaurante) y tiene una estructura constante, siendo un componente de composición. |
| **Qué entendió bien (una frase)** | Explicó con mucha precisión la diferencia arquitectónica entre componentes que consumen datos de un array y componentes de layout. |
| **Qué necesita repasar (una frase)** | Practicar la sintaxis de valores por defecto en la desestructuración de parámetros para mejorar la robustez de los componentes. |