export type Location = {
  wilaya: string;
  city: string;
  area: string;
};

export type Doctor = {
  id: string;
  fullName: string;
  specialty: string;
  yearsExperience: number;
  affiliation: string;
  location: Location;
  address: string;
  phone: string;
  whatsapp?: string;
  hours: string;
  lat: number;
  lng: number;
};

export type Hospital = {
  id: string;
  name: string;
  type: 'Public' | 'Private' | 'Specialized';
  emergency: boolean;
  services: string[];
  location: Location;
  address: string;
  lat: number;
  lng: number;
};

export type SearchFilters = {
  query?: string;
  specialty?: string;
  wilaya?: string;
  city?: string;
};
