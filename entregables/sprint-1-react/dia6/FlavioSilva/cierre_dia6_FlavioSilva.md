# Cierre del día 6 - Flavio Silva

## Preguntas 

1) El mock del Día 5 y la API del Día 6 devuelven platos con la misma forma. ¿Qué ventaja tiene eso? ¿Qué habrían tenido que cambiar en el componente si la API devolviera una estructura diferente?

    - Lo bueno de esto es que nuestro código ya soportaba la estructura de datos, por ende no hay que modificar, por otro lado un ejemplo de modificación es el atributo `id` por `_id` como aún no tenemos acceso al backend, usamos ambos con el operador de `id ?? _id` así podemos seguir probando el `.mock` y cuando tengamos acceso al backend, solo quitamos el operador de `id ?? _id` y listo.

2) Explica el patrón loading/error/data con tus propias palabras. ¿Por qué los tres estados son necesarios? ¿Qué pasa con la experiencia del usuario si falta alguno de los tres?

    - Son necesarios para que el usuario sepa que está pasando, como si inica la petición, si hay un error o si fue exitoso, en cada caso hay un mensaje para cada uno. 

3) El jueves comienza la integración cruzada con el Grupo A. ¿Qué preguntas concretas tienes sobre el backend que necesitas que el de Node te explique para conectar bien el sistema?

    - Digamos su **URL** para hacer la conexión, en que puerto corre, en pocas palabras el como conectarme con el backend para obtener la **response**.

4) Describe con tus palabras qué es un JWT y cómo fluye entre frontend y backend. No uses código — solo la idea. Si no puedes explicarlo sin mirar los apuntes, ¿qué parte no entendiste?

    - Entiendo nada más que me ayuda a identificar al usuario, y así no sea necesario enviar el usuario y contraseña en cada petición, pero realmente no sabría como aplicarlo.

> FIN DEL CIERRE DEL DÍA 6 