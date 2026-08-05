# Evaluación entre pares - Next.js

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 01 |
| **Pregunta** | ¿Por qué PedidoProvider.tsx tiene "use client" pero layout.tsx no necesita "use client" para importarlo? |
| **Resumen de la respuesta** | Un Server Component puede importar y renderizar Client Components porque la directiva 'use client' solo marca el límite de la frontera. |
| **Qué entendió bien (una frase)** | Comprendió perfectamente que los Server Components pueden contener Client Components sin necesidad de declararse como clientes ellos mismos. |
| **Qué necesita repasar (una frase)** | Afianzar los conceptos de la frontera entre el entorno del servidor y del cliente en Next.js. |

---

## Flavio Silva (Evaluado) / Samir Sharuk Ochoa Caballero (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Sharuk Ochoa Caballero |
| **Evaluado** | Flavio Silva |
| **Caso** | 02 |
| **Pregunta** | ¿Qué diferencia hay entre un Server Action y un API Route de Next.js? |
| **Resumen de la respuesta** | El Server Action es una función que corre en el servidor pero se invoca directamente desde el cliente sin necesidad de una URL pública ni configurar headers. |
| **Qué entendió bien (una frase)** | Identificó con claridad que los Server Actions simplifican la comunicación con el servidor al invocarse como funciones directas. |
| **Qué necesita repasar (una frase)** | Profundizar en los casos de uso avanzados donde un API Route sigue siendo indispensable frente a un Server Action. |

---

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 03 |
| **Pregunta** | ¿Por qué enviarComanda() retorna un objeto { ok: boolean } en lugar de lanzar un Error? |
| **Resumen de la respuesta** | Permite manejar el éxito y el error de forma predecible sin necesidad de usar bloques try/catch en el cliente. |
| **Qué entendió bien (una frase)** | Explicó adecuadamente las ventajas de retornar un objeto estructurado para un control de errores más limpio en el frontend. |
| **Qué necesita repasar (una frase)** | Repasar el manejo de excepciones nativas en funciones asíncronas del servidor. |

---

## Flavio Silva (Evaluado) / Samir Sharuk Ochoa Caballero (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Sharuk Ochoa Caballero |
| **Evaluado** | Flavio Silva |
| **Caso** | 04 |
| **Pregunta** | ¿Qué pasa con el carrito si el usuario recarga la página? |
| **Resumen de la respuesta** | Se pierde debido a que el estado con useState no persiste entre recargas de la página. |
| **Qué entendió bien (una frase)** | Reconoció correctamente las limitaciones del almacenamiento en memoria local mediante hooks ante eventos de recarga. |
| **Qué necesita repasar (una frase)** | Investigar la implementación de persistencia utilizando localStorage o cookies en futuros sprints. |

---

## Samir Sharuk Ochoa Caballero (Evaluado) / Flavio Silva (Evaluador)

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 05 |
| **Pregunta** | Si quisieras que /carrito también mostrara el estado de la mesa asignada, ¿qué cambio harías? ¿Dónde está ese dato? |
| **Resumen de la respuesta** | El dato se encuentra en pedido.mesaId dentro del Context y se puede mostrar directamente en el JSX ya que el carrito tiene acceso mediante usePedido(). |
| **Qué entendió bien (una frase)** | Comprendió cómo acceder y reutilizar la información global almacenada en el Context de la aplicación. |
| **Qué necesita repasar (una frase)** | Practicar la consulta de datos relacionales adicionales mediante peticiones por ID cuando se requiere información detallada de la mesa. |