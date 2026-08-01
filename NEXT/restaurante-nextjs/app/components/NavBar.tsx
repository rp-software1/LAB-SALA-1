'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const routes = [
    {href : "/" , label: "Inicio"},
    {href : "/mesas" , label: "Mesas"},
    {href : "/menu" , label: "Menú"},
    {href : "/carrito" , label: "Carrito"}
  ]

  const esActiva = (ruta: string): string =>
    pathname === ruta
      ? 'font-bold text-blue-700 underline'
      : 'text-gray-700 hover:text-blue-600';

  return (
    <nav className='bg-white shadow px-6 py-3 flex gap-6'>
      <span className='font-bold text-lg mr-4'>
        <Link href='/'>🍽 Restaurante</Link>
      </span>
      {routes.map(route => (
        <Link key={route.href} href={route.href} className={esActiva(route.href)}>{route.label}</Link>
      ))}
    </nav>
  );
}