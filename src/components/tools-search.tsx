"use client";

import { ArrowRightIcon, SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  type CategorySlug,
  categories,
  categoryBySlug,
} from "@/config/tools";

export interface SearchableTool {
  slug: string;
  name: string;
  description: string;
  category: CategorySlug;
  tags: string[];
}

interface ToolsSearchProps {
  tools: SearchableTool[];
}

export function ToolsSearch({ tools }: ToolsSearchProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategorySlug | "all">("all");
  const [topic, setTopic] = useState<string | null>(null);

  const topics = useMemo(() => {
    const counts = new Map<string, number>();
    for (const tool of tools) {
      for (const tag of tool.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }

    return [...counts.entries()]
      .filter(([, count]) => count >= 3)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 8)
      .map(([tag]) => tag);
  }, [tools]);

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        tool.name.toLowerCase().includes(normalizedQuery) ||
        tool.description.toLowerCase().includes(normalizedQuery) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      const matchesCategory = category === "all" || tool.category === category;
      const matchesTopic = topic === null || tool.tags.includes(topic);

      return matchesQuery && matchesCategory && matchesTopic;
    });
  }, [tools, query, category, topic]);

  const categoryCounts = useMemo(() => {
    const counts = new Map<CategorySlug, number>();
    for (const tool of tools) {
      counts.set(tool.category, (counts.get(tool.category) ?? 0) + 1);
    }
    return counts;
  }, [tools]);

  const hasActiveFilters =
    query.trim().length > 0 || category !== "all" || topic !== null;

  const clearFilters = () => {
    setQuery("");
    setCategory("all");
    setTopic(null);
  };

  return (
    <section className="py-16 md:py-24" id="tools">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col gap-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-sm font-medium">
            <SearchIcon className="size-4 text-primary" />
            Find your tool
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Search every guide in one place
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Filter by category or topic and jump straight to the setup guide you
            need.
          </p>
        </div>

        {/* Search field */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Docker, Terraform, kubectl, monitoring…"
              aria-label="Search guides"
              className="h-12 pl-11 pr-11 text-base"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <XIcon className="size-4" />
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button
              type="button"
              size="sm"
              variant={category === "all" ? "default" : "outline"}
              onClick={() => setCategory("all")}
              className="rounded-full"
            >
              All
              <span className="ml-1 text-xs opacity-70">{tools.length}</span>
            </Button>
            {categories.map((item) => (
              <Button
                key={item.slug}
                type="button"
                size="sm"
                variant={category === item.slug ? "default" : "outline"}
                onClick={() => setCategory(item.slug)}
                className="rounded-full"
              >
                {item.title}
                <span className="ml-1 text-xs opacity-70">
                  {categoryCounts.get(item.slug) ?? 0}
                </span>
              </Button>
            ))}
          </div>

          {/* Topic filters */}
          {topics.length > 0 && (
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {topics.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setTopic(topic === tag ? null : tag)}
                  aria-pressed={topic === tag}
                  className={`rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${
                    topic === tag
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/70 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {filteredTools.length} guide{filteredTools.length === 1 ? "" : "s"}
            {hasActiveFilters ? " matching your filters" : " available"}
          </p>
          {hasActiveFilters && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <XIcon className="mr-2 size-4" />
              Clear filters
            </Button>
          )}
        </div>

        {filteredTools.length > 0 ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => {
              const meta = categoryBySlug[tool.category];

              return (
                <Link
                  key={tool.slug}
                  href={`/docs/${tool.slug}`}
                  className="group flex flex-col gap-3 rounded-xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex size-8 items-center justify-center rounded-lg bg-gradient-to-br ${meta.accent} text-white`}
                      >
                        <meta.icon className="size-4" />
                      </span>
                      <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
                        {tool.name}
                      </h3>
                    </div>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {meta.title}
                    </Badge>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex flex-wrap gap-1">
                      {tool.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border/60 px-1.5 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRightIcon className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 rounded-xl border border-dashed border-border bg-muted/30 px-6 py-16 text-center">
            <p className="text-lg font-medium">No guides match your search</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Try a different keyword, pick another category, or browse the full
              list of installation guides.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button type="button" variant="outline" onClick={clearFilters}>
                <XIcon className="mr-2 size-4" />
                Clear filters
              </Button>
              <Button asChild>
                <Link href="/docs/installation">Browse all guides</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
