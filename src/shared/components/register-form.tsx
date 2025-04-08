import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { PasswordInput } from "@/shared/ui/password-input";
import { Link } from "react-router-dom";

export function RegisterForm({ className, ...props }: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Crear una cuenta</h1>
                <p className="text-muted-foreground text-sm">
                    Ingresa tus datos para crear una nueva cuenta.
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" type="text" placeholder="Juan Pérez" required/>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="juan@ejemplo.com" required/>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="username">Usuario</Label>
                    <Input id="username" type="text" placeholder="juanperez" required/>
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="password">Contraseña</Label>
                    <PasswordInput id="password" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                    <PasswordInput id="confirmPassword" required />
                </div>
                <Button type="submit" className="w-full">
                    Registrarse
                </Button>
            </div>
            <div className="text-center text-sm">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/auth/login" className="underline underline-offset-4">
                    Iniciar sesión
                </Link>
            </div>
        </form>
    );
} 