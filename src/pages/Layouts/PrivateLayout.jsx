import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

export default function PrivateLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null; // ou um spinner

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
          <button className="btn btn-outline-light" onClick={logout}>
            Sair
          </button>
        </div>
      </nav>

      <div className="container py-4">
        <Outlet />
      </div>
    </>
  );
}
