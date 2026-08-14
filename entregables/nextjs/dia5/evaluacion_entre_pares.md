# Evaluación entre pares - Next.js

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 01 |
| **Pregunta** | ¿Por qué ComandasPage puede usar export const metadata = {} sin async, pero DetalleMesa necesita export async function generateMetadata()? |
| **Resumen de la respuesta** | ComandasPage tiene título fijo. DetalleMesa necesita el número de mesa del backend. Si el título es estático — export const metadata. Si necesita datos — async function generateMetadata(). |
| **Qué entendió bien (una frase)** | Comprendió perfectamente cuándo utilizar metadata estática frente a metadatos dinámicos basados en peticiones al backend. |
| **Qué necesita repasar (una frase)** | Profundizar en los tiempos de ejecución de las funciones asíncronas dentro del ciclo de vida de los Server Components. |

---

## Flavio Silva (Evaluado) / Samir Sharuk Ochoa Caballero (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Sharuk Ochoa Caballero |
| **Evaluado** | Flavio Silva |
| **Caso** | 02 |
| **Pregunta** | ¿Qué hace Partial<Record<EstadoPedido, EstadoPedido>> y por qué es necesario? |
| **Resumen de la respuesta** | Partial hace opcionales todas las claves del Record. Sin Partial, TypeScript exigiría entradas para entregada y cancelada que no tienen siguiente. El botón condicional {siguiente && <button>} no renderiza nada cuando es undefined. |
| **Qué entendió bien (una frase)** | Explicó con claridad el uso de tipos de utilidad en TypeScript para manejar estados condicionales y evitar errores de compilación. |
| **Qué necesita repasar (una frase)** | Practicar la creación de estructuras de mapeo avanzadas con tipos genéricos en TypeScript. |

---

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 03 |
| **Pregunta** | ¿revalidatePath actualiza en tiempo real o al próximo request? |
| **Resumen de la respuesta** | Al próximo request. revalidatePath borra el caché — la próxima visita a /comandas trae datos frescos. No es WebSocket. Si la tarjeta no se actualizó sola, router.refresh() fue necesario. |
| **Qué entendió bien (una frase)** | Identificó de manera correcta la diferencia entre la invalidación de caché por petición y los sistemas de tiempo real. |
| **Qué necesita repasar (una frase)** | Analizar escenarios donde se requiera sincronización instantánea en la interfaz de usuario mediante mecanismos adicionales. |

---

## Flavio Silva (Evaluado) / Samir Sharuk Ochoa Caballero (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Sharuk Ochoa Caballero |
| **Evaluado** | Flavio Silva |
| **Caso** | 04 |
| **Pregunta** | ¿Cuáles son los 3 Server Actions del proyecto y qué hace cada uno? |
| **Resumen de la respuesta** | enviarComanda() en app/carrito/actions.ts — POST /pedidos. cambiarEstadoMesa() en app/mesa/[mesaId]/actions.ts — PATCH /mesas/:id. avanzarEstadoPedido() en app/comandas/actions.ts — PATCH /pedidos/:id/estado. |
| **Qué entendió bien (una frase)** | Detalló con precisión la ubicación de los archivos y las rutas de la API asociadas a cada Server Action del sistema. |
| **Qué necesita repasar (una frase)** | Revisar las mejores prácticas para la estructuración y modularización de Server Actions en proyectos grandes. |

---

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 05 |
| **Pregunta** | ¿Qué pasaría si el backend rechaza la transición por regla de negocio? |
| **Resumen de la respuesta** | avanzarEstadoPedido retorna { ok: false, error: "..." }. handleAvanzar muestra el error con alert. El estado en UI no cambia porque revalidatePath no fue llamado. |
| **Qué entendió bien (una frase)** | Comprendió el flujo completo de manejo de errores y cómo se previene la actualización inconsistente de la interfaz. |
| **Qué necesita repasar (una frase)** | Explorar alternativas más avanzadas a los diálogos nativos (alert) para la notificación de errores en la interfaz de usuario. |