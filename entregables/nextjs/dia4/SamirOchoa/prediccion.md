# Predicción - Samir Ochoa

## Bloque A 
1) **¿El backend tiene un endpoint GET /mesas/:id? Verificarlo con Postman antes de escribir código. ¿Qué retorna si el ID no existe — un 404 o un objeto vacío?**
    - Si, el endpoint existe, y si no exite retorna `error: Not Found`

## Bloque B
1) **¿generateMetadata puede hacer fetch de datos del backend para construir el title dinámico? ¿O solo puede usar los params de la URL?**
    - Sí, puede ser una función asíncrona (`async`) y hacer `await`.
    **¿Puede llamar a getMesaById()?** Si.

## Bloque C
1) **¿El Suspense manual que envuelve `<MesaDetalle>` en `page.tsx` — cuándo exactamente muestra el skeleton? ¿`MesaDetalle` hace algún `fetch` asíncrono?**
    - El skeleton se muestra cuando `MesaDetalle` hace el fetch de los datos de la mesa, y sí, `MesaDetalle` hace un fecth. 

## Bloque D 
1) **Después de llamar a cambiarEstadoMesa() con éxito, ¿el usuario tiene que recargar /mesas manualmente para ver el nuevo estado, o Next.js lo actualiza solo?**
    - Sí, gracias al uso de `revalidatePath('/mesas')`. Lo que realiza es borrar el caché de esa ruta en el servidor para que en el siguiente request se obtengan los datos frescos.