import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="">
            <div className="">
                <Outlet />
            </div>
        </div>
    );
}
