import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/app/layout/dashboard";
// import { RequireAuth } from "@/shared/lib";
import { AuthLayout } from "@/app/layout/auth";
import { useAuth } from "@/features/auth";
import { Outlet } from "react-router-dom";

// const { isAuthenticated } = useAuth();
const LoginPage = () => {
    return <div>LoginPage</div>;
};
const RegisterPage = () => {
    return <div>RegisterPage</div>;
};

const AuthGuard = ({ children, requireAuth, redirectTo }) => {
    const { isAuthenticated } = useAuth();

    // Si requiere autenticación pero no está autenticado, o
    // si no requiere autenticación pero está autenticado
    if (
        (requireAuth && !isAuthenticated) ||
        (!requireAuth && isAuthenticated)
    ) {
        return <Navigate to={redirectTo} replace />;
    }

    return children || <Outlet />;
};

const AuthRootRedirect = () => {
    return <Navigate to="/auth/login" replace />;
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Landing Page Comming Soon</div>,
    },
    {
        path: "/auth",
        element: (
            <AuthGuard requireAuth={false} redirectTo="/app">
                <AuthLayout />
            </AuthGuard>
        ),
        children: [
            { index: true, element: <AuthRootRedirect /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
        ],
    },
    {
        path: "/app",
        element: (
            <AuthGuard requireAuth={true} redirectTo="/auth/login">
                <DashboardLayout />
            </AuthGuard>
        ),
        children: [
            { index: true, element: <div>DashboardHome</div> },
            { path: "autofind", element: <div>AUTOFIND</div> },
            { path: "olt", element: <div>OLT</div> },
            { path: "onu", element: <div>ONU</div> },
            { path: "users", element: <div>USERS</div> },
            { path: "settings", element: <div>SETTINGS</div> },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);
