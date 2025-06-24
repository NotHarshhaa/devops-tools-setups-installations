import { GithubIcon, LinkedinIcon, Send } from "lucide-react";
import Link from "next/link";

import { PrivacyDialog } from "@/components/privacy-dialog";
import { TermsDialog } from "@/components/terms-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-dashed bg-card/50">
      <div className="mx-auto max-w-screen-2xl space-y-8 px-4 py-12 md:px-8">
        {/* Main Footer Content */}
        <div className="container grid gap-8 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm text-muted-foreground">
              Your comprehensive guide to DevOps tools installation and configuration. Making complex setups simple and accessible.
            </p>
          </div>

          {/* Quick Links & Resources - Side by side on mobile, separate on desktop */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="grid gap-2 text-sm">
                <li>
                  <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/docs/installation" className="text-muted-foreground hover:text-foreground transition-colors">
                    Installation Guides
                  </Link>
                </li>
                <li>
                  <Link href="/docs/components" className="text-muted-foreground hover:text-foreground transition-colors">
                    Components
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="grid gap-2 text-sm">
                <li>
          <a
                    href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
          >
                    GitHub Repository
                  </a>
                </li>
                <li>
          <a
            href={siteConfig.links.githubShadcnUi}
            target="_blank"
            rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    UI Components
                  </a>
                </li>
                <li>
                  <Link href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Follow us on social media for the latest updates and tips.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <GithubIcon className="size-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href={siteConfig.links.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <Send className="size-4" />
                  <span className="sr-only">Telegram</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  <LinkedinIcon className="size-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="container relative">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/20 to-transparent rounded-lg" />
          
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between p-6 border border-dashed border-muted/30 rounded-lg bg-background/50 backdrop-blur-sm">
            {/* Copyright section with enhanced styling */}
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground font-medium">
                © {new Date().getFullYear()} DevOps Tools Setup & Installations
              </p>
              <p className="text-xs text-muted-foreground/70">
                Built with ❤️ by{" "}
                <a
                  href={siteConfig.links.githubProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:from-primary/80 hover:to-primary/40 transition-all duration-300 hover:scale-105 inline-block"
                >
                  H A R S H H A A
                </a>
              </p>
            </div>

            {/* Legal links with enhanced styling */}
            <div className="flex gap-6 text-sm">
              <PrivacyDialog>
                <button className="group relative px-3 py-2 rounded-md hover:bg-muted/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 text-muted-foreground group-hover:text-foreground transition-colors">
                    Privacy Policy
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                </button>
              </PrivacyDialog>
              <TermsDialog>
                <button className="group relative px-3 py-2 rounded-md hover:bg-muted/50 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 text-muted-foreground group-hover:text-foreground transition-colors">
                    Terms of Service
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                </button>
              </TermsDialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
