import type { Host } from "./host.types"

export interface Place {
  id: number;                  
  title: string;      
  description: string;
  pricePerNight: number;
  nights: number;
  rewiews: number;
  rating: number;
  images: string[];
  isFavorite?: boolean;
  type: 'departamento' | 'loft' | 'vivienda' | 'apartamento' | 'hotel' | 'condo' | 'habitacion'; // Tipo de alojamiento
  host?: Host;
  beds?: number;
  amenities?: string[];
  dateRange?: { from: string; to: string };
}

export interface DestinationSection {
  id: number;
  subtitle: string;
  city: string;
  places: Place[];
}