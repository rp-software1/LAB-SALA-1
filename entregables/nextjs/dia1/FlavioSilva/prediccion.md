# Predicción - Flavio Silva 

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
    - `layout.tsx` es la plantilla principal de la **web**, contiene el `<html>`, `<head>` y `<body>`.
    - `page.tsx` es la ruta principal de la **web**, corresponde a la ruta `/`.
    - `globals.css` es el archivo de estilos globales de la **web**, se aplica a toda la web.
    - `public` es la carpeta donde se guardan los archivos estáticos de la **web**, como imágenes, fuentes, etc.
    - `tsconfig.json` es el archivo de configuración de TypeScript, define las opciones de TypeScript para la **web**.
    - `next.config.ts` es el archivo de configuración de `Next.js`, define las opciones de `Next.js` para la **web**.

# Bloque B
1) **El `NavBar` de React Día 1 usaba `NavLink` con `activeClassName` o `className` con función. ¿Eso va a funcionar en `Next.js` sin cambios, o necesita adaptación?**
    - Necesita adaptación, ya que usamos `app router`, en el `NavBar` usaremos el `Link` con propiedad `href`.
  
