// Tipo para experiencias (tours, actividades)
export interface Experience {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  date: string;         // Ej: "2025-11-15"
  image: string;
}
