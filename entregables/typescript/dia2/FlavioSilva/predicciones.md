# Predicciones - Flavio Silva 

## Predicción A  
1) ¿Qué archivos del proyecto actual ya tienen declaradas interfaces que van a quedar duplicadas cuando crees types/index.ts? Listarlos antes de continuar.

    - `MesaCard.tsx` 
    - `PlatoCard.tsx`
    - `api.ts`

## Predicción B 
1) ¿Cuántas `interfaces/types` duplicados hay en total en `api.ts`, `PlatoCard.tsx` y `MesaCard.tsx` que vas a eliminar en este bloque?
    - 8

## Predicción C 
1) `PedidoContext` actualmente tiene 5 funciones: `agregarPlato`, `quitarPlato`, `cambiarTipo`, `asignarMesa` y `limpiarPedido`. ¿Cuál es el tipo exacto de cada parámetro según los modelos en `types/index.ts`?
    - `calcularTotal()`: `ItemPedido[]`
    - `agregarPlato()` : `Plato`
    - `eliminarPlatoCompleto()` : `Plato` 
    - `eliminarPlatoMenosUno()` : `Plato` 
    - `cambiarTipo()` : `TipoPedido`
    - `asignarMesa()` : `string`
    - `limpiarPedido()` : `void`