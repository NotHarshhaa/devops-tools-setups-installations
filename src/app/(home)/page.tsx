import { docs } from "@/.velite";
import { CategoriesSection } from "@/components/categories-section";
import { CtaSection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { KeyFeaturesSection } from "@/components/key-features-section";
import { QuickStartSection } from "@/components/quick-start-section";
import { StatsSection } from "@/components/stats-section";
import { type SearchableTool, ToolsSearch } from "@/components/tools-search";
import { tools } from "@/config/tools";

export default function Home() {
  const publishedGuides = new Set(
    docs
      .map((doc) => doc.slugAsParams)
      .filter((slug) => slug.includes("/")),
  );

  const searchableTools: SearchableTool[] = tools
    .filter((tool) => publishedGuides.has(tool.slug))
    .map((tool) => ({
      slug: tool.slug,
      name: tool.name,
      description: tool.description,
      category: tool.category,
      tags: tool.tags,
    }));

  const categoryCount = new Set(
    searchableTools.map((tool) => tool.category),
  ).size;

  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection guides={searchableTools.length} categories={categoryCount} />
      <CategoriesSection />
      <QuickStartSection />
      <KeyFeaturesSection />
      <ToolsSearch tools={searchableTools} />
      <CtaSection />
    </div>
  );
}
