import type { Mesa, Plato, Pedido, EstadoPedido } from '../types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");

// Funciones de fetching — se llaman desde Server Components
// cache: "no-store" = siempre pide datos frescos al backend
// cache: "force-cache" = cachea la respuesta (default Next.js)

export async function getMesas(): Promise<Mesa[]> {
  const res = await fetch(`${BASE_URL}/mesas`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Error al obtener mesas: ${res.status}`);
  return res.json();
}

export async function getPlatos(): Promise<Plato[]> {
  const res = await fetch(`${BASE_URL}/platos`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Error al obtener platos: ${res.status}`);
  return res.json();
}

export async function crearPedido(
  datos: Omit<Pedido, '_id' | 'creadoEn' | 'actualizadoEn'>
): Promise<Pedido> {
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
  const res = await fetch(`${BASE_URL}/pedidos/${pedidoId}/estado`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ estado }),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Error al cambiar estado: ${res.status}`);
  return res.json();
}

export async function getMesasById(id:string):Promise<Mesa>{
  const res = await fetch(`${BASE_URL}/mesas?_id=${id}`, { cache: 'no-store' })

  if(res.status === 404) throw new Error(`No se encontro la mesa con el _id ${id} [Status: ${res.status}]`)

  if(!res.ok) throw new Error(`Error al buscar la mesa [Status: ${res.status}]`)

  const mesas: Mesa[] = await res.json();

  if(mesas.length === 0) throw new Error(`No se encontro la mesa con el _id ${id}`)

  return mesas[0];
}

export async function getPedido(): Promise<Pedido[]> {
  const res = await fetch(`${BASE_URL}/pedidos/`, {cache: 'no-store'});
  if(!res.ok) throw new Error(`Error al obtener los pedidos [Status: ${res.status}]`);
  return res.json();
}