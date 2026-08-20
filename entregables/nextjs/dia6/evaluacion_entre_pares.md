# Evaluación entre pares - Next.js

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 01 |
| **Pregunta** | ¿Por qué CarritoPage no puede exportar metadata y las otras páginas sí? |
| **Resumen de la respuesta** | CarritoPage tiene "use client" — es Client Component. metadata solo funciona en Server Components porque se procesa en el servidor antes de enviar el HTML. CarritoPage usa useState y Context que requieren el browser. |
| **Qué entendió bien (una frase)** | Comprendió perfectamente la limitación técnica de los Client Components respecto al procesamiento de metadatos en el servidor. |
| **Qué necesita repasar (una frase)** | Explorar técnicas para extraer la lógica interactiva a componentes hijos permitiendo que la página principal siga siendo un Server Component. |

---

## Flavio Silva (Evaluado) / Samir Sharuk Ochoa Caballero (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Sharuk Ochoa Caballero |
| **Evaluado** | Flavio Silva |
| **Caso** | 02 |
| **Pregunta** | ¿Qué hace metadata.title.template en layout.tsx? |
| **Resumen de la respuesta** | Define un patrón para el título: '%s — Sistema de Restaurante'. Cuando /mesas exporta title: 'Mesas', el browser muestra 'Mesas — Sistema de Restaurante'. Las páginas no tienen que repetir el sufijo. |
| **Qué entendió bien (una frase)** | Explicó de manera clara cómo la herencia de layouts facilita la reutilización y el orden de los títulos en Next.js. |
| **Qué necesita repasar (una frase)** | Profundizar en las opciones avanzadas de configuración de Open Graph y Twitter cards a nivel global. |

---

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 03 |
| **Pregunta** | ¿Por qué es importante limpiar los console.log antes del deploy? |
| **Resumen de la respuesta** | En un Server Component los console.log aparecen en los logs del servidor (Vercel). Si hay console.log de debug de datos sensibles (pedidos, usuarios), se registran en logs de producción accesibles al equipo. En Client Components aparecen en la consola del browser. |
| **Qué entendió bien (una frase)** | Identificó los riesgos de seguridad y buenas prácticas operativas asociados con la exposición de datos en logs de producción. |
| **Qué necesita repasar (una frase)** | Implementar sistemas de logging estructurado y niveles de severidad (debug, info, error) en lugar de console.log nativos. |

---

## Flavio Silva (Evaluado) / Samir Sharuk Ochoa Caballero (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Sharuk Ochoa Caballero |
| **Evaluado** | Flavio Silva |
| **Caso** | 04 |
| **Pregunta** | ¿Qué indica el icono λ en la salida de npm run build? |
| **Resumen de la respuesta** | Lambda = función serverless = página dinámica. Se genera en runtime (por cada request), no en build time. Las páginas con cache: no-store o parámetros dinámicos suelen ser λ. |
| **Qué entendió bien (una frase)** | Detalló con precisión el concepto de renderizado dinámico en entornos serverless y su representación en la compilación. |
| **Qué necesita repasar (una frase)** | Analizar las diferencias de rendimiento entre rutas estáticas (punto negro) y rutas dinámicas (lambda) en producción. |

---

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 05 |
| **Pregunta** | Si mañana el equipo quiere agregar una nueva ruta /historial que muestre pedidos por fecha, ¿qué archivos necesitan crear en restaurante-nextjs/? |
| **Resumen de la respuesta** | app/historial/page.tsx (Server Component con fetch), app/historial/loading.tsx, app/historial/error.tsx. Si tiene componentes con interacción: app/historial/[componente].tsx con "use client". Si tiene Server Action: app/historial/actions.ts con "use server". |
| **Qué entendió bien (una frase)** | Describió con exactitud la estructura de archivos del App Router de Next.js y la separación de responsabilidades. |
| **Qué necesita repasar (una frase)** | Practicar la implementación de interfaces con manejo avanzado de estados de carga y errores asíncronos. |