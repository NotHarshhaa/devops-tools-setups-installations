import {
  BookOpenIcon,
  BoxesIcon,
  CloudIcon,
  HeartIcon,
  type LucideIcon,
  TerminalIcon,
} from "lucide-react";

interface StatsSectionProps {
  guides: number;
  categories: number;
}

export function StatsSection({ guides, categories }: StatsSectionProps) {
  const stats: { icon: LucideIcon; value: string; label: string; description: string }[] = [
    {
      icon: BookOpenIcon,
      value: `${guides}+`,
      label: "Installation Guides",
      description: "One guide per tool, start to finish",
    },
    {
      icon: BoxesIcon,
      value: `${categories}`,
      label: "Tool Categories",
      description: "Containers, CI/CD, cloud, infra and more",
    },
    {
      icon: TerminalIcon,
      value: "Copy-paste",
      label: "Ready Commands",
      description: "Verified commands you can run as-is",
    },
    {
      icon: HeartIcon,
      value: "MIT",
      label: "Open Source",
      description: "Free for personal and commercial use",
    },
  ];

  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 md:px-8 md:py-14">
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="group flex flex-col items-center gap-3 text-center">
              <div className="flex size-11 items-center justify-center rounded-xl border border-border/70 bg-background text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="size-5" />
              </div>
              <div className="space-y-1">
                <dd className="text-2xl font-bold tracking-tight sm:text-3xl">{stat.value}</dd>
                <dt className="text-sm font-medium">{stat.label}</dt>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </dl>
        <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <CloudIcon className="size-4 text-primary" />
          Works on Linux, macOS and Windows · Updated continuously by the community
        </p>
      </div>
    </section>
  );
}
