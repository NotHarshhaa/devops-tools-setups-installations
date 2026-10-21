import { ArrowRightIcon, GithubIcon, StarIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card px-6 py-14 text-center shadow-xl sm:px-12">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_65%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px]"
          />

          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Set up your next tool in minutes, not hours
            </h2>
            <p className="text-lg text-muted-foreground">
              Join engineers who use these guides to keep their toolchains
              reproducible, secure and documented. Free and open source, forever.
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="group gap-2 shadow-lg shadow-primary/20">
                <Link href="/docs/installation">
                  Browse installation guides
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon className="size-4" />
                  <StarIcon className="size-4" />
                  Star on GitHub
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Missing a tool?{" "}
              <Link
                href={`${siteConfig.links.github}/issues/new`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Open an issue
              </Link>{" "}
              and help us write the guide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
