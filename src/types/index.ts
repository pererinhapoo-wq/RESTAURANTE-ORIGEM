export type MenuCategory = 
  | 'Entradas'
  | 'Principais'
  | 'Peixes'
  | 'Carnes'
  | 'Vegetais'
  | 'Sobremesas';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: number;
  highlight?: boolean;
  tags?: string[];
  pairing?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Prato' | 'Ingrediente' | 'Ambiente' | 'Cozinha' | 'Bar';
  description: string;
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface Review {
  id: string;
  author: string;
  role: string;
  publication?: string;
  quote: string;
  rating: number;
  year: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ReservationData {
  name: string;
  people: number;
  date: string;
  time: string;
  phone: string;
  notes: string;
}
