import Link from "next/link";
import { ArrowRightIcon, BookOpenIcon, RocketIcon, TerminalIcon, ShieldIcon } from "lucide-react";

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
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-accent/25 rounded-full animate-pulse delay-2000"></div>
      </div>
      
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
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-4 py-1.5 text-sm font-medium border border-green-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                      </span>
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Latest DevOps Tools & Best Practices
                      </span>
                    </div>
                    <div>
                      <h1 className="from-foreground via-primary to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:leading-[1.1]">
                        Master DevOps Tools Installation & Configuration
                      </h1>
                      <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
                        Your comprehensive guide to setting up a professional DevOps environment with step-by-step tutorials, best practices, and production-ready configurations.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <Link href="/docs">
                          Get Started
                          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild className="border-2 hover:bg-primary/5 transition-all duration-300">
                        <Link href="/docs/installation" className="gap-2">
                          <TerminalIcon className="size-4" />
                          View Installation Guides
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Enhanced Feature Pills */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "Docker", color: "from-blue-500 to-cyan-500" },
                      { name: "Kubernetes", color: "from-blue-600 to-indigo-600" },
                      { name: "Jenkins", color: "from-red-500 to-pink-500" },
                      { name: "Terraform", color: "from-purple-500 to-violet-500" },
                      { name: "Ansible", color: "from-red-600 to-orange-600" },
                      { name: "Git", color: "from-orange-500 to-red-500" },
                      { name: "Prometheus", color: "from-orange-600 to-red-600" },
                      { name: "ELK Stack", color: "from-green-500 to-teal-500" }
                    ].map((tool) => (
                      <div
                        key={tool.name}
                        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-background to-muted px-3 py-1.5 text-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md cursor-pointer"
                      >
                        <span className="relative z-10 font-medium">{tool.name}</span>
                        <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Enhanced Feature Cards */}
                <div className="relative">
                  <div className="grid gap-6">
                    {[
                      {
                        icon: RocketIcon,
                        title: "Quick Start Guides",
                        description: "Get up and running quickly with our streamlined installation processes",
                        gradient: "from-blue-500/10 to-cyan-500/10",
                        iconColor: "text-blue-500"
                      },
                      {
                        icon: TerminalIcon,
                        title: "CLI Commands",
                        description: "Copy-paste ready commands for smooth tool installation and setup",
                        gradient: "from-green-500/10 to-emerald-500/10",
                        iconColor: "text-green-500"
                      },
                      {
                        icon: BookOpenIcon,
                        title: "Detailed Documentation",
                        description: "In-depth configuration guides with best practices and troubleshooting",
                        gradient: "from-purple-500/10 to-violet-500/10",
                        iconColor: "text-purple-500"
                      },
                      {
                        icon: ShieldIcon,
                        title: "Security Best Practices",
                        description: "Production-ready security configurations and hardening guides",
                        gradient: "from-orange-500/10 to-red-500/10",
                        iconColor: "text-orange-500"
                      }
                    ].map((feature, index) => (
                      <Card 
                        key={feature.title} 
                        className="relative overflow-hidden border bg-card p-6 transition-all duration-300 hover:bg-muted/50 hover:shadow-lg hover:scale-[1.02] group cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className={`size-5 ${feature.iconColor}`} />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
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
