"use client";

import { useState, useMemo } from "react";
import { SearchIcon, FilterIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface Tool {
  name: string;
  category: string;
  description: string;
  tags: string[];
}

const tools: Tool[] = [
  { name: "Docker", category: "Containers", description: "Container platform for building, shipping, and running applications", tags: ["containers", "deployment", "microservices"] },
  { name: "Kubernetes", category: "Containers", description: "Container orchestration platform for automating deployment", tags: ["containers", "orchestration", "scaling"] },
  { name: "Jenkins", category: "CI/CD", description: "Automation server for building, testing, and deploying software", tags: ["automation", "pipeline", "integration"] },
  { name: "Terraform", category: "Infrastructure", description: "Infrastructure as code tool for building, changing, and versioning infrastructure", tags: ["iac", "cloud", "provisioning"] },
  { name: "Ansible", category: "Infrastructure", description: "Automation tool for configuration management and application deployment", tags: ["automation", "configuration", "orchestration"] },
  { name: "Git", category: "Version Control", description: "Distributed version control system for tracking changes in source code", tags: ["version-control", "collaboration", "history"] },
  { name: "Prometheus", category: "Monitoring", description: "Open-source monitoring and alerting toolkit", tags: ["monitoring", "metrics", "alerting"] },
  { name: "Grafana", category: "Monitoring", description: "Open-source analytics and visualization platform", tags: ["visualization", "dashboards", "analytics"] },
  { name: "ELK Stack", category: "Logging", description: "Elasticsearch, Logstash, and Kibana for log management", tags: ["logging", "search", "analytics"] },
  { name: "Helm", category: "Containers", description: "Package manager for Kubernetes", tags: ["kubernetes", "packaging", "deployment"] },
  { name: "Istio", category: "Containers", description: "Service mesh for microservices", tags: ["microservices", "networking", "security"] },
  { name: "Vault", category: "Security", description: "Secret management and encryption tool", tags: ["secrets", "encryption", "security"] },
];

const categories = ["All", "Containers", "CI/CD", "Infrastructure", "Version Control", "Monitoring", "Logging", "Security"];

export function ToolsSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => tool.tags.includes(tag));
      
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tools.forEach(tool => tool.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTags([]);
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-screen-2xl px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Find the Right DevOps Tool
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Search and filter through our comprehensive collection of DevOps tools and installation guides
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 mb-8">
          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for tools, commands, or concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 focus:border-primary"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Tag Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "secondary"}
                className={`cursor-pointer hover:opacity-80 transition-opacity ${
                  selectedTags.includes(tag) ? "bg-primary" : "bg-secondary hover:bg-secondary/80"
                }`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Clear Filters */}
          {(searchQuery || selectedCategory !== "All" || selectedTags.length > 0) && (
            <div className="text-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <XIcon className="w-4 h-4 mr-2" />
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="group bg-background border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {tool.category}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {tool.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {tool.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No tools found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
