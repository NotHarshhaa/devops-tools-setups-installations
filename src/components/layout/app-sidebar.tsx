"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";

export function AppSidebar({
  className,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const activeItem = docsConfig.sidebarNav
    .map((item) => item.items)
    .flat()
    .findLast((item) => pathname.startsWith(item.href));

  return (
    <Sidebar
      className={cn("sticky top-14 z-0 h-[calc(100vh-3.5rem)] border-x border-dashed", className)}
      {...props}
    >
      <SidebarContent className="h-full overflow-y-auto">
        {docsConfig.sidebarNav.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem key={item.title}>
                  {item.items?.length && (
                    <SidebarMenuSub className="border-none pl-0">
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                            isActive={activeItem?.href === item.href}
                            asChild
                          >
                            <Link href={item.href}>
                              {item.title}
                              {"label" in item && (
                                <SidebarMenuBadge className="bg-[oklch(0.9_0.2334_128.99)] px-1.5 text-[0.625rem] text-[oklch(0.2_0.2334_128.99)]">
                                  {item.label as string}
                                </SidebarMenuBadge>
                              )}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
