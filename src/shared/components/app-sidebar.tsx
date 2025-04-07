import * as React from "react";
import { Asterisk, LifeBuoy, Send } from "lucide-react";
import { NavUser } from "@/shared/components/nav-user";
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
        name: "Castillos",
        email: "hey@banderaweb.com",
        avatar: "@/app/assets/images/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Getting Started",
            url: "#",
            items: [
                {
                    title: "Installation",
                    url: "#",
                    icon: Send,
                    isActive: true,
                },
                {
                    title: "Project Structure",
                    url: "#",
                    icon: Send,
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Support",
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
                                <span className="truncate font-medium">
                                    BanderaWeb
                                </span>
                                <span className="truncate text-xs">
                                    Enterprise
                                </span>
                            </div>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {data.navMain.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={item.isActive}
                                        >
                                            <a href={item.url}>
                                                {item.icon && <item.icon />}
                                                {item.title}
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
