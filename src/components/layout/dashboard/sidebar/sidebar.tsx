"use client";

import { LayoutDashboard, MapPin, Home, Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

// Menu items with admin routes
const items = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
    color: "text-blue-600",
  },
  {
    label: "Provinces",
    icon: Globe,
    href: "/admin/states",
    color: "text-blue-600",
  },
  {
    label: "Cities",
    icon: MapPin,
    href: "/admin/cities",
    color: "text-blue-600",
  },
  {
    label: "Rentals",
    icon: Home,
    href: "/admin/rentals",
    color: "text-blue-600",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    className={
                      pathname === item.href ? "bg-blue-50 text-blue-700" : ""
                    }
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon
                        className={
                          pathname === item.href
                            ? "text-blue-600"
                            : "text-gray-400"
                        }
                      />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
