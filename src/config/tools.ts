import {
  BoxesIcon,
  CloudIcon,
  ContainerIcon,
  GaugeIcon,
  GitBranchIcon,
  type LucideIcon,
  WorkflowIcon,
} from "lucide-react";

export type CategorySlug =
  | "containers"
  | "cloud"
  | "infrastructure"
  | "ci-cd"
  | "monitoring"
  | "version-control";

export interface CategoryMeta {
  slug: CategorySlug;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  accent: string;
  iconClass: string;
}

export interface ToolMeta {
  /** Matches the `slugAsParams` of the velite document. */
  slug: string;
  name: string;
  description: string;
  category: CategorySlug;
  tags: string[];
}

export const CATEGORY_ORDER: CategorySlug[] = [
  "containers",
  "cloud",
  "infrastructure",
  "ci-cd",
  "monitoring",
  "version-control",
];

export const categories: CategoryMeta[] = [
  {
    slug: "containers",
    title: "Containers",
    description:
      "Build, ship and orchestrate containerised workloads with Docker, Kubernetes, Helm, Istio, Minikube and OpenShift.",
    icon: ContainerIcon,
    href: "/docs/containers",
    accent: "from-blue-500 to-cyan-500",
    iconClass: "text-blue-500",
  },
  {
    slug: "ci-cd",
    title: "CI/CD",
    description:
      "Automate builds, tests and releases with GitHub Actions, GitLab CI and Jenkins pipelines.",
    icon: WorkflowIcon,
    href: "/docs/ci-cd",
    accent: "from-green-500 to-emerald-500",
    iconClass: "text-green-500",
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    description:
      "Provision and manage infrastructure as code with Terraform, Ansible, Vault, Consul, Vagrant and Packer.",
    icon: BoxesIcon,
    href: "/docs/infrastructure",
    accent: "from-purple-500 to-violet-500",
    iconClass: "text-purple-500",
  },
  {
    slug: "cloud",
    title: "Cloud CLIs",
    description:
      "Install and configure the AWS, Azure and Google Cloud command line tools for every provider.",
    icon: CloudIcon,
    href: "/docs/cloud",
    accent: "from-orange-500 to-amber-500",
    iconClass: "text-orange-500",
  },
  {
    slug: "monitoring",
    title: "Monitoring",
    description:
      "Observe production systems with Prometheus, Grafana, the ELK stack and Nagios.",
    icon: GaugeIcon,
    href: "/docs/monitoring",
    accent: "from-indigo-500 to-blue-500",
    iconClass: "text-indigo-500",
  },
  {
    slug: "version-control",
    title: "Version Control",
    description:
      "Set up Git and the GitHub and GitLab command line clients for a reliable source control workflow.",
    icon: GitBranchIcon,
    href: "/docs/version-control",
    accent: "from-rose-500 to-red-500",
    iconClass: "text-rose-500",
  },
];

export const categoryBySlug = Object.fromEntries(
  categories.map((category) => [category.slug, category]),
) as Record<CategorySlug, CategoryMeta>;

