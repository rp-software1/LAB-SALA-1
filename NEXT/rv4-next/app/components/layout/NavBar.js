import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
   return(
    <nav className="flex gap-6 py-4 px-6 bg-slate-800">
        <div className="flex items-center gap-3">
            <Image src="/image/logo-rv4.png" width={100} height={20} alt="Logo RV4" />
        </div>
        <div className="flex items-center gap-3">
            <Link href="/" className="text-[#eee] font-bold" >Inicio</Link>
            <Link href="/mesas" className="text-[#eee] font-bold" >Mesas</Link>
            <Link href="/comandas" className="text-[#eee] font-bold" >Comandas</Link>
            <Link href="/carrito" className="text-[#eee] font-bold" >Carrito</Link>
            <Link href="/dashboard" className="text-[#eee] font-bold" >Dashboard</Link>
        </div>
    </nav>
   )   
}