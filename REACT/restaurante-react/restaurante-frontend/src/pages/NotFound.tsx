import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate(); 

    return(
        <div className="not-found">
            <h1>404</h1>
            <p>Esta página no existe en el restaurante</p>

            <button onClick={() => navigate('/')}>
                Ir a la Carta
            </button>
        </div>
    )
}