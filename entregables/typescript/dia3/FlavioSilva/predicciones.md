# Predicciones - Flavio Silva 

## Predicción A  
1) ¿Qué tipo tiene la variable data si escribes `const data = await getMesas()`? `¿TypeScript` lo infiere o necesitas declararlo explícitamente?
    - `TypeScript` lo infiere y el tipo sería `Mesa[]`.

## Predicción B 
2) `CarritoPage` usa pedido del `Context` para construir el body del `POST`. ¿Cuántos campos tiene ese objeto? Lista los que deben ir en el body según la interface `Pedido`.
    - Tiene `_id`, `mesaId`, `tipo`, `items` 
    - La **interface** `Pedido` tiene : `_id`, `mesaId`, `tipo`, `estado`, `items`, `total`, `creadoEn`, `actualizadoEn`