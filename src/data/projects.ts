export interface WordPressProject {
  id: string;
  title: string;
  subtitle: string;
  category: "Agency & Studio" | "E-Commerce" | "Corporate & B2B" | "Portfolio & Creative";
  year: string;
  isPlaceholder: boolean;
  statusBadge: string;
  client: string;
  purpose: string;
  coverImage: string;
  previewImage?: string;
  liveUrl?: string; // Configurable: add real live site URL
  githubUrl?: string;
  tags: string[];
  features: string[];
  techStack: {
    cms: string;
    builder: string;
    styling: string;
    scripts: string;
  };
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    keyDeliverables: string[];
  };
}

export const wordPressProjects: WordPressProject[] = [
  {
    id: "wp-project-agency",
    title: "Brand & Creative Agency Website",
    subtitle: "Custom WordPress & Elementor Showcase Template",
    category: "Agency & Studio",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / TEMPLATE",
    client: "[ADD CLIENT NAME]",
    purpose: "Bespoke digital layout architecture built with Elementor Pro, tailored CSS styling, and responsive layout structures.",
    coverImage: "/images/placeholders/wp-agency.webp",
    liveUrl: "",
    tags: ["WordPress", "Elementor Pro", "Custom CSS", "Responsive Design"],
    features: [
      "Custom responsive container layouts",
      "Tailored micro-interactions and hover states",
      "Glassmorphism navigation and header styles",
      "Clean semantic hierarchy and typography"
    ],
    techStack: {
      cms: "WordPress",
      builder: "Elementor Pro",
      styling: "Custom CSS",
      scripts: "JavaScript / DOM"
    },
    caseStudy: {
      overview: "A showcase structure designed to demonstrate Elementor Pro layout construction paired with custom CSS overrides for branding agencies.",
      challenge: "Creating a bespoke, non-generic agency layout while preserving client-editable visual containers inside WordPress.",
      solution: "Implemented modular CSS classes and custom container structures to deliver a modern, high-contrast creative presentation.",
      keyDeliverables: [
        "Custom Elementor Pro page templates",
        "Responsive desktop, tablet, and mobile breakpoints",
        "Custom typography and color tokens",
        "Configured contact inquiry flow"
      ]
    }
  },
  {
    id: "wp-project-ecommerce",
    title: "Modern E-Commerce Storefront",
    subtitle: "WooCommerce & Custom Shop Architecture",
    category: "E-Commerce",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / TEMPLATE",
    client: "[ADD CLIENT NAME]",
    purpose: "Storefront layout structure designed for WooCommerce product catalogs, custom cart drawer integration, and clean checkout flows.",
    coverImage: "/images/placeholders/wp-ecommerce.webp",
    liveUrl: "",
    tags: ["WordPress", "WooCommerce", "Elementor", "Custom CSS", "Responsive Design"],
    features: [
      "Product showcase grid with category filters",
      "Custom single product template layout",
      "Responsive navigation with cart indicator",
      "Clean checkout page structure"
    ],
    techStack: {
      cms: "WordPress / WooCommerce",
      builder: "Elementor Pro Shop Builder",
      styling: "Custom CSS / Flexbox",
      scripts: "JavaScript"
    },
    caseStudy: {
      overview: "An e-commerce architecture structured for products, brand storytelling, and user-friendly navigation.",
      challenge: "Designing an intuitive shopping layout that maintains clear product hierarchy across mobile and desktop devices.",
      solution: "Built custom WooCommerce archive templates with clean grid styling and accessible cart interactions.",
      keyDeliverables: [
        "Product catalog and archive templates",
        "Custom product detail view with image gallery",
        "Responsive mobile menu with shop navigation",
        "Payment gateway placeholder configuration"
      ]
    }
  },
  {
    id: "wp-project-corporate",
    title: "Corporate Business Portal",
    subtitle: "Enterprise Services & Lead Generation Layout",
    category: "Corporate & B2B",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / TEMPLATE",
    client: "[ADD CLIENT NAME]",
    purpose: "Structured corporate web portal layout with dedicated service pages, custom inquiry forms, and company overview sections.",
    coverImage: "/images/placeholders/wp-corporate.webp",
    liveUrl: "",
    tags: ["WordPress", "Custom Post Types", "Elementor", "Custom Styling", "SEO Ready"],
    features: [
      "Structured service grid and detail pages",
      "Dynamic custom post layout integration",
      "Multi-field project inquiry form",
      "Responsive corporate design system"
    ],
    techStack: {
      cms: "WordPress",
      builder: "Elementor Pro",
      styling: "Custom CSS Variables",
      scripts: "JavaScript"
    },
    caseStudy: {
      overview: "A business portal template crafted for B2B service providers and technology consultancies.",
      challenge: "Presenting multiple enterprise services in an organized, easily digestible visual hierarchy.",
      solution: "Structured distinct modular sections for service offerings, about information, and inquiry capture.",
      keyDeliverables: [
        "Custom service page templates",
        "Lead inquiry form integration",
        "Typography hierarchy and corporate color palette",
        "Cross-browser responsive testing"
      ]
    }
  },
  {
    id: "wp-project-architect",
    title: "Editorial Architecture Portfolio",
    subtitle: "Visual Gallery & Studio Showcase Layout",
    category: "Portfolio & Creative",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / TEMPLATE",
    client: "[ADD CLIENT NAME]",
    purpose: "Minimalist portfolio layout highlighting architectural photography, project specifications, and visual studio storytelling.",
    coverImage: "/images/placeholders/wp-architect.webp",
    liveUrl: "",
    tags: ["WordPress", "Elementor", "Gallery Grid", "Custom CSS", "Minimalist"],
    features: [
      "Fullscreen architectural imagery showcase",
      "Minimalist typography and subtle borders",
      "Project detail layout with specifications list",
      "Fluid responsive scaling"
    ],
    techStack: {
      cms: "WordPress",
      builder: "Elementor Canvas",
      styling: "Minimalist CSS",
      scripts: "JavaScript"
    },
    caseStudy: {
      overview: "An editorial portfolio structure focused on photography and clean architectural presentation.",
      challenge: "Highlighting high-resolution visual captures with generous whitespace and clean typography.",
      solution: "Designed a clean grid layout with minimal distractions and refined typography scale.",
      keyDeliverables: [
        "Project gallery template",
        "Custom project specification fields",
        "Responsive image container sizing",
        "Contact and inquiry footer layout"
      ]
    }
  }
];
