# Reflexión Samir Ochoa

## Bloque A
1) **¿Había algún .env commiteado? ¿Cómo lo resolvieron?**
    - No, no había ningún .env commiteado.

## Bloque B

1) **¿El primer deploy falló como se predijo, o tuvo otro error?**
  El primer despliegue falló exactamente como se predijo. tuvo un error en mesa/[mesaid]

## Bloque C

1) **¿El redeploy fue automático o tuvieron que triggerearlo manualmente?**
  Fue automático

## Bloque D
1) **¿Qué ruta tuvo más problemas en producción? ¿Cómo lo resolvieron?**
  - Bueno en si tuvimos varios problemas anteriormente por el tema que no se visualizaban las mesas comandas y platos que tenian. Lo resolvimos modificando el archivo src/services/api.ts para que las funciones del servidor leyeran los datos y funcione correctamente como quiere. 