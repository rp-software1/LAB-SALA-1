# Predicción - Flavio Silva 

## Bloque A
1) **¿CarritoPage puede exportar metadata? ¿Por qué sí o por qué no?**
    - No, porque es un `use client` y la metadata solo se puede exportar desde Server Components.

## Bloque B
1) **Si el restaurante usa imágenes de platos almacenadas en un servicio externo (como `Cloudinary` o `AWS S3`), ¿qué hay que configurar en `next.config.ts` para que `<Image>` de `Next.js` las muestre?**
    - ¿Dónde se configura para imágenes externas?: En next.config.ts
    - ¿Qué campo de next.config.ts controla eso?: Por lo que pude investigar es `images.remotePatterns`