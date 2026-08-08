# Predicción - Samir Ochoa

## Bloque A 
1) **¿El backend tiene un endpoint GET /mesas/:id? Verificarlo con Postman antes de escribir código. ¿Qué retorna si el ID no existe — un 404 o un objeto vacío?**
    - Si, el endpoint existe, y si no exite retorna `error: Not Found`

## Bloque B
1) **¿generateMetadata puede hacer fetch de datos del backend para construir el title dinámico? ¿O solo puede usar los params de la URL?**
    - Sí, puede ser una función asíncrona (`async`) y hacer `await`.
    **¿Puede llamar a getMesaById()?** Si.