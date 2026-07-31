"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/mesas", label: "Mesas" },
    { href: "/comandas", label: "Comandas" },
    { href: "/carrito", label: "Carrito" },
  ];

  return (
    <nav className="flex gap-6 py-4 px-6 justify-between items-center bg-slate-800">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image src="/image/logo-rv4.svg" width={100} height={20} alt="Logo RV4"/>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[#eee] text-lg font-bold ${
              pathname === link.href ? "text-blue-400" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div>
        <Link href="/dashboard">
          <Image src="https://avatars.githubusercontent.com/u/12345"
           width={40} height={40} alt="Usuario" className="rounded-full"/>
        </Link>
      </div>
    </nav>
  );
}