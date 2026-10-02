export interface CreativeItem {
  id: string;
  title: string;
  category: "Video Editing" | "Cinematic Reels" | "Color Grading" | "Motion Graphics" | "Social Media Content" | "Photography";
  aspectRatio: "16:9" | "9:16" | "4:5" | "1:1";
  year: string;
  isPlaceholder: boolean;
  statusBadge: string;
  client?: string;
  duration?: string;
  thumbnail: string;
  videoUrl?: string; // Configurable: add real YouTube, Vimeo, or MP4 URL
  software: string[];
  description: string;
  role: string;
  tags: string[];
  keyHighlights: string[];
}

export const creativeCategories = [
  "All",
  "Video Editing",
  "Cinematic Reels",
  "Color Grading",
  "Motion Graphics",
  "Social Media Content",
  "Photography"
] as const;

export const creativeItems: CreativeItem[] = [
  {
    id: "creative-color-grade",
    title: "Cinematic Color Grade Showcase",
    category: "Color Grading",
    aspectRatio: "16:9",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / SHOWCASE",
    client: "[ADD CLIENT / PROJECT]",
    duration: "Preview",
    thumbnail: "/images/placeholders/creative-grade.webp",
    videoUrl: "",
    software: ["DaVinci Resolve", "Sony S-Log3", "Rec.709"],
    description: "Showcase area for DaVinci Resolve color grading, node-based color space transforms (CST), and film tone balancing.",
    role: "Colorist",
    tags: ["Color Grading", "S-Log3", "DaVinci Resolve", "Rec.709"],
    keyHighlights: [
      "Node tree color correction pipeline",
      "Skin tone separation and balancing",
      "Log-to-Rec.709 conversion"
    ]
  },
  {
    id: "creative-video-edit",
    title: "Commercial Video Edit Showcase",
    category: "Video Editing",
    aspectRatio: "16:9",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / SHOWCASE",
    client: "[ADD CLIENT / PROJECT]",
    duration: "Preview",
    thumbnail: "/images/placeholders/creative-edit.webp",
    videoUrl: "",
    software: ["Premiere Pro", "After Effects"],
    description: "Showcase area for rhythm-driven video editing, timeline pacing, multi-track audio sound design, and speed ramping.",
    role: "Video Editor",
    tags: ["Video Editing", "Premiere Pro", "Sound Design", "Pacing"],
    keyHighlights: [
      "Beat-synced timeline cuts",
      "Multi-track audio enhancement",
      "Dynamic speed ramping"
    ]
  },
  {
    id: "creative-reels-flow",
    title: "Short-Form Retention Reel",
    category: "Cinematic Reels",
    aspectRatio: "9:16",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / SHOWCASE",
    client: "[ADD CLIENT / PROJECT]",
    duration: "Preview",
    thumbnail: "/images/placeholders/creative-reel.webp",
    videoUrl: "",
    software: ["Premiere Pro", "CapCut Pro"],
    description: "Showcase area for vertical 9:16 social video editing, kinetic captions, hook pacing, and mobile format optimization.",
    role: "Short-Form Editor",
    tags: ["Cinematic Reels", "9:16 Vertical", "Social Video", "Subtitles"],
    keyHighlights: [
      "Vertical 9:16 mobile composition",
      "Animated kinetic text overlays",
      "Retention-focused hook pacing"
    ]
  },
  {
    id: "creative-motion-graphic",
    title: "Motion Graphics & Title Reveal",
    category: "Motion Graphics",
    aspectRatio: "16:9",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / SHOWCASE",
    client: "[ADD CLIENT / PROJECT]",
    duration: "Preview",
    thumbnail: "/images/placeholders/creative-motion.webp",
    videoUrl: "",
    software: ["After Effects", "Illustrator"],
    description: "Showcase area for kinetic typography, animated title sequences, vector motion graphics, and visual effects.",
    role: "Motion Designer",
    tags: ["Motion Graphics", "After Effects", "Typography", "Animation"],
    keyHighlights: [
      "Vector shape animation",
      "Kinetic typography sequences",
      "Custom title transitions"
    ]
  },
  {
    id: "creative-social-content",
    title: "Brand Visuals & Social Layout",
    category: "Social Media Content",
    aspectRatio: "4:5",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / SHOWCASE",
    client: "[ADD CLIENT / PROJECT]",
    duration: "Series",
    thumbnail: "/images/placeholders/creative-social.webp",
    videoUrl: "",
    software: ["Photoshop", "Lightroom"],
    description: "Showcase area for social media key visuals, carousel design, brand promotional graphics, and typography layouts.",
    role: "Content Designer",
    tags: ["Social Media Content", "Photoshop", "Brand Design", "Visuals"],
    keyHighlights: [
      "High-contrast editorial typography",
      "Multi-slide carousel continuity",
      "Platform-optimized export formats"
    ]
  },
  {
    id: "creative-photo-series",
    title: "Atmospheric Photography Series",
    category: "Photography",
    aspectRatio: "4:5",
    year: "Placeholder",
    isPlaceholder: true,
    statusBadge: "PLACEHOLDER / SHOWCASE",
    client: "[ADD CLIENT / PROJECT]",
    duration: "Still Series",
    thumbnail: "/images/placeholders/creative-photo.webp",
    videoUrl: "",
    software: ["Lightroom Classic", "Photoshop"],
    description: "Showcase area for RAW photo mastering, split-toning, tonal curve calibration, and atmospheric night/urban photography.",
    role: "Photographer & Retoucher",
    tags: ["Photography", "Lightroom", "Color Tones", "RAW Processing"],
    keyHighlights: [
      "RAW highlight/shadow recovery",
      "Custom color curve toning",
      "Tonal balancing and texture preservation"
    ]
  }
];
