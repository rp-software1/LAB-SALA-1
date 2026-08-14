'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePedido } from "../../src/context/PedidoProvider";

export default function NavBar() {
  const pathname = usePathname();
  const { pedido } = usePedido();

  const totalItems = pedido.items.reduce((acc, item) => acc + item.cantidad, 0);

  const routes = [
    {href : "/" , label: "Inicio"},
    {href : "/mesas" , label: "Mesas"},
    {href : "/menu" , label: "Menú"},
    {href : "/carrito" , label: "Carrito"},
    {href: "/comandas", label: "Comandas"}
  ]

  const esActiva = (ruta: string): string =>
    pathname === ruta
      ? 'font-bold text-blue-700 underline'
      : 'text-gray-700 hover:text-blue-600';

  return (
    <nav className='bg-white shadow px-6 py-3 flex gap-6 items-center'>
      <span className='font-bold text-lg mr-4'>
        <Link href='/'>🍽 Restaurante</Link>
      </span>
      {routes.map(route => {
        const esCarrito = route.href === "/carrito";
        return (
          <Link
            key={route.href}
            href={route.href}
            className={`${esActiva(route.href)} ${esCarrito ? 'relative' : ''}`}
          >
            {route.label}
            {esCarrito && totalItems > 0 && (
              <span className="ml-1.5 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-sans inline-block align-middle">
                {totalItems}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}