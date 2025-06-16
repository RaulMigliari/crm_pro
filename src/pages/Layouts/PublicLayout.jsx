import { Outlet } from "react-router-dom";

export default function PublicLayout() {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1>CRM Pro</h1>
                <p>Gerencie seus clientes e projetos com praticidade</p>
            </div>
            <Outlet />
        </div>
    )
}