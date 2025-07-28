// Property related types
export interface Property {
  id: number;
  title: string;
  description?: string;
  location: string;
  price: string;
  type: 'Room' | 'Studio' | 'Apartment' | 'Villa';
  gender: 'Mixed' | 'Male Only' | 'Female Only';
  furnished: boolean;
  image: string;
  images?: string[];
  rating: number;
  verified: boolean;
  landlord?: User;
  amenities?: string[];
  bathrooms?: number;
  area?: number;
  availableFrom?: Date;
  contactNumber?: string;
  whatsappNumber?: string;
}

// User related types
export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role: 'seeker' | 'lister' | 'admin';
  verified: boolean;
  joinedDate: Date;
  properties?: Property[];
}

// Search filters
export interface SearchFilters {
  city: string;
  propertyType: string;
  priceRange: string;
  gender: string;
  furnished: string;
  minPrice?: number;
  maxPrice?: number;
  bathrooms?: number;
  amenities?: string[];
}

// Cities in Oman
export type OmanCity = 
  | 'Muscat'
  | 'Sohar' 
  | 'Salalah'
  | 'Nizwa'
  | 'Sur'
  | 'Ibri'
  | 'Buraimi'
  | 'Rustaq'
  | 'Khasab'
  | 'Ibra';

// Property features
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}

// Contact and Communication
export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: number;
}

// Application state
export interface AppState {
  user: User | null;
  properties: Property[];
  filters: SearchFilters;
  favorites: number[];
  loading: boolean;
  error: string | null;
}

// Form data types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role: 'seeker' | 'lister';
}

export interface PropertyFormData {
  title: string;
  description: string;
  type: Property['type'];
  price: number;
  location: string;
  city: OmanCity;
  gender: Property['gender'];
  furnished: boolean;
  bathrooms: number;
  area: number;
  amenities: string[];
  images: File[];
  contactNumber: string;
  whatsappNumber: string;
  availableFrom: Date;
}