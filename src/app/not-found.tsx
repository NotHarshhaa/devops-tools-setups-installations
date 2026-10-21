import { ArrowLeftIcon, CompassIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { categories } from "@/config/tools";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-screen-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <div className="flex size-14 items-center justify-center rounded-2xl border border-border/70 bg-muted/50 text-primary">
        <TerminalIcon className="size-6" />
      </div>

      <p className="mt-6 font-mono text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        This page is not in the manual
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        The guide you are looking for may have been moved or renamed. Try one
        of the categories below, or head back to the homepage.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild className="gap-2">
          <Link href="/">
            <ArrowLeftIcon className="size-4" />
            Back to homepage
          </Link>
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <Link href="/docs">
            <CompassIcon className="size-4" />
            Browse the guides
          </Link>
        </Button>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={category.href}
            className="rounded-full border border-border/70 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
