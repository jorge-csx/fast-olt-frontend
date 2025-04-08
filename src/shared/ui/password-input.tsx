import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

interface PasswordInputProps extends Omit<React.ComponentProps<typeof Input>, "type"> {
    showToggle?: boolean;
}

export function PasswordInput({ 
    className, 
    showToggle = true, 
    ...props 
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="relative">
            <Input
                type={showPassword ? "text" : "password"}
                className={cn("pr-10", className)}
                {...props}
            />
            {showToggle && (
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">
                        {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                    </span>
                </Button>
            )}
        </div>
    );
} 