
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  content: string;
}

export interface ServicePlan {
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
}
