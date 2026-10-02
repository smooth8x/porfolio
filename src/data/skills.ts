export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: "Expert" | "Advanced" | "Core Competency" | "Proficient";
    highlight?: string;
    icon?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "web",
    name: "Web & CMS Development",
    description: "Modern, high-performance website architecture, custom themes, and bespoke responsive styling.",
    icon: "Globe",
    skills: [
      { name: "WordPress", level: "Expert", highlight: "Core CMS, Custom Themes & Structure" },
      { name: "Elementor", level: "Expert", highlight: "Pixel-perfect visual engineering" },
      { name: "HTML5", level: "Expert", highlight: "Semantic, accessible markup" },
      { name: "CSS3 / SCSS", level: "Expert", highlight: "Animations, Glassmorphism & Layouts" },
      { name: "JavaScript", level: "Advanced", highlight: "DOM manipulation & interactive UI" },
      { name: "Responsive Web Design", level: "Expert", highlight: "Mobile-first fluid architecture" },
      { name: "Website Customization", level: "Expert", highlight: "Child themes, hooks & speed optimization" }
    ]
  },
  {
    id: "creative",
    name: "Creative & Post-Production",
    description: "Cinematic post-production, motion graphics, and precision color science.",
    icon: "Film",
    skills: [
      { name: "Premiere Pro", level: "Expert", highlight: "Narrative pacing & audio sync" },
      { name: "After Effects", level: "Advanced", highlight: "Motion graphics & kinetic typography" },
      { name: "DaVinci Resolve", level: "Expert", highlight: "Node-based color grading & LUTs" },
      { name: "Lightroom", level: "Expert", highlight: "Photo enhancement & preset design" },
      { name: "Photoshop", level: "Advanced", highlight: "Compositing, key visuals & assets" },
      { name: "Color Grading", level: "Expert", highlight: "S-Log3, Apple Log, Rec.709 conversion" },
      { name: "Motion Graphics", level: "Advanced", highlight: "Title reveals & brand animations" }
    ]
  },
  {
    id: "development",
    name: "Application & Software Dev",
    description: "Cross-platform mobile and backend application engineering.",
    icon: "Code2",
    skills: [
      { name: "Flutter", level: "Advanced", highlight: "State management & custom widgets" },
      { name: "Dart", level: "Advanced", highlight: "Object-oriented programming" },
      { name: "Firebase", level: "Advanced", highlight: "Auth, Firestore & Realtime DB" },
      { name: "Android", level: "Proficient", highlight: "Mobile lifecycle & deployment" },
      { name: "REST API", level: "Advanced", highlight: "Endpoint integration & data mapping" }
    ]
  },
  {
    id: "marketing",
    name: "Digital Marketing & Strategy",
    description: "Audience growth, technical SEO, and conversion-focused content strategy.",
    icon: "TrendingUp",
    skills: [
      { name: "Digital Marketing", level: "Advanced", highlight: "Campaign strategy & funnel optimization" },
      { name: "Instagram Strategy", level: "Advanced", highlight: "Short-form video retention & reach" },
      { name: "SEO (Search Engine Optimization)", level: "Advanced", highlight: "On-page, technical & schema SEO" },
      { name: "Content Strategy", level: "Advanced", highlight: "Brand storytelling & viral retention" }
    ]
  }
];
