# Predicciones - Samir Ochoa

## Predicción A  
- **¿Qué archivos del proyecto actual ya tienen declaradas interfaces que van a quedar duplicadas cuando crees types/index.ts? Listarlos antes de continuar.**
- **Archivos con tipos duplicados:**
    - api.ts, PlatoCard.tsx y MesaCard.tsx.
- **Tipos que se repiten:**
    - Mesa, EstadoMesa, Pedido, EstadoPedido.
 
 ## Predicción B
 - **¿Cuántas interfaces/types duplicados hay en total en api.ts, PlatoCard.tsx y MesaCard.tsx que vas a eliminar en este bloque?**
 -  **Cantidad de declaraciones duplicadas que vas a eliminar:**
    - 5
-   **Tipos que se van a eliminar de api.ts:**
    - EstadoMesa, EstadoPedido, TipoPedido, Mesa, ItemPedido, Pedido.

## Predicción C
- **PedidoContext actualmente tiene 5 funciones: agregarPlato, quitarPlato, cambiarTipo, asignarMesa y limpiarPedido. ¿Cuál es el tipo exacto de cada parámetro según los modelos en types/index.ts?**
**agregarPlato recibe:**
- Plato
**QuitarPlato recibe:**
- string
**cambiarTipo recibe:**
- TipoPedido
**asignarMesa recibe:**
- string
**limpiarPedido recibe:**
- (ninguno/void)
