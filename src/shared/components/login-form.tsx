import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { PasswordInput } from "@/shared/ui/password-input";
import { Link } from "react-router-dom";

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Iniciar sesión</h1>
                <p className="text-muted-foreground text-sm">
                    Ingresa tu nombre de usuario para acceder a tu cuenta.
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="username">Usuario</Label>
                    <Input id="username" type="username" placeholder="usuario@empresa.com" required/>
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Contraseña</Label>
                        <Link to="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <PasswordInput id="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Iniciar sesión
                </Button>
            </div>
            <div className="text-center text-sm">
                ¿No tienes una cuenta?{" "}
                <Link to="/auth/register" className="underline underline-offset-4">
                    Registrarse
                </Link>
            </div>
        </form>
    );
}
