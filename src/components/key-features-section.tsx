import {
  ArrowRightIcon,
  LifeBuoyIcon,
  LockIcon,
  type LucideIcon,
  ShieldCheckIcon,
  TerminalIcon,
} from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  accent: string;
}

const FEATURES: Feature[] = [
  {
    icon: TerminalIcon,
    title: "Copy-paste commands",
    description:
      "Every guide is written as a runnable sequence, with the exact flags and file paths you need — no guesswork between steps.",
    href: "/docs/containers/docker",
    linkLabel: "See the Docker guide",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: ShieldCheckIcon,
    title: "Production-ready configs",
    description:
      "Configuration templates are hardened and commented, so the file you copy works in a real environment instead of only in a tutorial.",
    href: "/docs/infrastructure/terraform",
    linkLabel: "See the Terraform guide",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    icon: LifeBuoyIcon,
    title: "Troubleshooting included",
    description:
      "The errors you are most likely to hit are documented next to the step that causes them, together with the fix.",
    href: "/docs",
    linkLabel: "Browse the guides",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: LockIcon,
    title: "Security by default",
    description:
      "Hardening tips for credentials, file permissions and network exposure are part of each setup, not an afterthought.",
    href: "/docs/infrastructure/vault",
    linkLabel: "See the Vault guide",
    accent: "from-fuchsia-500 to-purple-500",
  },
];

export function KeyFeaturesSection() {
  return (
    <section className="border-y bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col gap-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-sm font-medium">
            <ShieldCheckIcon className="size-4 text-primary" />
            Why these guides
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Written for the machine in front of you
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            No placeholders, no half-finished examples — just the steps, commands
            and verification checks that get you to a working setup.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col gap-4 rounded-xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.accent} text-white shadow-sm`}
                >
                  <feature.icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              <Link
                href={feature.href}
                className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-medium text-primary"
              >
                {feature.linkLabel}
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
