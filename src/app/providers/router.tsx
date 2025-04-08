import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/app/layout/dashboard";
import { AuthLayout } from "@/app/layout/auth";
import { useAuth } from "@/features/auth";
import { Outlet } from "react-router-dom";
import { ReactNode } from "react";
import { LoginPage } from "@/pages/login";
import { RegisterPage } from "@/pages/register";

import {
    DashboardPage,
    AutofindPage,
    OnuPage,
    OltPage,
    UsersPage,
    SettingsPage,
} from "@/pages/dashboard";

interface AuthGuardProps {
    children?: ReactNode;
    requireAuth: boolean;
    redirectTo: string;
}

const AuthGuard = ({ children, requireAuth, redirectTo }: AuthGuardProps) => {
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
            { index: true, element: <DashboardPage /> },
            { path: "autofind", element: <AutofindPage /> },
            { path: "olt", element: <OltPage /> },
            { path: "onu", element: <OnuPage /> },
            { path: "users", element: <UsersPage /> },
            { path: "settings", element: <SettingsPage /> },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);
