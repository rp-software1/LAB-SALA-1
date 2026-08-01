# Predicción - Samir Ochoa

## Bloque A
1) **¿Qué estructura de carpetas genera create-next-app? Escríbela de memoria antes de ejecutar el comando.**
    ```text 
    app/
    node_modules/
    public/
    src/
    .next/
    .gitignore
    package.json
    tsconfig.json
    ```
2) **Responde:** 
    ```text 
    restaurante-nextjs/
    app/
        layout.tsx    ← ¿Para qué sirve? ¿Qué tiene adentro?
        page.tsx      ← ¿A qué ruta corresponde?
        globals.css   ← ¿Cuándo se aplica?
    public/         ← ¿Qué va aquí?
    tsconfig.json   ← ¿Qué diferencia ves con el de restaurante-frontend/?
    next.config.ts  ← ¿Para qué sirve?
    ```
    - `layout.tsx` funciona como el contenedor maestro que envuelve a todas las vistas mediante `{children}`, incluyendo las etiquetas estructurales del documento como `<html>` y `<body>`.
    - `page.tsx` define la interfaz gráfica inicial que se muestra al acceder directamente a la ruta raíz (`/`).
    - `globals.css` centraliza las reglas de diseño y estilos generales (como Tailwind), aplicándose de forma transversal en todo el proyecto.
    - `public/` almacena los recursos estáticos públicos del sistema, tales como logotipos, imágenes y ficheros multimedia.
    - `tsconfig.json` establece las reglas de tipado estricto adaptadas al entorno de compilación de Next.js.
    - `next.config.ts` maneja los parámetros de configuración avanzados y directivas globales propias del framework.


## Bloque B
- **NavLink funciona en Next.js?**
    - No, no funciona (necesita adaptación)
- **¿Qué import cambia?**
    - Se cambia react-router-dom por import Link from 'next/link' y se agrega usePathname desde next/navigation.