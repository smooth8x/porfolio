export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string; // e.g. "START DATE" or "2024"
  endDate: string; // e.g. "END DATE" or "PRESENT"
  isDatePlaceholder?: boolean;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-thinksonic",
    role: "Software Development Intern",
    company: "Thinksonic Global Solutions Pvt Ltd",
    location: "India • Hybrid",
    startDate: "[START DATE]",
    endDate: "[END DATE]",
    isDatePlaceholder: true,
    type: "Internship",
    description: "Contributed to core application engineering, cross-platform mobile UI development, and cloud backend integration within an agile software team.",
    highlights: [
      "Engineered responsive and scalable UI components with Flutter and Dart",
      "Integrated Firebase cloud services for real-time data sync, user authentication, and backend storage",
      "Collaborated with senior software engineers on cross-platform application lifecycle and UI/UX consistency",
      "Built and tested RESTful API integrations and state management flows"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "UI Development", "REST API", "Git"]
  }
];
