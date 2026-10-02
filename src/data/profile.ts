export interface ProfileData {
  name: string;
  firstName: string;
  role: string;
  subRole: string;
  tagline: string;
  supportingSpecialties: string[];
  bio: string;
  manifestoWords: string[];
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  isInstagramConfigured: boolean;
  profilePhoto: string;
  availability: string;
  location: string;
  highlights: {
    label: string;
    value: string;
    description: string;
  }[];
  showreel: {
    title: string;
    description: string;
    placeholderVideoUrl?: string;
    duration: string;
  };
}

export const profileData: ProfileData = {
  name: "Akash",
  firstName: "Akash",
  role: "WordPress Developer & Creative Digital Professional",
  subRole: "Creative Technologist",
  tagline: "Building websites, digital experiences and visual content that combine technology with creativity.",
  supportingSpecialties: [
    "WordPress",
    "Web Design",
    "Video",
    "Color Grading",
    "Digital Marketing"
  ],
  bio: "Akash is an MCA student with a BCA background who combines software development and creative production. Delivering custom WordPress websites, responsive web designs, DaVinci Resolve color grading, video editing, and digital marketing strategies.",
  manifestoWords: [
    "I BUILD.",
    "I EDIT.",
    "I DESIGN.",
    "I CREATE."
  ],
  email: "akash965644@gmail.com",
  github: "https://github.com/smooth8x",
  linkedin: "https://www.linkedin.com/in/akashpradeep9656/",
  instagram: "", // Configurable placeholder: add live Instagram URL when available
  isInstagramConfigured: false,
  profilePhoto: "/images/akash-profile.png",
  availability: "Available for Projects & Select Roles",
  location: "India • Remote",
  highlights: [
    {
      label: "Core Discipline",
      value: "WordPress",
      description: "Themes, Elementor & Custom CSS"
    },
    {
      label: "Creative Suite",
      value: "DaVinci & Premiere",
      description: "Color Grading & Video Post-Production"
    },
    {
      label: "Academic Foundation",
      value: "MCA + BCA",
      description: "Yenepoya University"
    },
    {
      label: "Approach",
      value: "Code × Visuals",
      description: "Technical Engineering + Creative Media"
    }
  ],
  showreel: {
    title: "Creative Showreel [Placeholder]",
    description: "Placeholder area ready for future showreel/video embedding.",
    duration: "Preview"
  }
};
