import Link from "next/link";
export default function Navbar() {
   return(
    <nav className="flex gap-6 py-4 px-6 bg-slate-800">
        <Link href="/" className="text-[#eee] font-bold" >Inicio</Link>
        <Link href="/dashboard" className="text-[#eee] font-bold" >Dashboard</Link>
        <Link href="/projects" className="text-[#eee] font-bold" >Proyectos</Link>
        <Link href="/students" className="text-[#eee] font-bold" >Estudiantes</Link>
    </nav>
   )   
}