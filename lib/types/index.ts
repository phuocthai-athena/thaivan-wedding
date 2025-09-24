// Wedding Event Types
export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description?: string;
  mapUrl?: string;
  lat?: number;
  lng?: number;
}

// Couple Information
export interface Person {
  name: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  image?: string;
}

export interface Couple {
  groom: Person;
  bride: Person;
  weddingDate: string;
  engagementDate?: string;
}

// Photo Gallery
export interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: "engagement" | "prewedding" | "family" | "couple";
}

// Wedding Wishes
export interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  approved: boolean;
  email?: string;
}

// RSVP
export interface Guest {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  guestCount: number;
  attending: boolean;
  message?: string;
  createdAt: string;
}

// Gift Information
export interface BankAccount {
  bankName: string;
  accountName: string;
  accountNumber: string;
  qrCode?: string;
}

export interface GiftInfo {
  groomAccount: BankAccount;
  brideAccount: BankAccount;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Form Types
export interface WishFormData {
  name: string;
  message: string;
  email?: string;
}

export interface RSVPFormData {
  name: string;
  email?: string;
  phone?: string;
  guestCount: number;
  attending: boolean;
  message?: string;
}
