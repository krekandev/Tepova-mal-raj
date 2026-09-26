export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  durationEstimate: string;
  iconName: string;
  imageUrl: string;
  features: string[];
  popularTag?: string;
}

export interface Review {
  id: string;
  author: string;
  location?: string;
  quote: string;
  rating: number;
  serviceType: string;
  date?: string;
  avatarInitial?: string;
}

export interface ServiceArea {
  name: string;
  badge: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  desc: string;
}
