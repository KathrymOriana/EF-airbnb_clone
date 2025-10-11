import type { Host } from "./host.types"

export interface DateRange {
  from: string;
  to: string;
}

export interface Place {
  id: number;                  
  title: string;      
  description: string;
  pricePerNight: number;
  nights: number;
  reviews: number;
  rating: number;
  images: string[];
  isFavorite?: boolean;
  type: 'departamento' | 'loft' | 'vivienda' | 'apartamento' | 'hotel' | 'condo' | 'habitacion'; // Tipo de alojamiento
  host: Host;
  guests: number;
  amenities: string[];
  dateRange: DateRange;
}

export interface DestinationSection {
  id: number;
  subtitle: string;
  city: string;
  places: Place[];
}