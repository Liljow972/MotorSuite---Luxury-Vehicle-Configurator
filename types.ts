
export enum VehicleType {
  SEDAN = 'Sedan',
  COUPE = 'Coupe',
  SUV = 'SUV',
  ELECTRIC = 'Electric'
}

export interface VehicleColor {
  id: string;
  name: string;
  hex: string;
  price: number;
}

export interface VehicleModel {
  id: string;
  brand: string;
  name: string;
  type: VehicleType;
  basePrice: number;
  image: string;
  stats: {
    passengers: number;
    engine: string;
    power: string;
    transmission: string;
    acceleration: string;
    range?: string;
  };
  hotspots: {
    id: string;
    x: string;
    y: string;
    label: string;
    description: string;
  }[];
}

export interface Client {
  id: string;
  name: string;
  email: string;
  status: 'Hot' | 'Warm' | 'Cold';
  lastInteraction: string;
  avatar?: string;
}

export interface Quote {
  id: string;
  clientName: string;
  vehicleModel: string;
  total: number;
  status: 'Draft' | 'Sent' | 'Accepted' | 'Declined';
  date: string;
}
