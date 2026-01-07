
export enum UserRole {
  VISITOR = 'visitor',
  STAND = 'stand',
  ADMIN = 'admin'
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: 'Gasolina' | 'Diesel' | 'Elétrico' | 'Híbrido';
  transmission: 'Manual' | 'Automático';
  image: string;
  description: string;
  standName: string;
  verified: boolean;
  location: string;
  category: 'SUV' | 'Sedan' | 'Coupe' | 'Hatchback' | 'Utilitário';
  subdomain?: string;
}

export interface Lead {
  id: string;
  customerName: string;
  customerPhone: string;
  carId: string;
  carName: string;
  status: 'Pendente' | 'Contactado' | 'Vendido' | 'Cancelado';
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  readingTime: string;
}

export type Language = 'pt' | 'en';

export interface AppState {
  language: Language;
  userRole: UserRole;
  favorites: string[];
}
