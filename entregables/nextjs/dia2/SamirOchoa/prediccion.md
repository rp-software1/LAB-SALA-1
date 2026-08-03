# Predicción - Samir Ochoa

## Bloque A
1) **¿Qué prefijo necesitan las variables de entorno de Next.js para que sean accesibles en el browser? ¿Y si solo necesitan estar en el servidor?**
    - Para que sean accesibles en el browser necesitan el prefijo `NEXT_PUBLIC_`, **ejm:** `NEXT_PUBLIC_API_URL=http://localhost:3000`.
    - Para que solo estén en el servidor no llevan ningún prefijo adicional.

## Bloque B
1) **MesasPage llama a getMesas() con await. Si el backend tarda 2 segundos en responder, ¿qué ve el usuario durante esos 2 segundos? ¿Una pantalla en blanco, el layout con NavBar, o el skeleton de loading.tsx?**
    - El usuario ve durante el fetch: El layout con NavBar y (si está configurado) el skeleton de `loading.tsx` renderizado desde el servidor.
    - ¿Quién muestra el loading? Lo muestra `loading.tsx` mediante el mecanismo de Suspense de Next.js de forma automática.