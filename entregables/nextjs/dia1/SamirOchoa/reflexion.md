# Reflexión - Samir Ochoa

## Bloque A
1) **¿La estructura del proyecto fue lo que predijiste? ¿Qué archivo te sorprendió más?**
    - Sí, al chusmear la estructura le atiné a casi todo. El que más me llamó la atención fue el `layout.tsx` porque funciona como una plantilla maestra y la carpeta `app/` como el router principal de todo el proyecto.

## Bloque B
1) **¿Por qué 'use client' es necesario en NavBar pero no en layout.tsx? ¿Qué diferencia hay?**
    - Porque el `NavBar` usa hooks como `usePathname()` que necesitan correr en el navegador, mientras que el `layout.tsx` se encarga de la estructura base desde el servidor sin requerir interactividad directa.