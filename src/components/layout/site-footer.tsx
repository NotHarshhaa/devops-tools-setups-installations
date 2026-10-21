import {
  ExternalLinkIcon,
  GithubIcon,
  HeartIcon,
  LinkedinIcon,
  MailIcon,
  SparklesIcon,
  TerminalIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

import { CookiesDialog } from "@/components/cookies-dialog";
import { PrivacyDialog } from "@/components/privacy-dialog";
import { TermsDialog } from "@/components/terms-dialog";
import { siteConfig } from "@/config/site";
import { categories } from "@/config/tools";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  interface FooterLink {
    name: string;
    href: string;
    external?: boolean;
  }

  const footerLinks: Record<string, FooterLink[]> = {
    "Documentation": [
      { name: "Introduction", href: "/docs" },
      { name: "Installation hub", href: "/docs/installation" },
      { name: "Best practices", href: "/docs#best-practices" },
      { name: "Troubleshooting", href: "/docs#getting-help" },
      { name: "Contributing", href: "/docs/contributing" },
    ],
    "Categories": categories.map((category) => ({
      name: category.title,
      href: category.href,
    })),
    "Resources": [
      {
        name: "GitHub repository",
        href: siteConfig.links.github,
        external: true,
      },
      {
        name: "Report an issue",
        href: `${siteConfig.links.github}/issues/new`,
        external: true,
      },
      {
        name: "Telegram community",
        href: siteConfig.links.telegram,
        external: true,
      },
      {
        name: "All guides",
        href: "/docs/installation",
      },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: siteConfig.links.github,
      icon: GithubIcon,
    },
    { name: "Twitter", href: siteConfig.links.twitter, icon: TwitterIcon },
    { name: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedinIcon },
    { name: "Email", href: "mailto:prodevopsguytech@gmail.com", icon: MailIcon },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="group flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-105">
                <TerminalIcon className="size-5" />
              </span>
              <span>
                <span className="block text-lg font-bold tracking-tight">
                  {siteConfig.brand}
                </span>
                <span className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <SparklesIcon className="size-3" />
                  Professional setup guides
                </span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                {category}
              </h2>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-1 rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                      {link.external && (
                        <ExternalLinkIcon className="size-3 opacity-60" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border/50 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="flex items-center gap-2 text-center text-sm text-muted-foreground sm:text-left">
              <span>© {currentYear} {siteConfig.brand}. Made with</span>
              <HeartIcon className="size-4 fill-current text-red-500" />
              <span>for the DevOps community.</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground sm:justify-end">
              <PrivacyDialog>
                <button className="cursor-pointer rounded-md py-1 transition-colors hover:text-foreground">
                  Privacy Policy
                </button>
              </PrivacyDialog>
              <TermsDialog>
                <button className="cursor-pointer rounded-md py-1 transition-colors hover:text-foreground">
                  Terms of Service
                </button>
              </TermsDialog>
              <CookiesDialog>
                <button className="cursor-pointer rounded-md py-1 transition-colors hover:text-foreground">
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
