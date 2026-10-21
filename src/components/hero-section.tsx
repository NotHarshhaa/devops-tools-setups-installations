import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircle2Icon,
  CopyIcon,
  TerminalIcon,
} from "lucide-react";
import Link from "next/link";

import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const QUICK_START_COMMANDS = [
  {
    label: "Install Docker",
    command: "curl -fsSL https://get.docker.com | sh",
  },
  {
    label: "Start the daemon",
    command: "sudo systemctl enable --now docker",
  },
  {
    label: "Verify the setup",
    command: "docker run hello-world",
  },
];

const HIGHLIGHTS = [
  "Step-by-step, copy-paste ready commands",
  "Production-ready configuration templates",
  "Troubleshooting for the errors you will hit",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Background: grid + glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808014_1px,transparent_1px),linear-gradient(to_bottom,#80808014_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_62%)]"
      />

      <div className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div className="flex flex-col gap-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-foreground/90">
                Freshly updated · {siteConfig.name}
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-bold tracking-tighter sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
                Install and configure every{" "}
                <span className="from-foreground via-primary to-muted-foreground bg-gradient-to-r bg-clip-text text-transparent">
                  DevOps tool
                </span>{" "}
                without the guesswork
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                {siteConfig.description} Every guide is written for real
                machines, with the exact commands, config files and verification
                steps you need to go from zero to a working setup.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="group gap-2 shadow-lg shadow-primary/20">
                <Link href="/docs/installation">
                  Browse all guides
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href="/docs">
                  <BookOpenIcon className="size-4" />
                  Start learning
                </Link>
              </Button>
            </div>

            <ul className="grid gap-2.5 sm:grid-cols-1">
              {HIGHLIGHTS.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2Icon className="size-4 shrink-0 text-emerald-500" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal preview */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)] blur-xl"
            />
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/80 shadow-2xl shadow-black/10 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3 border-b border-border/70 bg-muted/50 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-3 rounded-full bg-red-400/80" />
                  <span className="size-3 rounded-full bg-amber-400/80" />
                  <span className="size-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <TerminalIcon className="size-3.5" />
                  quick-start.sh
                </div>
              </div>

              <div className="space-y-4 p-4 font-mono text-[13px] leading-relaxed sm:p-5">
                {QUICK_START_COMMANDS.map((item) => (
                  <div key={item.label} className="group/cmd relative">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-muted-foreground">
                        <span className="mr-2 text-primary">$</span>
                        {item.label}
                      </span>
                      <CopyButton
                        value={item.command}
                        variant="ghost"
                        className="size-6 opacity-0 transition-opacity focus-visible:opacity-100 group-hover/cmd:opacity-100"
                      />
                    </div>
                    <pre className="mt-1 overflow-x-auto rounded-lg bg-muted/60 px-3 py-2 text-foreground/90">
                      <code>{item.command}</code>
                    </pre>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 border-t border-border/70 bg-muted/30 px-4 py-3 text-xs text-muted-foreground">
                <CopyIcon className="size-3.5" />
                Copy any command straight into your terminal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
