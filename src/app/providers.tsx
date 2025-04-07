import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./providers/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar";
import { AppSidebar } from "@/shared/components/app-sidebar";
import { router } from "./providers/router";

export function AppProviders() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <RouterProvider router={router} />
            </ThemeProvider>
        </Suspense>
    );
}
