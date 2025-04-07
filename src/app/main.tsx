import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProviders } from "./providers";
import "./styles/globals.css";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppProviders />
    </StrictMode>
);
