export const docsConfig = {
  mainNav: [
    {
      title: "Introduction",
      href: "/docs",
    },
    {
      title: "All Categories",
      href: "/docs/installation",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Contributing",
          href: "/docs/contributing",
          items: [],
        },
      ],
    },
    {
      title: "Containers",
      items: [
        {
          title: "Docker",
          href: "/docs/containers/docker",
          items: [],
        },
        {
          title: "Kubernetes",
          href: "/docs/containers/kubernetes",
          items: [],
        },
        {
          title: "Helm",
          href: "/docs/containers/helm",
          items: [],
        },
        {
          title: "Istio",
          href: "/docs/containers/istio",
          items: [],
        },
        {
          title: "Minikube",
          href: "/docs/containers/minikube",
          items: [],
        },
        {
          title: "OpenShift",
          href: "/docs/containers/openshift",
          items: [],
        },
      ],
    },
    {
      title: "Cloud",
      items: [
        {
          title: "AWS CLI",
          href: "/docs/cloud/aws-cli",
          items: [],
        },
        {
          title: "Google Cloud CLI",
          href: "/docs/cloud/gcloud-cli",
          items: [],
        },
        {
          title: "Azure CLI",
          href: "/docs/cloud/azure-cli",
          items: [],
        },
      ],
    },
    {
      title: "Infrastructure",
      items: [
        {
          title: "Terraform",
          href: "/docs/infrastructure/terraform",
        },
        {
          title: "Ansible",
          href: "/docs/infrastructure/ansible",
        },
        {
          title: "Hashicorp Vault",
          href: "/docs/infrastructure/vault",
        },
        {
          title: "Hashicorp Consul",
          href: "/docs/infrastructure/consul",
        },
        {
          title: "Vagrant",
          href: "/docs/infrastructure/vagrant",
        },
        {
          title: "Hashicorp Packer",
          href: "/docs/infrastructure/packer",
        },  
      ],
    },
    {
      title: "Version Control",
      items: [
        {
          title: "Git",
          href: "/docs/version-control/git",
        },
        {
          title: "GitHub",
          href: "/docs/version-control/github-cli",
        },
        {
          title: "GitLab",
          href: "/docs/version-control/gitlab-cli",
        },
      ],
    },
    {
      title: "Monitoring",
      items: [
        {
          title: "Prometheus",
          href: "/docs/monitoring/prometheus",
        },
        {
          title: "Grafana",
          href: "/docs/monitoring/grafana",
        },
        {
          title: "Nagios",
          href: "/docs/monitoring/nagios",
        },
        {
          title: "ELK Stack",
          href: "/docs/monitoring/elk-stack",
        },
      ],
    },
    {
      title: "CI/CD",
      items: [
        {
          title: "Jenkins",
          href: "/docs/ci-cd/jenkins",
        },
        {
          title: "GitLab CI/CD",
          href: "/docs/ci-cd/gitlab-ci",
        },
        {
          title: "GitHub Actions",
          href: "/docs/ci-cd/github-actions",
        },
      ],
    },
  ],
} as const;
