# Predicción del Día 3: Samir Ochoa

## Bloque A: 
1) **layout.tsx va a importar PedidoProvider. ¿layout.tsx necesita "use client" para poder importar un componente que sí tiene "use client"?**
    - No, no necesita, porque Next.js permite que un Server Component (como `layout.tsx`) importe y renderice Client Components (como `PedidoProvider`) sin alterar la naturaleza del layout[cite: 1]. La directiva solo marca el límite de la frontera en el componente que lo necesita

## Bloque B:
1) **¿Dónde exactamente en `PlatoCard.tsx` van a agregar la llamada a `agregarPlato(plato)`? ¿Antes o después del `setAgregado(true)`?**
    - **Línea donde va agregarPlato(plato):** Antes de `setAgregado(true)` (dentro de la función `handleAgregar`)
    - **¿El estado local agregado sigue sirviendo?** Sí, se mantiene intacto para proporcionar el feedback visual temporal ("✓ Agregado") en el botón de la tarjeta.

## Bloque C: 
1) **¿CarritoPage puede exportar metadata de Next.js? ¿Por qué?**
    - No, porque `CarritoPage` es un Client Component y solo los Server Components pueden exportar `metadata`.

## Bloque D:
1) **El Server Action recibe los datos del pedido como parámetro. ¿Qué tipo TypeScript le pondrías a ese parámetro?**
    - **Tipo del parámetro de enviarComanda:** `EstadoPedidoContext`
    - **¿El Server Action puede usar useState?** No.

## Bloque E: