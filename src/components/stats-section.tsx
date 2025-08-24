import { BookOpenIcon, CheckCircleIcon, CodeIcon, UsersIcon } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: BookOpenIcon,
      value: "50+",
      label: "Installation Guides",
      description: "Comprehensive setup tutorials"
    },
    {
      icon: CodeIcon,
      value: "200+",
      label: "CLI Commands",
      description: "Ready-to-use commands"
    },
    {
      icon: CheckCircleIcon,
      value: "100%",
      label: "Production Ready",
      description: "Tested configurations"
    },
    {
      icon: UsersIcon,
      value: "24/7",
      label: "Always Available",
      description: "Access anytime, anywhere"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="relative mx-auto max-w-screen-2xl px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by DevOps Engineers Worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive guides help teams deploy and manage production environments with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                {/* Animated background circle */}
                <div className="absolute inset-0 mx-auto w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Icon container */}
                <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 border border-primary/20">
            <CheckCircleIcon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Continuously Updated & Maintained
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
