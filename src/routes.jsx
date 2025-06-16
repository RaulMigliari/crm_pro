import { createBrowserRouter } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/Auth/LoginPage"
import RegisterPage from "./pages/Auth/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import PublicLayout from "./pages/Layouts/PublicLayout"
import PrivateLayout from "./pages/Layouts/PrivateLayout"

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        element: <PublicLayout />,
        children: [
            { path: "/login", element: <LoginPage/> },
            { path: "/register", element: <RegisterPage /> },
        ]
    },
    {
        path: "/dashboard", 
        element: <PrivateLayout />,
        children: [
            { index: true, element: <DashboardPage /> }
        ] 
    }
])

export default router