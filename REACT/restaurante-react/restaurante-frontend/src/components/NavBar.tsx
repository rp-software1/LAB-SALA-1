import { NavLink } from "react-router-dom"
import "../css/NavBar.css"

interface NavbarProps {
    titulo?: string;
}
export default function Navbar({titulo = "Restaurante"}: NavbarProps){

    const navLinkClass = ({ isActive }: { isActive: boolean }) => isActive ? "active" : "";
    
    return(
        <nav className="navBar">
            <span>{titulo}</span>
            <ul className="nav-list">
                <li className="nav-item" >
                    <NavLink to='/' className={`nav-link ${navLinkClass}`}> Cartas</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to='/mesas' className={`nav-link ${navLinkClass}`}>Mesas</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to='/comandas' className={`nav-link ${navLinkClass}`}>Comandas</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/carrito' className={`nav-link ${navLinkClass}`}>Carrito</NavLink>
                </li>
            </ul>
        </nav>
    )
};