import * as React from "react";
import {
    Asterisk,
    Bolt,
    Gauge,
    LifeBuoy,
    PcCase,
    Router,
    Search,
    Send,
    UsersRound,
} from "lucide-react";
import { NavUser } from "./nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/shared/ui/sidebar";
import { NavSecondary } from "./nav-secondary";

const data = {
    user: {
        name: "Castillo",
        email: "hey@banderaweb.com",
        avatar: "@/app/assets/images/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Comenzar",
            items: [
                {
                    title: "Dashboard",
                    url: "/app",
                    icon: Gauge,
                    isActive: true,
                },
                {
                    title: "AutoFind",
                    url: "#",
                    icon: Search,
                },
                {
                    title: "ONU",
                    url: "#",
                    icon: Router,
                },
                {
                    title: "OLT",
                    url: "#",
                    icon: PcCase,
                },
                {
                    title: "Usuarios",
                    url: "#",
                    icon: UsersRound,
                },
                {
                    title: "Configuración",
                    url: "#",
                    icon: Bolt,
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Soporte",
            url: "#",
            icon: LifeBuoy,
        },
        {
            title: "Feedback",
            url: "#",
            icon: Send,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar className=" h-[calc(100svh-var(--header-height))]!" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex items-center space-x-3 p-2">
                            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                <Asterisk className="size-6" />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">BanderaWeb</span>
                                <span className="truncate text-xs">Enterprise</span>
                            </div>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {data.navMain.map(item => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items?.map(subItem => (
                                    <SidebarMenuItem key={subItem.title}>
                                        <SidebarMenuButton asChild isActive={subItem.isActive}>
                                            <a href={subItem.url}>
                                                {subItem.icon && <subItem.icon />}
                                                {subItem.title}
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
