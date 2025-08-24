"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDownIcon, SparklesIcon, TerminalIcon, BookOpenIcon, SettingsIcon } from "lucide-react";

import { CommandMenu } from "@/components/command-menu";
import { GithubButton } from "@/components/github-button";
import { ModeSwitcher } from "@/components/mode-switcher";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UiXLogo } from "@/components/ui-x-logo";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const activeItem = docsConfig.mainNav.findLast((item) =>
    pathname.startsWith(item.href),
  );

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced navigation with categories
  const enhancedNav = [
    {
      title: "Getting Started",
      href: "/docs",
      icon: BookOpenIcon,
      description: "Begin your DevOps journey"
    },
    {
      title: "Tools & Categories",
      href: "/docs/installation",
      icon: SettingsIcon,
      description: "Browse all DevOps tools",
      hasDropdown: true,
      dropdownItems: [
        { title: "Containers", href: "/docs/containers", icon: "🐳" },
        { title: "CI/CD", href: "/docs/ci-cd", icon: "⚡" },
        { title: "Infrastructure", href: "/docs/infrastructure", icon: "🏗️" },
        { title: "Monitoring", href: "/docs/monitoring", icon: "📊" },
        { title: "Version Control", href: "/docs/version-control", icon: "📝" },
      ]
    }
  ];

  return (
    <header className={cn(
      "sticky top-0 isolate z-50 border-b transition-all duration-500",
      isScrolled 
        ? "bg-background/95 backdrop-blur-xl border-border/40 shadow-lg shadow-black/5" 
        : "bg-background/80 backdrop-blur-md border-transparent"
    )}>
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent animate-pulse"></div>
      
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-4">
        {/* Left side - Logo and Brand */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <TerminalIcon className="size-5 text-primary-foreground" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="hidden lg:block">
              <span className="font-bold text-lg bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                DevOps Tools Hub
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <SparklesIcon className="size-3 text-primary" />
                <span className="text-xs text-muted-foreground font-medium">Professional Setup Guides</span>
              </div>
            </div>
          </Link>
          
          <SidebarTrigger className="md:hidden" />
        </div>

        {/* Center - Enhanced Navigation */}
        <nav className="hidden items-center gap-1 text-sm lg:flex">
          {enhancedNav.map((item) => (
            <div key={item.title} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-300 group-hover:bg-muted/50 relative overflow-hidden",
                  activeItem?.href === item.href
                    ? "text-foreground font-medium bg-primary/10 border border-primary/20"
                    : "text-foreground/70 hover:text-foreground"
                )}
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <item.icon className="size-4" />
                <span>{item.title}</span>
                {item.hasDropdown && (
                  <ChevronDownIcon className={cn(
                    "size-3 transition-transform duration-200",
                    activeDropdown === item.title ? "rotate-180" : ""
                  )} />
                )}
                
                {/* Active indicator */}
                {activeItem?.href === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.title && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border/40 rounded-xl shadow-xl backdrop-blur-xl z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    <div className="px-3 py-2 border-b border-border/20 mb-2">
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 group/item"
                        >
                          <span className="text-lg">{dropdownItem.icon}</span>
                          <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                            {dropdownItem.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side - Actions */}
        <div className="flex flex-1 items-center gap-4 sm:flex-none">
          <ModeSwitcher className="hidden lg:inline-flex" />
          <CommandMenu />
          <div className="flex items-center gap-0.5">
            <GithubButton />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
    </header>
  );
}
