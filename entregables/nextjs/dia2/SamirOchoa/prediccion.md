# Predicción - Samir Ochoa

## Bloque A
1) **¿Qué prefijo necesitan las variables de entorno de Next.js para que sean accesibles en el browser? ¿Y si solo necesitan estar en el servidor?**
    - Para que sean accesibles en el browser necesitan el prefijo `NEXT_PUBLIC_`, **ejm:** `NEXT_PUBLIC_API_URL=http://localhost:3000`.
    - Para que solo estén en el servidor no llevan ningún prefijo adicional.

## Bloque B
1) **MesasPage llama a getMesas() con await. Si el backend tarda 2 segundos en responder, ¿qué ve el usuario durante esos 2 segundos? ¿Una pantalla en blanco, el layout con NavBar, o el skeleton de loading.tsx?**
    - El usuario ve durante el fetch: El layout con NavBar y (si está configurado) el skeleton de `loading.tsx` renderizado desde el servidor.
    - ¿Quién muestra el loading? Lo muestra `loading.tsx` mediante el mecanismo de Suspense de Next.js de forma automática.
## Bloque C 
1) **¿error.tsx captura errores de JavaScript (como un error de sintaxis en el código) o solo errores del fetch (como un 500 del backend)?**
    - Captura tanto los errores de ejecución o llamadas fallidas al backend como un `fetch` fallido o un error 500 como errores de renderizado en los componentes cliente/servidor.

## Bloque D 
1) **¿MenuPage va a necesitar loading.tsx y error.tsx también? Decide antes de empezar si los vas a crear o no, y anota la razón.**
    - Si lo va necesitar ambos aunque sea `Server Components` igual puede haber errores en el fetch y por eso se necesitan ambos. 