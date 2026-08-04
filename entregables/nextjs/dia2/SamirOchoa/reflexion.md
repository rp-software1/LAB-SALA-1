# Reflexión - Samir Ochoa

## Bloque A
1) **¿La diferencia entre NEXT_PUBLIC_ y sin prefijo fue lo que predijiste?**
    - Si lo fueron.

## Bloque B 
- **¿El fetch en un Server Component sin useEffect fue más o menos complicado de lo que esperabas?**
    - Fue menos complicado. Al usar `async/await` en un Server Component, el código es más limpio y directo al eliminar la necesidad de `useState`, `useEffect` y estados intermedios.
## Bloque C 
1) ***¿Fue intuitivo que `loading.tsx` y `error.tsx` son archivos especiales que `Next.js` detecta por nombre?**
    - Para mi es algo nuevo , me pareció extraño pero funcional.
## Bloque D
• **¿Qué haría distinto en PlatoCard cuando llegue el Context en Día 3? ¿Qué línea va a cambiar?**
    - Se usará el contexto global para agregar platos con la función del carrito. La línea del `onClick` cambiará para llamar a la función del contexto.