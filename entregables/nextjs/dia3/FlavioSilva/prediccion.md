# Predicción del Día 3: Flavio Silva

## Bloque A: 
1) **layout.tsx va a importar PedidoProvider. ¿layout.tsx necesita "use client" para poder importar un componente que sí tiene "use client"?**
    - No necesita "use client" para poder importar un componente que sí tiene "use client", lo necesitaría si el usara `APIs` exclusivas del cliente como los `hooks` de react o `eventos` del navegador.

## Bloque B: 
1) **¿Dónde exactamente en `PlatoCard.tsx` van a agregar la llamada a `agregarPlato(plato)`? ¿Antes o después del `setAgregado(true)`?**
    - Se debe agregar antes del `setAgregado(true)`

## Bloque C: 
1) **¿CarritoPage puede exportar metadata de Next.js? ¿Por qué?**
    - No, porque `CarritoPage` es un Client Component y solo los Server Components pueden exportar `metadata`.

## Bloque D:
1) **El Server Action recibe los datos del pedido como parámetro. ¿Qué tipo TypeScript le pondrías a ese parámetro?**
    - Le pondría `EstadoPedidoContext`