export const tools: ToolMeta[] = [
  {
    slug: "containers/docker",
    name: "Docker",
    description:
      "Install Docker Engine 29 from the official apt and dnf repositories, then configure the daemon, Buildx, Compose and rootless mode.",
    category: "containers",
    tags: ["containers", "docker", "runtime", "deployment"],
  },
  {
    slug: "containers/kubernetes",
    name: "Kubernetes",
    description:
      "Install Kubernetes v1.37 with kubeadm and containerd, deploy a CNI and join worker nodes to the cluster.",
    category: "containers",
    tags: ["containers", "orchestration", "scaling", "k8s"],
  },
  {
    slug: "containers/helm",
    name: "Helm",
    description:
      "Install Helm 4, verify the release signature, manage chart repositories and install charts from OCI registries.",
    category: "containers",
    tags: ["containers", "kubernetes", "packaging", "charts"],
  },
  {
    slug: "containers/istio",
    name: "Istio",
    description:
      "Install Istio 1.31 with istioctl, pick a configuration profile and enable sidecar or ambient mode.",
    category: "containers",
    tags: ["containers", "service-mesh", "networking", "security"],
  },
  {
    slug: "containers/minikube",
    name: "Minikube",
    description:
      "Install Minikube v1.39 and run a local Kubernetes cluster with the driver that suits your machine.",
    category: "containers",
    tags: ["containers", "kubernetes", "local", "development"],
  },
  {
    slug: "containers/openshift",
    name: "OpenShift",
    description:
      "Install OpenShift 4.22 with OpenShift Local (CRC) for development or the agent-based installer for production.",
    category: "containers",
    tags: ["containers", "platform", "enterprise", "kubernetes"],
  },
  {
    slug: "ci-cd/github-actions",
    name: "GitHub Actions",
    description:
      "Build CI/CD workflows with the current action versions, run GitHub-hosted or self-hosted runners and secure pipelines with OIDC.",
    category: "ci-cd",
    tags: ["ci-cd", "automation", "pipeline", "github"],
  },
  {
    slug: "ci-cd/gitlab-ci",
    name: "GitLab CI",
    description:
      "Configure GitLab 19 pipelines with rules, install GitLab Runner 19.5 and register runners with the new authentication tokens.",
    category: "ci-cd",
    tags: ["ci-cd", "automation", "pipeline", "gitlab"],
  },
  {
    slug: "ci-cd/jenkins",
    name: "Jenkins",
    description:
      "Install Jenkins 2.580 LTS on Linux, Windows, macOS, Docker and Kubernetes, then add agents and run your first pipeline.",
    category: "ci-cd",
    tags: ["ci-cd", "automation", "pipeline", "jenkins"],
  },
  {
    slug: "infrastructure/terraform",
    name: "Terraform",
    description:
      "Install Terraform 1.16, configure providers and remote backends, lock provider versions and test your stacks with terraform test.",
    category: "infrastructure",
    tags: ["iac", "cloud", "provisioning", "automation"],
  },
  {
    slug: "infrastructure/ansible",
    name: "Ansible",
    description:
      "Install Ansible 14 with ansible-core 2.21, build an inventory, write playbooks and encrypt your secrets with Ansible Vault.",
    category: "infrastructure",
    tags: ["automation", "configuration", "provisioning"],
  },
  {
    slug: "infrastructure/vault",
    name: "HashiCorp Vault",
    description:
      "Install Vault 2.2, initialise and unseal the server, enable secrets engines and configure AppRole authentication and audit logging.",
    category: "infrastructure",
    tags: ["security", "secrets", "encryption", "automation"],
  },
  {
    slug: "infrastructure/consul",
    name: "HashiCorp Consul",
    description:
      "Install Consul 2.0, run an ACL-enabled cluster with TLS, register services with health checks and configure service intentions.",
    category: "infrastructure",
    tags: ["service-discovery", "configuration", "networking"],
  },
  {
    slug: "infrastructure/vagrant",
    name: "Vagrant",
    description:
      "Install Vagrant 2.4.9, add boxes, manage VirtualBox, VMware, Hyper-V and libvirt providers and provision machines with Ansible.",
    category: "infrastructure",
    tags: ["virtualization", "development", "automation"],
  },
  {
    slug: "infrastructure/packer",
    name: "HashiCorp Packer",
    description:
      "Install Packer 1.16, build machine images for AWS, Azure and GCP from HCL2 templates and sign your builds with provenance attestations.",
    category: "infrastructure",
    tags: ["images", "automation", "provisioning"],
  },
  {
    slug: "cloud/aws-cli",
    name: "AWS CLI",
    description:
      "Install AWS CLI v2 with the signed install script, authenticate with IAM Identity Center or OIDC and automate AWS from your terminal.",
    category: "cloud",
    tags: ["cloud", "aws", "cli", "credentials"],
  },
  {
    slug: "cloud/azure-cli",
    name: "Azure CLI",
    description:
      "Install Azure CLI 2.91, sign in with device code or a managed identity and manage resources, deployments and Bicep files.",
    category: "cloud",
    tags: ["cloud", "azure", "cli", "credentials"],
  },
  {
    slug: "cloud/gcloud-cli",
    name: "Google Cloud CLI",
    description:
      "Install the Google Cloud CLI 590, authenticate with ADC or service account impersonation and automate Google Cloud with gcloud.",
    category: "cloud",
    tags: ["cloud", "gcp", "cli", "credentials"],
  },
  {
    slug: "monitoring/prometheus",
    name: "Prometheus",
    description:
      "Install Prometheus, scrape targets and build alerting rules.",
    category: "monitoring",
    tags: ["monitoring", "metrics", "alerting", "observability"],
  },
  {
    slug: "monitoring/grafana",
    name: "Grafana",
    description:
      "Connect Grafana to your metrics and build dashboards and alerts.",
    category: "monitoring",
    tags: ["monitoring", "dashboards", "visualization", "observability"],
  },
  {
    slug: "monitoring/elk-stack",
    name: "ELK Stack",
    description:
      "Deploy Elasticsearch, Logstash and Kibana for centralised log management.",
    category: "monitoring",
    tags: ["logging", "search", "analytics", "observability"],
  },
  {
    slug: "monitoring/nagios",
    name: "Nagios",
    description:
      "Install Nagios Core, configure checks and notify on host failures.",
    category: "monitoring",
    tags: ["monitoring", "alerting", "networking", "observability"],
  },
  {
    slug: "version-control/git",
    name: "Git",
    description:
      "Install Git, configure your identity and learn the branching workflow.",
    category: "version-control",
    tags: ["version-control", "collaboration", "history"],
  },
  {
    slug: "version-control/github-cli",
    name: "GitHub CLI",
    description:
      "Install the gh CLI and work with pull requests, issues and releases.",
    category: "version-control",
    tags: ["version-control", "github", "cli", "collaboration"],
  },
  {
    slug: "version-control/gitlab-cli",
    name: "GitLab CLI",
    description:
      "Install the glab CLI and manage merge requests, pipelines and projects.",
    category: "version-control",
    tags: ["version-control", "gitlab", "cli", "collaboration"],
  },
];

export const toolBySlug = Object.fromEntries(
  tools.map((tool) => [tool.slug, tool]),
) as Record<string, ToolMeta>;

export function getToolsByCategory(category: CategorySlug) {
  return tools.filter((tool) => tool.category === category);
}
