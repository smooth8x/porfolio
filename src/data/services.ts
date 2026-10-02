export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  toolsUsed: string[];
  category: "Web & Development" | "Creative & Video" | "Growth & Marketing";
}

export const servicesData: ServiceItem[] = [
  {
    id: "service-wp-dev",
    number: "01",
    title: "WordPress Website Development",
    category: "Web & Development",
    shortDesc: "End-to-end custom WordPress architectures engineered for rock-solid security, lightning load times, and effortless client content management.",
    fullDesc: "I build robust, extensible WordPress websites from the ground up or completely revamp existing setups. From clean theme architectures to custom functionality, third-party API integrations, and database tuning, every site is constructed for maximum scalability.",
    deliverables: [
      "Custom Theme & Architecture Setup",
      "Dynamic Post Types (CPT) & Custom Fields",
      "Core Web Vitals & Speed Optimization (95+ score)",
      "SSL, Hardened Security & Automatic Backups",
      "Seamless CMS Admin for easy client updates"
    ],
    toolsUsed: ["WordPress", "PHP", "MySQL", "WP Rocket", "Cloudflare", "REST API"]
  },
  {
    id: "service-elementor-design",
    number: "02",
    title: "Elementor Website Design",
    category: "Web & Development",
    shortDesc: "Pixel-perfect visual design using Elementor Pro, breaking free from cookie-cutter templates to create bespoke, conversion-focused layouts.",
    fullDesc: "Transforming design mockups into living, breathing Elementor experiences. I leverage Elementor's modern Flexbox & Grid containers paired with custom CSS classes to achieve lightweight, responsive perfection across all screen resolutions.",
    deliverables: [
      "Bespoke Elementor Pro Design Systems",
      "Custom Global Typography & Color Palettes",
      "Fluid Layouts without builder bloat",
      "Dynamic Archive & Single Post Templates",
      "Popup & Lead Capture Engine"
    ],
    toolsUsed: ["Elementor Pro", "Custom CSS", "Figma", "Responsive Engine"]
  },
  {
    id: "service-custom-styling",
    number: "03",
    title: "Custom WordPress Styling",
    category: "Web & Development",
    shortDesc: "Advanced CSS3 animations, glassmorphic accents, tailored typography, and bespoke micro-interactions that elevate standard pages to agency quality.",
    fullDesc: "When standard theme settings hit a wall, custom CSS unlocks unlimited design possibilities. I craft bespoke hover states, animated gradients, smooth scroll effects, and custom dark mode palettes that make your website feel alive.",
    deliverables: [
      "Custom CSS3 / SCSS Variable Architectures",
      "Glassmorphism & Frosted Glass Backdrops",
      "Micro-animations & Interactive Hover Transitions",
      "Cross-browser Layout Consistency & Mobile Fixes",
      "Clean, modular child-theme stylesheets"
    ],
    toolsUsed: ["CSS3", "SCSS", "JavaScript", "Animation Keyframes", "Child Themes"]
  },
  {
    id: "service-uiux-design",
    number: "04",
    title: "UI/UX Design",
    category: "Web & Development",
    shortDesc: "User-centric interface design and intuitive user flows that balance aesthetic elegance with strategic conversion architecture.",
    fullDesc: "Great websites start with deep user empathy and structured visual hierarchy. I create high-fidelity wireframes, interactive prototypes, design systems, and responsive layouts that captivate users and guide them toward meaningful actions.",
    deliverables: [
      "High-Fidelity Wireframes & Mockups",
      "Interactive Clickable Prototypes",
      "Comprehensive Component Design Systems",
      "User Journey & Conversion Funnel Mapping",
      "Design-to-Development Handoff"
    ],
    toolsUsed: ["Figma", "Wireframing", "Design Systems", "Prototyping"]
  },
  {
    id: "service-video-editing",
    number: "05",
    title: "Video Editing",
    category: "Creative & Video",
    shortDesc: "Rhythm-driven post-production for commercial ads, YouTube long-form, social reels, and high-impact brand showcases.",
    fullDesc: "Editing is the art of rhythm, timing, and storytelling. I craft seamless narratives using tight cuts, strategic pacing, custom audio soundscapes, speed ramping, and kinetic typography that command attention from the first second.",
    deliverables: [
      "Commercial & Brand Video Post-Production",
      "Dynamic Social Media Reels (9:16) & Shorts",
      "Audio Cleaning, Foley & Multi-Layer Sound Design",
      "Speed Ramping & Match-Cut Transitions",
      "Platform-Specific Render Optimization"
    ],
    toolsUsed: ["Premiere Pro", "After Effects", "Audition", "CapCut Pro"]
  },
  {
    id: "service-color-grading",
    number: "06",
    title: "Color Grading",
    category: "Creative & Video",
    shortDesc: "Precision color science in DaVinci Resolve — converting flat Log profiles into lush cinematic palettes with perfect skin tones.",
    fullDesc: "Color establishes the soul and emotion of visual content. I handle full node-based color pipelines for Sony S-Log3, Apple Log, Canon C-Log, and Rec.709 footage — balancing exposure, skin tone isolation, split-toning, and custom LUT generation.",
    deliverables: [
      "Log-to-Rec.709 Color Space Transforms (CST)",
      "Accurate Skin Tone Isolation & Beautification",
      "Cinematic Film Looks & 35mm Grain Emulation",
      "Scene-to-Scene Shot Matching & Balancing",
      "Custom 3D .CUBE LUT Presets for Clients"
    ],
    toolsUsed: ["DaVinci Resolve Studio", "Color Science", "3D LUTs", "Waveforms & Scopes"]
  },
  {
    id: "service-digital-marketing",
    number: "07",
    title: "Digital Marketing",
    category: "Growth & Marketing",
    shortDesc: "Data-backed content strategy, on-page SEO, and Instagram short-form growth tactics that convert impressions into paying clients.",
    fullDesc: "A phenomenal website and video need the right audience. I combine organic search optimization, short-form viral mechanics, and structured content calendars to build brand authority and generate consistent organic leads.",
    deliverables: [
      "On-Page & Technical SEO Optimization",
      "Instagram Growth & Reel Retention Strategy",
      "Content Calendar & Hook Scripting",
      "Audience Persona & Competitor Analysis",
      "Lead Generation & Funnel Architecture"
    ],
    toolsUsed: ["Google Search Console", "SEO Schema", "Instagram Analytics", "Content Funnels"]
  }
];
