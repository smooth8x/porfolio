export interface LUTPreset {
  id: string;
  name: string;
  tagline: string;
  cameraProfile: "Sony S-Log3" | "Apple Log" | "Rec.709" | "DJI D-Log M" | "Canon C-Log";
  colorSpace: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
  isPlaceholder: boolean;
  tones: string[];
}

export const lutPresets: LUTPreset[] = [
  {
    id: "lut-cinematic-gold",
    name: "Tungsten Gold & Cinematic Contrast",
    tagline: "Showcase profile demonstrating warm highlight roll-off and balanced skin tones.",
    cameraProfile: "Sony S-Log3",
    colorSpace: "S-Gamut3.Cine → Rec.709",
    description: "Configurable color grading preset demonstration for Sony S-Log3 footage. Ready to be replaced with Akash's actual 3D .CUBE LUTs and raw video clips.",
    beforeLabel: "Flat S-Log3 Raw [Placeholder]",
    afterLabel: "Graded Cinematic [Placeholder]",
    beforeImage: "/images/luts/log-before-1.webp",
    afterImage: "/images/luts/graded-after-1.webp",
    isPlaceholder: true,
    tones: ["Warm Gold", "Charcoal Blacks", "Natural Skin Tones"]
  },
  {
    id: "lut-apple-cyber",
    name: "Urban Night & Cool Teal Tones",
    tagline: "Showcase profile demonstrating urban cool shadows with warm point light separation.",
    cameraProfile: "Apple Log",
    colorSpace: "Apple Log → Rec.709",
    description: "Configurable color grading preset demonstration for Apple Log footage. Ready to be replaced with Akash's actual 3D .CUBE LUTs and raw video clips.",
    beforeLabel: "Apple Log Flat [Placeholder]",
    afterLabel: "Graded Teal Look [Placeholder]",
    beforeImage: "/images/luts/log-before-2.webp",
    afterImage: "/images/luts/graded-after-2.webp",
    isPlaceholder: true,
    tones: ["Teal & Cyan", "Deep Midnight", "High Contrast"]
  },
  {
    id: "lut-vintage-analog",
    name: "35mm Analog Film Emulation",
    tagline: "Showcase profile demonstrating soft highlight roll-off and warm film characteristics.",
    cameraProfile: "Rec.709",
    colorSpace: "Rec.709 → Film Emulation",
    description: "Configurable color grading preset demonstration for Rec.709 footage. Ready to be replaced with Akash's actual 3D .CUBE LUTs and raw video clips.",
    beforeLabel: "Standard Rec.709 [Placeholder]",
    afterLabel: "Film Emulation [Placeholder]",
    beforeImage: "/images/luts/log-before-3.webp",
    afterImage: "/images/luts/graded-after-3.webp",
    isPlaceholder: true,
    tones: ["Warm Kodak Tone", "Soft Roll-Off", "Film Texture"]
  }
];
