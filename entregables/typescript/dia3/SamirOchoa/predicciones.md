# Predicciones - Samir Ochoa

## Predicción A  
1) ¿Qué tipo tiene la variable data si escribes `const data = await getMesas()`? `¿TypeScript` lo infiere o necesitas declararlo explícitamente?
    - Tipo de data después del await: `Mesa[]` inferido automáticamente por TypeScript gracias a getMesas() y tipo del parámetro err en el catch: `unknown`.