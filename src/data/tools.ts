export interface ToolItem {
  id: string;
  name: string;
  category: "Development" | "Design & Web" | "Post-Production";
  iconName: string;
  description: string;
  tags: string[];
}

export const toolsData: ToolItem[] = [
  {
    id: "tool-wordpress",
    name: "WordPress",
    category: "Design & Web",
    iconName: "Globe",
    description: "Core CMS development, bespoke theme architecture, custom post types & database optimization.",
    tags: ["CMS", "Architecture", "Custom Theme"]
  },
  {
    id: "tool-elementor",
    name: "Elementor Pro",
    category: "Design & Web",
    iconName: "Layout",
    description: "Visual web construction, dynamic templates, flexbox/grid containers & responsive layouts.",
    tags: ["Visual Builder", "Flexbox", "Responsive"]
  },
  {
    id: "tool-davinci",
    name: "DaVinci Resolve",
    category: "Post-Production",
    iconName: "Palette",
    description: "Node-based color grading, LUT creation, CST pipeline, HDR management & film emulation.",
    tags: ["Color Science", "LUTs", "S-Log3", "Rec.709"]
  },
  {
    id: "tool-premiere",
    name: "Premiere Pro",
    category: "Post-Production",
    iconName: "Video",
    description: "Timeline pacing, multi-track audio design, commercial montage, dynamic cuts & speed ramping.",
    tags: ["Video Editing", "Pacing", "Sound FX"]
  },
  {
    id: "tool-aftereffects",
    name: "After Effects",
    category: "Post-Production",
    iconName: "Sparkles",
    description: "Motion graphics, title intros, 3D particle systems, kinetic typography & visual effects.",
    tags: ["Motion", "Typography", "VFX"]
  },
  {
    id: "tool-lightroom",
    name: "Lightroom",
    category: "Post-Production",
    iconName: "Sliders",
    description: "Color profiling, tonal balancing, high-resolution RAW photo mastering & custom preset creation.",
    tags: ["Photo", "Color Profiles", "Presets"]
  },
  {
    id: "tool-photoshop",
    name: "Photoshop",
    category: "Post-Production",
    iconName: "Image",
    description: "Digital compositing, marketing assets, social carousel design, and high-fidelity key visuals.",
    tags: ["Compositing", "Visuals", "Graphics"]
  },
  {
    id: "tool-flutter",
    name: "Flutter",
    category: "Development",
    iconName: "Smartphone",
    description: "Cross-platform mobile application development with declarative reactive UI widgets.",
    tags: ["Mobile", "Dart", "Cross-Platform"]
  },
  {
    id: "tool-firebase",
    name: "Firebase",
    category: "Development",
    iconName: "Flame",
    description: "Cloud Firestore, user authentication, push notifications & real-time serverless backend.",
    tags: ["Cloud DB", "Auth", "Serverless"]
  },
  {
    id: "tool-figma",
    name: "Figma",
    category: "Design & Web",
    iconName: "Figma",
    description: "UI/UX wireframing, high-fidelity prototypes, component design systems & design handoff.",
    tags: ["UI/UX", "Prototyping", "Design System"]
  },
  {
    id: "tool-vscode",
    name: "VS Code",
    category: "Development",
    iconName: "Code",
    description: "Primary IDE for custom code development, TypeScript, Tailwind CSS, PHP & scripting.",
    tags: ["IDE", "TypeScript", "Extensions"]
  },
  {
    id: "tool-androidstudio",
    name: "Android Studio",
    category: "Development",
    iconName: "Cpu",
    description: "Native Android toolchain, emulator testing, APK building & SDK management.",
    tags: ["Android", "Toolchain", "Testing"]
  },
  {
    id: "tool-github",
    name: "GitHub",
    category: "Development",
    iconName: "GitBranch",
    description: "Version control, code branching, CI/CD automation & collaborative repository workflows.",
    tags: ["Git", "Version Control", "CI/CD"]
  }
];
