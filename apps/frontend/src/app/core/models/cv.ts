export interface Presentation {
  name: string;
  description: string;
  avatarUrl: string;
}

export interface Technology {
  name: string;
  icon: string;
  link: string;
}

export interface Techno {
  name: string;
  icon: string;
  link: string;
}

export interface Project {
  name: string;
  title: string;
  postTitle: string;
  icon: string;
  description: string;
  tasks: string[]; // Added to include detailed tasks for each project
  technos: Techno[];
  backgroundImg?: string;
}

export interface Experience {
  name: string;
  projects: Project[];
}

export interface CvFinder {
  presentation: Presentation;
  technologies: Technology[];
  experiences: Experience[];
}
