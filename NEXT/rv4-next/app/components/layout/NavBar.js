import Link from "next/link";
export default function Navbar() {
   return(
    <nav className="flex gap-6 py-4 px-6 bg-slate-800">
        <Link href="/" className="text-[#eee] font-bold" >Inicio</Link>
        <Link href="/mesas" className="text-[#eee] font-bold" >Mesas</Link>
        <Link href="/comandas" className="text-[#eee] font-bold" >Comandas</Link>
        <Link href="/carrito" className="text-[#eee] font-bold" >Carrito</Link>
        <Link href="/dashboard" className="text-[#eee] font-bold" >Dashboard</Link>
    </nav>
   )   
}