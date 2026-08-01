# Reflexión - Flavio Silva 

## Bloque A
1) **¿La estructura del proyecto fue lo que predijiste? ¿Qué archivo te sorprendió más?**
    - Si, la mayor parte, el que más me sorprende es el `layout.tsx` pues es la plantilla principal, igual como la `app/` que sería el router, son los que más me sorprendieron.

## Bloque B
1) **¿Por qué 'use client' es necesario en NavBar pero no en layout.tsx? ¿Qué diferencia hay?**
    - Porque el `NavBar` usa hooks como `usePathname()` que necesitan correr en el navegador, mientras que el `layout.tsx` se encarga de la estructura base desde el servidor sin requerir interactividad directa.
  
## Bloque C 
1) **La tabla React Router → App Router: ¿fue el momento donde el App Router "hizo clic"? ¿Qué parte fue la más reveladora?**
    - Pues lo más revelador fue que solo necesitaba una carpeta como `mesas/`  y dentro de el tener el `page.tsx` y si fuera necesario pues tener el `layout.tsx`. 
  
## Bloque D 
1) **¿params como prop fue lo que predijiste o esperabas un hook como en React? ¿Qué implica esa diferencia?**
    - Si era lo que esperaba, un `prop` llamado `params` que contiene el `mesaId`.