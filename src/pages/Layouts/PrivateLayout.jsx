import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function PrivateLayout() {
    const navigate = useNavigate()

    // Temporário até o AuthContext
    const isAuthenticated = true

    useEffect(() => {
        if(!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
                <Link className="navbar-brand text-white" to="/dashboard">CRM Pro</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/clientes">Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/projetos">Projetos</Link>
                        </li>
                    </ul>
                    <button className="btn btn-outline-light" onClick={() => {
                        //! logout(); futuramente
                        navigate('/login')
                    }}>
                        Sair
                    </button>
                </div>
            </nav>

            <div className="container py-4">
                <Outlet />
            </div>
        </>
    )
}