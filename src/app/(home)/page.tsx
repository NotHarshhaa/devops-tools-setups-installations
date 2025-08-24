import { HeroSection } from "@/components/hero-section";
import { KeyFeaturesSection } from "@/components/key-features-section";
import { StatsSection } from "@/components/stats-section";
import { ToolsSearch } from "@/components/tools-search";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <KeyFeaturesSection />
      <ToolsSearch />
    </div>
  );
}
