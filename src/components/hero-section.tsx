import { ArrowRightIcon, BookOpenIcon, RocketIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

import { CircleDecorator } from "@/components/circle-decorator";
import {
  HorizontalLineDecorator,
  VerticalLineDecorator,
} from "@/components/line-decorator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="px-8 py-24">
      <div className="mx-auto max-w-screen-2xl">
        <div className="py-6 lg:py-8">
            <div className="relative isolate">
            <HorizontalLineDecorator
              lineOffset={150}
              className="absolute -top-px"
            />
            <CircleDecorator className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 delay-500" />
            <VerticalLineDecorator
              lineOffset={150}
              className="absolute -left-px"
            />
              
              {/* Main Content */}
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                {/* Left Column - Text Content */}
                <div className="flex flex-col gap-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                      </span>
                      Latest DevOps Tools & Best Practices
                    </div>
                    <div>
                      <h1 className="from-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:leading-[1.2]">
                        Master DevOps Tools Installation & Configuration
              </h1>
                      <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-xl">
                        Your comprehensive guide to setting up a professional DevOps environment with step-by-step tutorials and best practices.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="gap-2">
                        <Link href="/docs">
                          Get Started
                          <ArrowRightIcon className="size-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link href="/docs/installation" className="gap-2">
                          <TerminalIcon className="size-4" />
                          View Installation Guides
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Docker", "Kubernetes", "Jenkins", "Terraform",
                      "Ansible", "Git", "Prometheus", "ELK Stack"
                    ].map((tool) => (
                      <div
                        key={tool}
                        className="rounded-full bg-background px-3 py-1 text-sm border"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Feature Cards */}
                <div className="relative">
                  <div className="grid gap-6">
                    {[
                      {
                        icon: RocketIcon,
                        title: "Quick Start Guides",
                        description: "Get up and running quickly with our streamlined installation processes",
                      },
                      {
                        icon: TerminalIcon,
                        title: "CLI Commands",
                        description: "Copy-paste ready commands for smooth tool installation and setup",
                      },
                      {
                        icon: BookOpenIcon,
                        title: "Detailed Documentation",
                        description: "In-depth configuration guides with best practices and troubleshooting",
                      },
                    ].map((feature) => (
                      <Card key={feature.title} className="relative overflow-hidden border bg-card p-6 transition-colors hover:bg-muted/50">
                        <div className="flex items-start gap-4">
                          <div className="rounded-lg bg-primary/10 p-2">
                            <feature.icon className="size-5 text-primary" />
            </div>
                          <div className="space-y-1">
                            <h3 className="font-semibold">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

            <HorizontalLineDecorator
              lineOffset={150}
              className="absolute bottom-0 delay-200"
            />
            <VerticalLineDecorator
              lineOffset={150}
              className="absolute -right-px"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
