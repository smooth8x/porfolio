export interface EducationItem {
  id: string;
  degree: string;
  fullTitle: string;
  institution: string;
  location: string;
  year: string; // e.g. "PURSUING" or "[GRADUATION YEAR]"
  isYearPlaceholder?: boolean;
  status: string;
  field: string;
  description: string;
  focusAreas: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "edu-mca",
    degree: "MCA",
    fullTitle: "Master of Computer Applications",
    institution: "Yenepoya",
    location: "Karnataka, India",
    year: "[GRADUATION YEAR / PURSUING]",
    isYearPlaceholder: true,
    status: "Postgraduate Degree",
    field: "Computer Science & Advanced Software Engineering",
    description: "Advanced master's program focusing on software architecture, full-stack systems development, modern web technologies, and computational paradigms.",
    focusAreas: [
      "Software Engineering & Architecture",
      "Web Technologies & Frameworks",
      "Database Systems & Cloud Computing",
      "Algorithm Design & Problem Solving"
    ]
  },
  {
    id: "edu-bca",
    degree: "BCA",
    fullTitle: "Bachelor of Computer Applications",
    institution: "Yenepoya",
    location: "Karnataka, India",
    year: "[GRADUATION YEAR]",
    isYearPlaceholder: true,
    status: "Undergraduate Degree",
    field: "Computer Applications & Programming",
    description: "Foundational undergraduate degree building deep core expertise in object-oriented programming, data structures, UI/UX fundamentals, and web development.",
    focusAreas: [
      "Core Programming (C, C++, Java, Python)",
      "Web Technologies (HTML, CSS, JavaScript)",
      "Relational Database Management (RDBMS)",
      "Software Engineering Methodologies"
    ]
  }
];
