import { ArrowRightIcon, BoxesIcon } from "lucide-react";
import Link from "next/link";

import { categories, getToolsByCategory } from "@/config/tools";

export function CategoriesSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_55%)]"
      />

      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col gap-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-sm font-medium">
            <BoxesIcon className="size-4 text-primary" />
            Browse by category
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Every tool you need, organised by category
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Pick a category and follow the setup path from a clean machine to a
            production-ready configuration.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const categoryTools = getToolsByCategory(category.slug);

            return (
              <Link
                key={category.slug}
                href={category.href}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                <div
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${category.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-sm`}
                  >
                    <category.icon className="size-5" />
                  </div>
                  <span className="rounded-full border border-border/70 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {categoryTools.length} guides
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {category.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {categoryTools.map((tool) => (
                    <span
                      key={tool.slug}
                      className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground transition-colors group-hover:border-primary/30"
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Open category
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
