import { useState } from "react";

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Lógica de autenticación
    return {
        isAuthenticated,
        login: () => setIsAuthenticated(true),
        logout: () => setIsAuthenticated(false),
    };
}
