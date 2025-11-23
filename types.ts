export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  fullDescription?: string;
  features?: string[];
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  content?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}