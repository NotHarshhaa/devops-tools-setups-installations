import {
  BookOpenCheckIcon,
  CommandIcon,
  ContainerIcon,
  GitBranchIcon,
  ServerIcon,
  SettingsIcon,
} from "lucide-react";

import { CardWithForm } from "@/components/card-demo-form";
import {
  HorizontalLineDecorator,
  VerticalLineDecorator,
} from "@/components/line-decorator";

export function KeyFeaturesSection() {
  return (
    <section className="bg-card border-t px-8 py-40 inset-shadow-sm">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-12">
          <div className="flex flex-col gap-2 text-center">
            <h4 className="from-foreground to-muted-foreground bg-gradient-to-b bg-clip-text text-3xl font-bold tracking-tighter text-balance text-transparent">
              Comprehensive DevOps Tools & Guides
            </h4>
            <p className="text-muted-foreground leading-relaxed mx-auto max-w-2xl">
              Step-by-step installation guides and configuration tutorials for essential DevOps tools,
              helping you build a robust development and deployment pipeline.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ContainerIcon,
                title: "Container Orchestration",
                description:
                  "Detailed guides for Docker, Kubernetes, and container management tools to help you containerize and orchestrate your applications effectively.",
              },
              {
                icon: GitBranchIcon,
                title: "Version Control & CI/CD",
                description:
                  "Setup instructions for Git, GitHub Actions, Jenkins, and other CI/CD tools to automate your development and deployment workflows.",
              },
              {
                icon: ServerIcon,
                title: "Infrastructure as Code",
                description:
                  "Learn to set up and configure Terraform, Ansible, and other IaC tools to manage your infrastructure efficiently.",
              },
              {
                icon: CommandIcon,
                title: "CLI Tools & Utilities",
                description:
                  "Installation guides for essential command-line tools and utilities that enhance your development workflow.",
              },
              {
                icon: SettingsIcon,
                title: "Monitoring & Logging",
                description:
                  "Configure monitoring and logging tools like Prometheus, Grafana, and ELK stack to gain insights into your applications.",
              },
              {
                icon: BookOpenCheckIcon,
                title: "Best Practices",
                description:
                  "Comprehensive documentation and best practices for tool configuration, security, and optimization in your DevOps journey.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-foreground/50 transition-colors">
                <div className="grid gap-4">
                  <h5 className="flex items-center gap-2 text-base font-semibold tracking-tight">
                    <Icon className="size-5" />
                    {title}
                  </h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
