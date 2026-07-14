import PropTypes from "prop-types"

export default function Navbar({titulo = "Restaurante"}){
    return(
        <nav className="navBar">
            <h1>{titulo}</h1>
            <ul className="nav-list">
                <li className="nav-item" >Carta</li>
                <li className="nav-item" >Mesas</li>
                <li className="nav-item" >Comandas</li>
            </ul>
        </nav>
    )
};

Navbar.PropTypes ={
    titulo : PropTypes.string.isRequired,
};