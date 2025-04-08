import { Asterisk } from "lucide-react";
import { LoginForm } from "@/shared/components/login-form";

export function LoginPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="flex justify-center gap-2 md:justify-start">
                <a href="#" className="flex items-center gap-2 font-medium">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Asterisk className="size-6" />
                    </div>
                    FastOLT
                </a>
            </div>
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    );
}
