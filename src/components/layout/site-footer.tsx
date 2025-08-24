import { GithubIcon, HeartIcon, LinkedinIcon, MailIcon, SparklesIcon, TerminalIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

import { CookiesDialog } from "@/components/cookies-dialog";
import { PrivacyDialog } from "@/components/privacy-dialog";
import { TermsDialog } from "@/components/terms-dialog";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Documentation": [
      { name: "Getting Started", href: "/docs" },
      { name: "Installation Guides", href: "/docs/installation" },
      { name: "Best Practices", href: "/docs" },
      { name: "Troubleshooting", href: "/docs" },
    ],
    "Tools": [
      { name: "Containers", href: "/docs/containers" },
      { name: "CI/CD", href: "/docs/ci-cd" },
      { name: "Infrastructure", href: "/docs/infrastructure" },
      { name: "Monitoring", href: "/docs/monitoring" },
    ],
    "Resources": [
      { name: "GitHub Repository", href: "https://github.com/NotHarshhaa/devops-tools-setups-installations" },
      { name: "Contributing", href: "/docs/contributing" },
      { name: "Changelog", href: "/docs/changelog" },
      { name: "Support", href: "/docs/support" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/NotHarshhaa/devops-tools-setups-installations", icon: GithubIcon },
    { name: "Twitter", href: "https://x.com/NotHarshhaa", icon: TwitterIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/harshhaa-vardhan-reddy/", icon: LinkedinIcon },
    { name: "Email", href: "mailto:prodevopsguytech@gmail.com", icon: MailIcon },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section with Enhanced Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <TerminalIcon className="size-5 md:size-6 text-primary-foreground" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div>
                <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  DevOps Tools Hub
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <SparklesIcon className="size-3 text-primary" />
                  <span className="text-xs text-muted-foreground font-medium">Professional Setup Guides</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Your comprehensive guide to setting up a professional DevOps environment with step-by-step tutorials and best practices.
            </p>
            <div className="flex items-center gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110 transform p-2 rounded-lg hover:bg-muted/50"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links - Side by side on mobile */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 md:col-span-1 lg:col-span-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-3 md:space-y-4">
                <h3 className="font-semibold text-foreground text-sm md:text-base">{category}</h3>
                <ul className="space-y-1 md:space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:translate-x-1 transform inline-block py-1 px-1 -mx-1 rounded-md hover:bg-muted/50"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/40">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground text-center sm:text-left">
              <span>© {currentYear} DevOps Tools Hub. Made with</span>
              <HeartIcon className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>for the DevOps community.</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground justify-center sm:justify-end">
              <PrivacyDialog>
                <button className="hover:text-foreground transition-colors duration-200 py-1 px-2 -mx-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  Privacy Policy
                </button>
              </PrivacyDialog>
              <TermsDialog>
                <button className="hover:text-foreground transition-colors duration-200 py-1 px-2 -mx-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  Terms of Service
                </button>
              </TermsDialog>
              <CookiesDialog>
                <button className="hover:text-foreground transition-colors duration-200 py-1 px-2 -mx-2 rounded-md hover:bg-muted/50 cursor-pointer">
                  Cookie Policy
                </button>
              </CookiesDialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
