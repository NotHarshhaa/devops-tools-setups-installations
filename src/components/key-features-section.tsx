import {
  BookOpenCheckIcon,
  CommandIcon,
  ContainerIcon,
  GitBranchIcon,
  ServerIcon,
  SettingsIcon,
  ZapIcon,
  ShieldIcon,
  BarChart3Icon,
  WorkflowIcon,
} from "lucide-react";

export function KeyFeaturesSection() {
  return (
    <section className="relative bg-gradient-to-b from-card to-background border-t px-8 py-40 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-16">
          <div className="flex flex-col gap-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium border border-primary/20 mx-auto">
              <ZapIcon className="size-4 text-primary" />
              Comprehensive DevOps Solutions
            </div>
            <h2 className="from-foreground via-primary to-muted-foreground bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl">
              Everything You Need for DevOps Success
            </h2>
            <p className="text-muted-foreground leading-relaxed mx-auto max-w-3xl text-lg">
              Step-by-step installation guides and configuration tutorials for essential DevOps tools,
              helping you build a robust development and deployment pipeline with industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ContainerIcon,
                title: "Container Orchestration",
                description:
                  "Detailed guides for Docker, Kubernetes, and container management tools to help you containerize and orchestrate your applications effectively.",
                gradient: "from-blue-500/10 to-cyan-500/10",
                iconColor: "text-blue-500",
                features: ["Docker", "Kubernetes", "Helm", "Istio"]
              },
              {
                icon: GitBranchIcon,
                title: "Version Control & CI/CD",
                description:
                  "Setup instructions for Git, GitHub Actions, Jenkins, and other CI/CD tools to automate your development and deployment workflows.",
                gradient: "from-green-500/10 to-emerald-500/10",
                iconColor: "text-green-500",
                features: ["Git", "GitHub Actions", "Jenkins", "GitLab CI"]
              },
              {
                icon: ServerIcon,
                title: "Infrastructure as Code",
                description:
                  "Learn to set up and configure Terraform, Ansible, and other IaC tools to manage your infrastructure efficiently.",
                gradient: "from-purple-500/10 to-violet-500/10",
                iconColor: "text-purple-500",
                features: ["Terraform", "Ansible", "Packer", "Vagrant"]
              },
              {
                icon: CommandIcon,
                title: "CLI Tools & Utilities",
                description:
                  "Installation guides for essential command-line tools and utilities that enhance your development workflow.",
                gradient: "from-orange-500/10 to-red-500/10",
                iconColor: "text-orange-500",
                features: ["AWS CLI", "Azure CLI", "GCloud CLI", "kubectl"]
              },
              {
                icon: BarChart3Icon,
                title: "Monitoring & Logging",
                description:
                  "Configure monitoring and logging tools like Prometheus, Grafana, and ELK stack to gain insights into your applications.",
                gradient: "from-indigo-500/10 to-blue-500/10",
                iconColor: "text-indigo-500",
                features: ["Prometheus", "Grafana", "ELK Stack", "Nagios"]
              },
              {
                icon: BookOpenCheckIcon,
                title: "Best Practices",
                description:
                  "Comprehensive documentation and best practices for tool configuration, security, and optimization in your DevOps journey.",
                gradient: "from-teal-500/10 to-green-500/10",
                iconColor: "text-teal-500",
                features: ["Security", "Performance", "Scalability", "Reliability"]
              },
            ].map(({ icon: Icon, title, description, gradient, iconColor, features }, index) => (
              <div 
                key={title} 
                className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:scale-[1.02] cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 grid gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg bg-gradient-to-br ${gradient} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`size-5 ${iconColor}`} />
                    </div>
                    <h5 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                      {title}
                    </h5>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                  
                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {features.map((feature) => (
                      <span 
                        key={feature}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted/50 text-muted-foreground border border-border group-hover:border-primary/30 transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
          
          {/* Call to action section */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 border border-primary/20">
              <WorkflowIcon className="size-5 text-primary" />
              <span className="text-sm font-medium text-primary">Ready to get started?</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive guides and start building your professional DevOps environment today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
