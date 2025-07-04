"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CommandMenu } from "@/components/command-menu";
import { GithubButton } from "@/components/github-button";
import { ModeSwitcher } from "@/components/mode-switcher";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UiXLogo } from "@/components/ui-x-logo";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  const activeItem = docsConfig.mainNav.findLast((item) =>
    pathname.startsWith(item.href),
  );

  return (
    <header className="bg-background/80 sticky top-0 isolate z-10 border-b border-dashed backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 border-x border-dashed px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <UiXLogo className="size-5" />
            <span className="hidden font-bold lg:inline-block">
              devops-tools-setup-installations
            </span>
          </Link>
          <SidebarTrigger className="md:hidden" />
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {docsConfig.mainNav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "hover:text-foreground/80 transition-colors",
                  activeItem?.href === item.href
                    ? "text-foreground"
                    : "text-foreground/60",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center gap-4 sm:flex-none">
          <ModeSwitcher className="hidden lg:inline-flex" />
          <CommandMenu />
          <div className="flex items-center gap-0.5">
            <GithubButton />
          </div>
        </div>
      </div>
    </header>
  );
}
