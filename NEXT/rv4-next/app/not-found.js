import Link from "next/link";

const NotFound = () =>{
    return(
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold">404</h1>
            <p>Página no encontrada</p>
            <Link href="/" className="text-[#222] underline font-bold">Volver al Inicio</Link>
        </div>
    )
};

export default NotFound;