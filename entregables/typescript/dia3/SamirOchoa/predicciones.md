# Predicciones - Samir Ochoa

## Predicción A  
1) ¿Qué tipo tiene la variable data si escribes `const data = await getMesas()`? `¿TypeScript` lo infiere o necesitas declararlo explícitamente?
    - Tipo de data después del await: `Mesa[]` inferido automáticamente por TypeScript gracias a getMesas() y tipo del parámetro err en el catch: `unknown`.

## Predicción B 
2) `CarritoPage` usa pedido del `Context` para construir el body del `POST`. ¿Cuántos campos tiene ese objeto? Lista los que deben ir en el body según la interface `Pedido`.
    - El objeto del body para el POST tiene 5 campos: `mesaId`, `tipo`, `estado`, `items` y `total`

## Predicción C
3) useParams<{ mesaId: string }>() — ¿el campo mesaId del objeto retornado tiene tipo string o string | undefined? Predice el tipo antes de probarlo.
Tipo de mesaId después de useParams<{ mesaId: string }>(): `string | undefined`
¿Necesitas un guard de undefined o TypeScript ya garantiza que es string?: Sí, se necesita un guard.