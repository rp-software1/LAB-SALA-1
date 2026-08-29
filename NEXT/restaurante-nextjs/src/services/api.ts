import type { Mesa, Plato, Pedido, EstadoPedido } from '../types';
import fs from 'fs';
import path from 'path';

// Función auxiliar para leer localmente el db.json en el servidor (Vercel)
function leerDbLocal() {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Funciones de fetching — adaptadas para leer local o por red según corresponda

export async function getMesas(): Promise<Mesa[]> {
  if (typeof window === 'undefined') {
    const data = leerDbLocal();
    return data.mesas || [];
  }
  
  if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");
  const res = await fetch(`${BASE_URL}/mesas`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Error al obtener mesas: ${res.status}`);
  return res.json();
}

export async function getPlatos(): Promise<Plato[]> {
  if (typeof window === 'undefined') {
    const data = leerDbLocal();
    return data.platos || [];
  }

  if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");
  const res = await fetch(`${BASE_URL}/platos`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Error al obtener platos: ${res.status}`);
  return res.json();
}

export async function crearPedido(
  datos: Omit<Pedido, '_id' | 'creadoEn' | 'actualizadoEn'>
): Promise<Pedido> {
  // Nota: Si estás escribiendo datos (como crear un pedido) y corres en producción estática en Vercel, 
  // el sistema de archivos es de solo lectura. Para pruebas de lectura/visualización en Vercel, esto funcionará perfecto.
  if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");
  const res = await fetch(`${BASE_URL}/pedidos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Error al crear pedido: ${res.status}`);
  return res.json();
}

export async function cambiarEstadoPedido(
  pedidoId: string,
  estado: EstadoPedido
): Promise<Pedido> {
  if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");
  const res = await fetch(`${BASE_URL}/pedidos/${pedidoId}/estado`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ estado }),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Error al cambiar estado: ${res.status}`);
  return res.json();
}

export async function getMesasById(id: string): Promise<Mesa> {
  if (typeof window === 'undefined') {
    const data = leerDbLocal();
    const mesas: Mesa[] = data.mesas || [];
    const mesaEncontrada = mesas.find((m: any) => m._id === id || m.id === id);
    if (!mesaEncontrada) throw new Error(`No se encontró la mesa con el _id ${id}`);
    return mesaEncontrada;
  }

  if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");
  const res = await fetch(`${BASE_URL}/mesas?_id=${id}`, { cache: 'no-store' });
  if (res.status === 404) throw new Error(`No se encontró la mesa con el _id ${id} [Status: ${res.status}]`);
  if (!res.ok) throw new Error(`Error al buscar la mesa [Status: ${res.status}]`);
  const mesas: Mesa[] = await res.json();
  if (mesas.length === 0) throw new Error(`No se encontró la mesa con el _id ${id}`);
  return mesas[0];
}

export async function getPedido(): Promise<Pedido[]> {
  if (typeof window === 'undefined') {
    const data = leerDbLocal();
    return data.pedidos || [];
  }

  if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");
  const res = await fetch(`${BASE_URL}/pedidos/`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Error al obtener los pedidos [Status: ${res.status}]`);
  return res.json();
}