# Cierre del día 2 - Flavio Silva

## Preguntas 
1) ¿Qué hace `main.jsx` exactamente? ¿Qué pasaría si lo borraras del proyecto?
    - `main.jsx` conecta la app con el `DOM`, entonces borrarlo provocaría que la app no se pueda renderizar, podrías tener otros archivos `.jsx` que hagan eso, pero lo ideal es tener `main.jsx`, es lo estándar. 

2) ¿Por qué **PlatoCard** vive en `components/` y **Home** vive en `pages/`? ¿Cuál es la diferencia concreta entre los dos?
    - Un `component` es una parte de la **app** es como una ficha del **rompezabezas** pero en este caso del `DON`, mientras que una `page` es como un **rompecabezas** completo, es decir, una `page` está compuesta por varios `components`.

3) En el Día 1 usabas import `{ platosMock }` from `"./data/platos.mock.js"`. ¿Por qué ese import funciona ahora con Vite y no funcionaba con el **CDN** del Día 1?
    - Por qué el **CDN** no soporta `import` y `export`, para usarlo necesitaba que sea de `type = "module"` pero ya era `type= "text/babel"`, entonces no podía usarlo como `module`, como consecuencia no me permitía usar `import` y `export`.

4) ``hooks/``, ``services/`` y ``context/``están vacías hoy. ¿Qué va a vivir en cada una y desde qué día del proyecto se van a usar?
    - En `hooks/` es posible que valla lógica reutilizable.
    - En `services/` va a ir la comunicación con el **backend** o **API**.
    - En `context/` va a servir para compartir información entre componentes sin necesidad de pasar `props`.