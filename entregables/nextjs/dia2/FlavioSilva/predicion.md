# Preidcción - Flavio Silva 

## Bloque A
1) **¿Qué prefijo necesitan las variables de entorno de Next.js para que sean accesibles en el browser? ¿Y si solo necesitan estar en el servidor?**
    - Para que sean accesibles en el browser necesitan el prefijo `NEXT_PUBLIC_`, **ejm:** `NEXT_PUBLIC_API_URL=https://api.ejemplo.com`.
    - Para que solo estén en el servidor no necesitan prefijo.

## Bloque B 
1) **`MesasPage` llama a `getMesas()` con await. Si el backend tarda 2 segundos en responder, ¿qué ve el usuario durante esos 2 segundos? ¿Una pantalla en blanco, el layout con `NavBar`, o el skeleton de `loading.tsx`?**
    - Lo ideal es que vea el `loading.tsx` para que sepa que se están cargando los datos.