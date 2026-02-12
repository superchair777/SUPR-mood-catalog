
export interface Product {
  id: string;
  code?: string; // E.g. A10A117
  name: string;
  category: 'Chair' | 'Table' | 'Accessory' | 'Pod';
  price: string;
  image: string;
  description: string;
  features: string[];
  generatedDescription?: string;
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  location: string;
  image: string;
  logoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  year?: string;
}

export interface ProcessStep {
    id: string;
    title: string;
    description?: string;
    image: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  targetPage?: number;
}

export interface MoodItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Hotspot {
  x: number; // percentage 0-100 relative to container width
  y: number; // percentage 0-100 relative to container height
  label: string;
  targetId: string;
}

export interface CatalogPage {
  id: string;
  type: 'cover' | 'content' | 'back-cover';
  layout?: 'hero' | 'grid' | 'standard' | 'intro' | 'full-image' | 'clients' | 'empty' | 'process-strip' | 'summary' | 'projects' | 'categories' | 'mood-grid';
  title?: string;
  subtitle?: string;
  items?: Product[];
  clients?: Client[];
  steps?: ProcessStep[];
  projects?: Project[];
  categories?: CategoryItem[];
  moods?: MoodItem[];
  hotspots?: Hotspot[];
  pageNumber?: number;
  heroImage?: string; 
  marketingCopy?: string; 
}

export interface Sheet {
  id: string;
  front: CatalogPage;
  back: CatalogPage;
}
