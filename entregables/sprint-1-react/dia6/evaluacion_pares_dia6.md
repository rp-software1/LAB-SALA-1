# TARJETA DE EVALUACIÓN ENTRE PARES - DÍA 6

## Samir Ochoa

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Ochoa |
| **Escenario elegido** | N.° 2 |
| **Resumen de la respuesta** |Cuando el **backend** responde con un error `500`, la petición falla en axios, el error llega al catch del componente y se cambia el estado de error para mostrar un mensaje al usuario.|
| **Qué entendió bien (una frase)** |Entendió correctamente el flujo del error desde la petición hasta el catch, además del cambio de estados como error y loading.|
| **Qué necesita repasar (una frase)** |Puede reforzar cómo se propagan los errores entre funciones y diferenciar mejor dónde ocurre el error (`api.js`) y dónde se maneja para la interfaz (`MenuPage` o `CarritoPage`). |

---

## Flavio Silva

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Ochoa |
| **Evaluado** | Flavio Silva |
| **Escenario elegido** | N.° 3 |
| **Resumen de la respuesta** |`VITE_API_URL` se coloca en `.env.local` para separar la configuración del proyecto del código y poder cambiar la **URL** del backend sin modificar archivos como `api.js`. También mencionó que al estar en `.env.local` y agregarse al `.gitignore`, evita subir información de configuración al repositorio. |
| **Qué entendió bien (una frase)** |Entendió que las variables de entorno permiten manejar configuraciones externas y evitar tener datos escritos directamente en el código.|
| **Qué necesita repasar (una frase)** |Puede reforzar que `.env.local` no protege completamente datos visibles en aplicaciones frontend, sino que principalmente evita subir archivos locales y separar configuraciones por ambiente.|