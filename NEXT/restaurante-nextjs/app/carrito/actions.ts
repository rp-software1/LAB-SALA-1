'use server';

import type { EstadoPedidoContext } from '../../src/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function enviarComanda(
  pedido: EstadoPedidoContext
): Promise<{ ok: true; pedidoId: string } | { ok: false; error: string }> {

  if (!BASE_URL) {
    return { ok: false, error: 'NEXT_PUBLIC_API_URL no configurada' };
  }

  try {
    console.log("Intentando enviar pedido a:", `${BASE_URL}/pedidos`);

    const res = await fetch(`${BASE_URL}/pedidos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mesaId: pedido.mesaId,
        tipo: pedido.tipo,
        estado: 'pendiente',
        items: pedido.items,
        total: pedido.total,
      }),
      cache: 'no-store',
    });

    if (!res.ok) {
      const texto = await res.text();
      return { ok: false, error: `Error ${res.status}: ${texto}` };
    }

    const data = await res.json();
    
    const pedidoId = data._id || data.id || (typeof data === 'string' ? data : null);

    if (!pedidoId) {
      console.error("El backend respondió pero no se encontró un ID válido. Objeto recibido:", data);
      return { ok: false, error: 'El servidor no devolvió un ID de pedido válido' };
    }

    console.log("Pedido creado con ID real:", pedidoId);
    return { ok: true, pedidoId: String(pedidoId) };

  } catch (err: unknown) {
    const mensaje = err instanceof Error ? err.message : "Error desconocido";
    return { ok: false, error: mensaje };
  }
}