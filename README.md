# LAB-SALA-1

## Objetivo 
- Afianzar el conocimiento en **Tecnologías** como  `Git`, `GitHub`, `JavaScript` 

## Metodología
- Pair Programming

## Autores 
- Samir Ochoa 
- Flavio Silva 

# README.md — en la raíz de I-SALA1/

# Sistema de Restaurante — RPSoft Bootcamp

## Proyectos

### restaurante-nextjs (producción)
Stack: Next.js 15 · TypeScript · Tailwind CSS · App Router
Backend: NestJS en localhost:3500 (o URL de producción)

#### Instalación
```
cd restaurante-nextjs
npm install
cp .env.local.example .env.local  # completar con la URL del backend
npm run dev
```

#### Variables de entorno
NEXT_PUBLIC_API_URL=http://localhost:3500

#### Rutas
- /        → Home
- /mesas   → Lista de mesas y gestión de estados
- /menu    → Menú de platos disponibles
- /carrito → Carrito de comandas
- /comandas → Panel de gestión de comandas (staff)
- /mesa/[id] → Detalle y cambio de estado de una mesa

### restaurante-frontend (React — referencia)
Stack: React 18 · TypeScript · Axios · React Router DOM
Proyecto de referencia — la versión Next.js lo reemplaza.

## Equipo
I-SALA1 — RPSoft Bootcamp
