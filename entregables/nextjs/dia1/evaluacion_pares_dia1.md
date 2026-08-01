# Evaluación entre pares - Día 1 Next.js

## Samir Sharuk Ochoa Caballero

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Resumen de la respuesta** | 1. La carpeta sin corchetes es una ruta estática (solo responde a `/mesas`), mientras que con corchetes es dinámica (responde a `/mesa/cualquier-valor` y llega como `params.mesaId`). 2. `<a href>` hace una recarga completa del browser perdiendo el estado y el prefetching, a diferencia de `<Link>` que navega del lado del cliente sin recargar. 3. `layout.tsx` envuelve todas las páginas (NavBar, body, html) y NO debe incluir lógica específica de una página ni fetch de datos de una sola sección. 4. NavBar necesita `'use client'` porque usa el hook `usePathname()` que requiere el browser, mientras que MesasPage de Día 1 retorna JSX estático y corre en el servidor. 5. Hoy no se actualiza ningún archivo porque las páginas aún no llaman al backend; en los días siguientes solo sería en `types/index.ts` y donde se consuma el dato. |
| **Qué entendió bien (una frase)** | Comprendió con precisión todos los conceptos sobre enrutamiento estático y dinámico, navegación sin recarga y la gestión de Server/Client Components. |
| **Qué necesita repasar (una frase)** | Puede afianzar la práctica de estructuración de tipados para anticiparse a los cambios de modelos futuros en el backend. |

---

## Flavio Silva

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Sharuk Ochoa Caballero |
| **Evaluado** | Flavio Silva |
| **Resumen de la respuesta** | 1. Explicó que las carpetas sin corchetes son rutas estáticas exactas y las de corchetes dinámicas inyectando el valor mediante `params.mesaId`. 2. Detalló que usar etiquetas tradicionales `<a>` recarga la página por completo destruyendo el estado de React, cosa que evita `<Link>`. 3. Especificó que el layout actúa como contenedor global estructural y carece de lógica de vistas aisladas. 4. Argumentó correctamente que el uso de hooks como `usePathname()` en el NavBar exige la directiva de cliente. 5. Concluyó que al no existir llamadas al backend en esta etapa inicial, los tipados permanecen intactos hasta las próximas integraciones. |
| **Qué entendió bien (una frase)** | Demostró un dominio claro y ordenado de cada una de las preguntas técnicas evaluadas sobre la arquitectura inicial de Next.js. |
| **Qué necesita repasar (una frase)** | Puede repasar con mayor profundidad las restricciones de arquitectura sobre qué elementos lógicos exactos no deben residir dentro de las plantillas globales. |