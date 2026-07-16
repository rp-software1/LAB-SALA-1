# TARJETA DE EVALUACIÓN ENTRE PARES - DÍA 5

## Ronda 1
**EVALUADOR:** Samir Ochoa
**EVALUADO:** Flavio Silva
**ESCENARIO ELEGIDO:** N.° 2

**RESUMEN DE LA RESPUESTA:** Explicó que al quitar el `[]`, el `useEffect` se ejecuta en cada renderizado. Como el efecto actualiza el estado (`setPlatos`), esto causa un bucle infinito que colapsa el navegador o causa un re-renderizado constante.

**QUÉ ENTENDIÓ BIEN:** Comprendió perfectamente la relación entre las dependencias del `useEffect` y el ciclo de vida del componente.

**QUÉ NECESITA REPASAR:** Profundizar en cómo `React` gestiona la memoria durante un bucle de re-renderizado.

---

## Ronda 2
**EVALUADOR:** Flavio Silva
**EVALUADO:** Samir Ochoa
**ESCENARIO ELEGIDO:** N.° 3

**RESUMEN DE LA RESPUESTA:** Explicó que `find` detecta que el objeto existe, por lo que entramos en la rama `if`. Luego `map` crea un nuevo array donde solo el ítem con el mismo `_id` recibe un incremento en `cantidad`, manteniendo el estado inmutable.

**QUÉ ENTENDIÓ BIEN:** Dominó la lógica de inmutabilidad y el uso del patrón `find` + `map` para manejar cantidades.

**QUÉ NECESITA REPASAR:** Asegurarse de explicar con fluidez por qué no se debe usar `push` al modificar el estado.