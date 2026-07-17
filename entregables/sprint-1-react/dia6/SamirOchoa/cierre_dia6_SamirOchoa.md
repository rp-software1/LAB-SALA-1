# Cierre del día 6 - Samir Ochoa

## Preguntas 

1) El mock del Día 5 y la API del Día 6 devuelven platos con la misma forma. ¿Qué ventaja tiene eso? ¿Qué habrían tenido que cambiar en el componente si la API devolviera una estructura diferente?

    - La ventaja principal es que el componente de React no necesita saber de donde vienen los datos, por lo que funciona igual tanto con el archivo local como con el servidor. Si la estructura fuera diferente, tendria que haber cambiado todo el codigo donde accedo a la propiedades de los platos (como `plato.nombre`, `plato.precio`) para que coincida con los nuevos nombres que le manda el API.

2) Explica el patrón loading/error/data con tus propias palabras. ¿Por qué los tres estados son necesarios? ¿Qué pasa con la experiencia del usuario si falta alguno de los tres?

    - Este patrón es una forma de manejar la comunicación con el servidor. Los tres estados son necesarios porque el usuario siempre debe saber qué ocurre: el `loading` indica que la aplicación está trabajando y evita que el usuario piense que la pantalla está congelada; el `error` avisa si algo falló, como una falta de conexión, evitando que el usuario espere algo que nunca llegará; y el `data` es el resultado final exitoso que permite que la página no esté vacía. Si falta alguno, la experiencia se siente rota o incompleta.

3) El jueves comienza la integración cruzada con el Grupo A. ¿Qué preguntas concretas tienes sobre el backend que necesitas que el de Node te explique para conectar bien el sistema?

    - Necesito preguntarles cuál es la URL exacta o el endpoint para realizar las peticiones al servidor. También debo consultar qué formato específico esperan que les envíe cuando registre un nuevo pedido y si existe alguna configuración especial de CORS que deba conocer para asegurar que mi frontend pueda conectarse sin restricciones.

4) Describe con tus palabras qué es un JWT y cómo fluye entre frontend y backend. No uses código — solo la idea. Si no puedes explicarlo sin mirar los apuntes, ¿qué parte no entendiste?

    - Un `JWT` es como un pasaporte que te da el servidor cuando inicias sesión. En ese pasaporte viene tu nombre y tus permisos. Luego, cada vez que quieres entrar a alguna parte del sistema (hacer una petición), muestras ese pasaporte. El servidor lo revisa para asegurarse de que realmente eres tú y que tienes permiso para entrar, sin necesidad de preguntarte la contraseña cada vez. Así, el servidor mantiene todo seguro y rápido.

> FIN DEL CIERRE DEL DÍA 6 