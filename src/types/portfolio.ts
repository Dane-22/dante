export interface Metric {
  label: string;
  value: string;
  trend?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  category: 'Full-Stack' | 'Mobile' | 'Cloud & Systems' | 'AI & Tools';
  featured: boolean;
  metrics: Metric[];
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  accentColor?: string;
  mockupType: 'browser' | 'mobile' | 'dashboard' | 'code';
  previewImage?: string;
  previewAlt?: string;
  liveStatus?: 'live' | 'unavailable' | 'review';
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "Advanced", "Expert", "Production-tested"
  tag?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  slug: string;
  description: string;
  skills: SkillItem[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  featured: boolean;
  skills: string[];
}

export interface ProfileInfo {
  name: string;
  role: string;
  subRole: string;
  location: string;
  timezone: string;
  status: string;
  availableForHire: boolean;
  bio: string;
  experienceYears: string;
  completedProjects: string;
  codeDeployments: string;
  socials: {
    github: string;
    linkedin: string;
    x: string;
    email: string;
  };
}

export type DesignCategory =
  | 'Campaign Design'
  | 'Web & Services'
  | 'Automation & AI'
  | 'Marketing Strategy'
  | 'Brand Storytelling';

export interface GraphicDesign {
  id: string;
  title: string;
  category: DesignCategory;
  client: string;
  description: string;
  image: string;
  alt: string;
  sourceFile: string;
  featured?: boolean;
}
