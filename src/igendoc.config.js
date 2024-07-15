module.exports = {
  logo: "https://utfs.io/f/c1abfabb-cc50-4007-ad7c-55b598c6d186-1zbfv.svg",
  email: "$email",
  owner: "$owner",
  repo: "$repo",
  brandName: "$brandName",
  logoUrl: "$logoUrl",
  brandColor: "$brandColor",
  homepageUrl: "$homepageUrl",
  privacyPolicyUrl: "$privacyPolicyUrl",
  callToActionName: "$callToActionName",
  callToActionUrl: "$callToActionUrl",
  contactUrl: "$contactUrl",
  infoEmail: "$infoEmail",
  supportEmail: "$supportEmail",
  careerEmail: "$careerEmail",
  socialLinks: "$socialLinks",
  menu: [
    {
      label: "Introduction",
      href: "/introduction"
    },
    {
      label: "Features",
      href: "/features"
    },
    {
      label: "Getting Started",
      children: [
        {
          label: "Prerequisites",
          href: "/getting-started/prerequisites",
        },
        {
          label: "Installation",
          href: "/getting-started/installation",
        },
        {
          label: "Configuration",
          href: "/getting-started/configuration",
        },
      ],
    },
    {
      label: "API Documentation",
      children: [
        {
          label: "Authentication",
          href: "/api-documentation/authentication",
        },
        {
          label: "Endpoints",
          href: "/api-documentation/endpoints",
        },
      ],
    },
    {
      label: "Usage",
      children: [
        {
          label: "Basic Usage",
          href: "/usage/basic-usage"
        },
        {
          label: "Advanced Usage",
          href: "/usage/advanced-usage"
        }
      ]
    },
    {
      label: "Version Control",
      children: [
        {
          label: "Versioning",
          href: "/version-control/versioning"
        },
        {
          label: "GitHub Integration",
          href: "/version-control/github-integration"
        },
        {
          label: "Branching Strategy",
          href: "/version-control/branching-strategy"
        }
      ]
    },
    {
      label: "Contributing",
      href: "/contributing",
    },
    {
      label: "License",
      href: "/license",
    },
    {
      label: "Support",
      href: "/support",
    },
  ],
};
