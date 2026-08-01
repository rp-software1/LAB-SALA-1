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

## Bloque B
1) **El `NavBar` de React Día 1 usaba `NavLink` con `activeClassName` o `className` con función. ¿Eso va a funcionar en `Next.js` sin cambios, o necesita adaptación?**
    - Necesita adaptación, ya que usamos `app router`, en el `NavBar` usaremos el `Link` con propiedad `href`.
  
## Bloque C 
1) **¿Cuántas carpetas van a crear en este bloque? Lista los nombres de las carpetas antes de ejecutar el primer mkdir.**
    - 3 carpetas: `mesas`, `menu`, `carrito` y uno adicional de `[id]` que sería así `mesas/[id]`

## Bloque D 
1) **¿Cómo llega el parámetro mesaId al componente page.tsx? ¿Como prop, como hook, o de otra forma?**
    - Como una `prop` llamada `params`
  
## Bloque E 
1) **En React usaban <Route path="*" element={<NotFound/>}> para capturar cualquier ruta no existente. ¿Cómo detecta Next.js que una ruta no existe y qué archivo usa para mostrarlo?**
    - Next.js detecta rutas no existentes cuando no encuentra una carpeta o archivo que coincida con la URL solicitada.
    - El archivo que usa para mostrar la página de error 404 es `not-found.tsx`.
2. **¿Por qué el archivo se llama not-found.tsx y no 404.tsx o notfound.tsx? ¿Es una convención o Next.js acepta cualquier nombre?**
    - Es una convención de Next.js, no acepta cualquier nombre.
