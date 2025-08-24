import Link from "next/link";

import { 
  AlertCircleIcon,
  BookOpenIcon,
  BugIcon,
  CheckCircleIcon,
  CodeIcon,
  GitBranchIcon,
  GitCommitIcon,
  GitPullRequestIcon,
  GithubIcon,
  HeartIcon,
  InfoIcon,
  LightbulbIcon,
  StarIcon,
  UsersIcon
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContributingPage() {
  const contributionTypes = [
    {
      icon: BookOpenIcon,
      title: "Documentation",
      description: "Improve guides, add examples, or fix typos",
      difficulty: "Easy",
      time: "15-30 min",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CodeIcon,
      title: "Code Examples",
      description: "Add working code snippets and configurations",
      difficulty: "Medium",
      time: "1-2 hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BugIcon,
      title: "Bug Reports",
      description: "Report issues or suggest improvements",
      difficulty: "Easy",
      time: "5-15 min",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: LightbulbIcon,
      title: "Feature Ideas",
      description: "Suggest new tools or documentation sections",
      difficulty: "Easy",
      time: "10-20 min",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Fork the Repository",
      description: "Create your own copy of the project on GitHub",
      icon: GitBranchIcon,
      details: [
        "Go to the main repository",
        "Click the 'Fork' button",
        "Clone your forked repository locally"
      ]
    },
    {
      number: "02",
      title: "Create a Branch",
      description: "Make your changes in a dedicated branch",
      icon: GitBranchIcon,
      details: [
        "Create a new branch for your changes",
        "Use descriptive branch names",
        "Keep branches focused on single features"
      ]
    },
    {
      number: "03",
      title: "Make Your Changes",
      description: "Implement your improvements or additions",
      icon: GitCommitIcon,
      details: [
        "Follow the project's coding standards",
        "Write clear commit messages",
        "Test your changes thoroughly"
      ]
    },
    {
      number: "04",
      title: "Submit a Pull Request",
      description: "Request to merge your changes",
      icon: GitPullRequestIcon,
      details: [
        "Create a detailed PR description",
        "Link any related issues",
        "Request review from maintainers"
      ]
    }
  ];

  const guidelines = [
    {
      category: "Code Standards",
      items: [
        "Use clear, descriptive variable names",
        "Add comments for complex logic",
        "Follow existing code formatting",
        "Include error handling where appropriate"
      ]
    },
    {
      category: "Documentation",
      items: [
        "Write in clear, simple language",
        "Include practical examples",
        "Use consistent formatting",
        "Add screenshots for UI tools"
      ]
    },
    {
      category: "Commit Messages",
      items: [
        "Use present tense ('Add feature' not 'Added feature')",
        "Keep first line under 50 characters",
        "Describe what and why, not how",
        "Reference issues when applicable"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="relative mx-auto max-w-screen-2xl px-4 md:px-8 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium border border-primary/20 mb-6">
              <UsersIcon className="size-4 text-primary" />
              Open Source Community
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
              Contribute to DevOps Tools Hub
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto px-4">
              Help us build the most comprehensive DevOps tools documentation. Whether you&apos;re a beginner or expert, 
              there are many ways to contribute and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="https://github.com">
                  <GithubIcon className="size-5" />
                  View on GitHub
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#how-to-contribute">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contribute Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Why Contribute?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Contributing to open source projects has many benefits for both you and the community
            </p>
          </div>
          
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: UsersIcon,
                title: "Build Community",
                description: "Connect with other DevOps professionals and enthusiasts"
              },
              {
                icon: CodeIcon,
                title: "Improve Skills",
                description: "Learn new technologies and best practices"
              },
              {
                icon: StarIcon,
                title: "Gain Recognition",
                description: "Build your portfolio and professional reputation"
              },
              {
                icon: HeartIcon,
                title: "Give Back",
                description: "Help others learn and succeed in their DevOps journey"
              }
            ].map((item) => (
              <Card key={item.title} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution Types Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Ways to Contribute
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the contribution type that best fits your skills and interests
            </p>
          </div>
          
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contributionTypes.map((type) => (
              <Card key={type.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <type.icon className="size-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription className="text-sm">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 justify-center">
                    <Badge variant="secondary" className="text-xs">
                      {type.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {type.time}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Contribute Section */}
      <section id="how-to-contribute" className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              How to Contribute
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to make your first contribution
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6 md:space-y-8">
              {steps.slice(0, 2).map((step) => (
                <Card key={step.number} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{step.number}</span>
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <step.icon className="size-5 text-primary" />
                          {step.title}
                        </CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircleIcon className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="space-y-6 md:space-y-8">
              {steps.slice(2, 4).map((step) => (
                <Card key={step.number} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{step.number}</span>
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <step.icon className="size-5 text-primary" />
                          {step.title}
                        </CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircleIcon className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Contribution Guidelines
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these guidelines to ensure your contributions are accepted quickly
            </p>
          </div>
          
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            {guidelines.map((category) => (
              <Card key={category.category} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <InfoIcon className="size-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Make Your First Contribution?
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                Join our community and help make DevOps tools accessible to everyone
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="https://github.com">
                    <GithubIcon className="size-5" />
                    Start Contributing
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/docs">
                    Browse Documentation
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Questions? Join our community discussions or open an issue on GitHub
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
