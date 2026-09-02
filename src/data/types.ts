export interface NavLink {
  label: string;
  href: `#${string}`;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ExpertiseArea {
  index: string;
  title: string;
  description: string;
  capabilities: string[];
  methods: string[];
}

export interface Project {
  name: string;
  label: string;
  description: string;
  github: string;
  stack: string[];
  command: string;
  highlights: string[];
}

export interface CaseStudy {
  client: string;
  context: string;
  summary: string;
  details: string[];
  stack: string[];
  proofs: {
    value: string;
    label: string;
    featured?: boolean;
  }[];
}

export interface TimelineEntry {
  period: string;
  organization: string;
  organizationLabel?: string;
  role: string;
  mission: string;
  summary: string;
}

export interface Recommendation {
  name: string;
  role: string;
  profileUrl: string;
  date: string;
  quote: string[];
}

export interface EducationEntry {
  period: string;
  institution: string;
  program: string;
  location: string;
}
