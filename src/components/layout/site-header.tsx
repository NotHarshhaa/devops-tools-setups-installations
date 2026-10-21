"use client";

import {
  BookOpenIcon,
  ChevronDownIcon,
  SparklesIcon,
  TerminalIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { CommandMenu } from "@/components/command-menu";
import { GithubButton } from "@/components/github-button";
import { ModeSwitcher } from "@/components/mode-switcher";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { siteConfig } from "@/config/site";
import { categories } from "@/config/tools";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const isCategoryActive = categories.some((category) =>
    pathname.startsWith(category.href),
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the dropdown whenever the route changes.
  useEffect(() => {
    setIsCategoriesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-border/60 bg-background/85 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-background/60 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4 px-4 md:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <SidebarTrigger className="md:hidden" />
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-105">
              <TerminalIcon className="size-5" />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-base font-bold tracking-tight">{siteConfig.brand}</span>
              <span className="hidden items-center gap-1 text-[11px] text-muted-foreground lg:flex">
                <SparklesIcon className="size-3" />
                Professional setup guides
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 text-sm lg:flex">
          <Link
            href="/docs"
            className={cn(
              "rounded-lg px-3 py-2 font-medium transition-colors",
              pathname === "/docs"
                ? "bg-primary/10 text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            Documentation
          </Link>
          <Link
            href="/docs/installation"
            className={cn(
              "rounded-lg px-3 py-2 font-medium transition-colors",
              isActive("/docs/installation")
                ? "bg-primary/10 text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            Installation
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsCategoriesOpen(true)}
            onMouseLeave={() => setIsCategoriesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsCategoriesOpen((open) => !open)}
              aria-expanded={isCategoriesOpen}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-2 font-medium transition-colors",
                isCategoriesOpen || isCategoryActive
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              Categories
              <ChevronDownIcon
                className={cn(
                  "size-3.5 transition-transform duration-200",
                  isCategoriesOpen && "rotate-180",
                )}
              />
            </button>

            {isCategoriesOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[26rem] -translate-x-1/2 pt-2">
                <div className="animate-in slide-in-from-top-2 rounded-xl border border-border/60 bg-popover p-2 shadow-xl shadow-black/5">
                  <div className="grid grid-cols-2 gap-1">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={category.href}
                        className={cn(
                          "flex items-start gap-2.5 rounded-lg p-2.5 transition-colors hover:bg-muted",
                          isActive(category.href) && "bg-muted",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-br text-white",
                            category.accent,
                          )}
                        >
                          <category.icon className="size-3.5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm font-medium">
                            {category.title}
                          </span>
                          <span className="block truncate text-xs text-muted-foreground">
                            {category.description}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-1 border-t border-border/60 pt-1">
                    <Link
                      href="/docs/contributing"
                      className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <BookOpenIcon className="size-4" />
                      Contributing guide
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ModeSwitcher className="hidden lg:inline-flex" />
          <CommandMenu />
          <GithubButton />
        </div>
      </div>
    </header>
  );
}
