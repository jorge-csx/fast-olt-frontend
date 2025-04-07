import { useState } from "react";

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    // Lógica de autenticación
    return {
        isAuthenticated,
        login: () => setIsAuthenticated(true),
        logout: () => setIsAuthenticated(false),
    };
}
