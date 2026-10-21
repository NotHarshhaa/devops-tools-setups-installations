import {
  ArrowRightIcon,
  ClipboardCheckIcon,
  RocketIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const STEPS = [
  {
    number: "01",
    icon: SearchIcon,
    title: "Pick your tool",
    description:
      "Search the library or filter by category to find the exact guide you need — containers, CI/CD, cloud, infrastructure, monitoring or version control.",
    action: { label: "Find a guide", href: "#tools" },
  },
  {
    number: "02",
    icon: ClipboardCheckIcon,
    title: "Run the commands",
    description:
      "Follow the numbered steps, copy the commands and drop in the configuration files. Every command is shown exactly as you should run it.",
    action: { label: "Browse guides", href: "/docs/installation" },
  },
  {
    number: "03",
    icon: RocketIcon,
    title: "Verify and automate",
    description:
      "Validate the installation with the included checks, then wire the tool into your pipeline so the setup survives the next release.",
    action: { label: "Start learning", href: "/docs" },
  },
];

export function QuickStartSection() {
  return (
    <section className="border-y bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col gap-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-sm font-medium">
            <RocketIcon className="size-4 text-primary" />
            How it works
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            From blank machine to working setup in three steps
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Every guide follows the same structure, so you always know where to
            look next.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.number}
              className="group relative flex flex-col gap-4 rounded-xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl border border-border/70 bg-background text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="size-5" />
                </div>
                <span className="font-mono text-3xl font-bold text-border transition-colors group-hover:text-primary/40">
                  {step.number}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>

              <Link
                href={step.action.href}
                className="mt-auto inline-flex w-fit items-center gap-1 text-sm font-medium text-primary"
              >
                {step.action.label}
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {index < STEPS.length - 1 && (
                <ArrowRightIcon
                  aria-hidden
                  className="absolute -right-3 top-1/2 hidden size-5 -translate-y-1/2 text-border lg:block"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="group gap-2">
            <Link href="/docs/installation">
              Open the installation hub
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
