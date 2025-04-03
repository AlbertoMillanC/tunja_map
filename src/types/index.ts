export interface Obra {
  id: string;
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  status: string;
  images: string[];
  budget: number;
  startDate: string;
  endDate: string;
}

export interface MapProps {
  onMapLoad?: (map: mapboxgl.Map) => void;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}
