export interface LeadSubmission {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  requestedAmount: number;
  financingPurpose: string;
  propertyType: string;
  isOwnerRegistered: "si" | "no" | "";
  comments?: string;
  acceptsPrivacy: boolean;
  source?: string;
  createdAt?: string;
}

export interface InvestorSubmission {
  fullName: string;
  companyName?: string;
  phone: string;
  email: string;
  city: string;
  investmentRange: string;
  comments?: string;
  acceptsPrivacy: boolean;
  createdAt?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  leadId?: string;
  errors?: Record<string, string>;
}

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

