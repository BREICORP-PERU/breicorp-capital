export interface NavItem {
  name: string;
  href: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

