import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/features/auth";
import React from "react";

export function RequireAuth({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();

    isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;

    return <>{children}</>;
}
