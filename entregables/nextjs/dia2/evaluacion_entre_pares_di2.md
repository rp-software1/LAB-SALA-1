# Evaluación entre pares - Día 2 Next.js

## Samir Sharuk Ochoa Caballero

| Campo | Información |
|--------|-------------|
| **Evaluador** | Flavio Silva |
| **Evaluado** | Samir Sharuk Ochoa Caballero |
| **Caso** | 01
| **Resumen de la respuesta** | Porque es `Server Component`, al correr en el servidor no va a usar `hooks` de `React`|
| **Qué entendió bien (una frase)** |Identificó correctamente que los `Server Components` no utilizan `hooks` de `React` porque se ejecutan en el servidor.|
| **Qué necesita repasar (una frase)** |Reforzar que la obtención de datos se realiza directamente con `await` en lugar de `useEffect`.|

---

## Flavio Silva

| Campo | Información |
|--------|-------------|
| **Evaluador** | Samir Sharuk Ochoa Caballero |
| **Evaluado** | Flavio Silva |
|**Caso**|02|
| **Resumen de la respuesta** | `PlatoCard` es un `Client Component` ya que usa `hooks` de `React` y `MesasPage` es un `Server Component` ya que no usa `hooks` de `React`|
| **Qué entendió bien (una frase)** |Explicó correctamente que los componentes con eventos e `hooks` del navegador requieren `'use client'`. |
| **Qué necesita repasar (una frase)** |Precisar que `MesasPage` no necesita `'use client'` porque solo renderiza datos y no maneja interacciones del navegador.|