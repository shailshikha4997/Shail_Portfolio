export interface Skill {
  name: string;
  icon: string;
  level: number;       // 0-100
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'uiLibrary' | 'devops' | 'tools' | 'database' |'performance';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  companyLogo?: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  resumeUrl: string;
  avatar: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  socialLinks: SocialLink[];
}