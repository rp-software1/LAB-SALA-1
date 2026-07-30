import Link from "next/link";
export default function Navbar() {
   return(
    <nav className="flex gap-6 py-4 bg-slate-800">
        <Link href="/">Inicio</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/students">Estudiantes</Link>
    </nav>
   )   
}