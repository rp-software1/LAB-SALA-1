# Evaluación entre pares - Next.js

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 01 |
| **Pregunta** | ¿Qué hace notFound() y cuándo se llama en este proyecto? |
| **Resumen de la respuesta** | Interrumpe el renderizado del Server Component y muestra not-found.tsx. Se llama cuando getMesaById lanza un error indicando que la mesa no existe. |
| **Qué entendió bien (una frase)** | Comprendió con precisión la utilidad de interrumpir el renderizado para mostrar una vista de error personalizada ante recursos inexistentes. |
| **Qué necesita repasar (una frase)** | Profundizar en el ciclo de vida del renderizado de Server Components cuando se disparan excepciones controladas. |

---

## Flavio Silva (Evaluado) / Samir Sharuk Ochoa Caballero (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Sharuk Ochoa Caballero |
| **Evaluado** | Flavio Silva |
| **Caso** | 02 |
| **Pregunta** | ¿Por qué MesaDetalle usa useTransition y no un simple useState<boolean> para el loading? |
| **Resumen de la respuesta** | useTransition marca la actualización como no urgente manteniendo la UI responsiva sin necesidad de congelar botones ni gestionar estados booleanos manualmente. |
| **Qué entendió bien (una frase)** | Explicó de manera clara las ventajas de manejar tareas asíncronas con transiciones para optimizar la experiencia de usuario. |
| **Qué necesita repasar (una frase)** | Repasar otros hooks de concurrencia en React aplicados a formularios y mutaciones de datos. |

---

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 03 |
| **Pregunta** | ¿revalidatePath actualiza la página en tiempo real o al próximo request? |
| **Resumen de la respuesta** | Actualiza al próximo request borrando el caché anterior, por lo que el siguiente acceso realiza un fetch fresco al backend sin depender de WebSockets o polling. |
| **Qué entendió bien (una frase)** | Identificó correctamente el funcionamiento del sistema de caché basado en peticiones y invalidación controlada de Next.js. |
| **Qué necesita repasar (una frase)** | Estudiar las diferencias entre revalidatePath y revalidateTag para escenarios de invalidación granular. |

---

## Flavio Silva (Evaluado) / Samir Sharuk Ochoa Caballero (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Sharuk Ochoa Caballero |
| **Evaluado** | Flavio Silva |
| **Caso** | 04 |
| **Pregunta** | ¿generateMetadata puede fallar (por ejemplo si el backend está caído)? ¿Qué pasa con la página si generateMetadata falla? |
| **Resumen de la respuesta** | Sí puede fallar, por lo que se requiere un bloque try/catch para retornar un título genérico de respaldo, evitando que falle todo el renderizado de la página. |
| **Qué entendió bien (una frase)** | Reconoció la importancia de la tolerancia a fallos en funciones del servidor encargadas de generar metadatos dinámicos. |
| **Qué necesita repasar (una frase)** | Practicar la implementación de estrategias robustas de manejo de excepciones en metadatos y layouts. |

---

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 05 |
| **Pregunta** | Si quisieras que el badge del NavBar se actualice inmediatamente cuando cambias el estado de una mesa (sin navegar a /mesas), ¿cómo lo harías? |
| **Resumen de la respuesta** | Se puede utilizar router.refresh() desde un Client Component para forzar la revalidación de la página actual y actualizar los componentes dependientes del servidor. |
| **Qué entendió bien (una frase)** | Comprendió las alternativas disponibles para sincronizar componentes globales del cliente mediante el enrutador de Next.js. |
| **Qué necesita repasar (una frase)** | Explorar la gestión de estado global y sincronización con WebSockets o polling para datos en tiempo real estricto. |