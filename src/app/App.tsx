import { ThemeProvider } from "./providers/theme-provider";




function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div>Hi</div>
        </ThemeProvider>
    );
}

export default App;
