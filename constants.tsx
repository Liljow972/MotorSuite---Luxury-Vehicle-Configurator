
import { VehicleModel, VehicleType, VehicleColor, Client, Quote } from './types';

export const COLORS: VehicleColor[] = [
  { id: 'white', name: 'Polar White', hex: '#F2F2F2', price: 0 },
  { id: 'black', name: 'Obsidian Black', hex: '#111111', price: 0 },
  { id: 'red', name: 'Patagonia Red', hex: '#8B0000', price: 1200 },
  { id: 'blue', name: 'Spectral Blue', hex: '#003366', price: 1200 },
  { id: 'gray', name: 'Selenite Grey', hex: '#4B4B4B', price: 0 },
  { id: 'gold', name: 'Manufaktur Kalahari Gold', hex: '#B8860B', price: 3500 },
];

export const MODELS: VehicleModel[] = [
  {
    id: 'eqs-sedan',
    brand: 'MotorSuite',
    name: 'Vision EQS',
    type: VehicleType.ELECTRIC,
    basePrice: 104400,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200',
    stats: {
      passengers: 5,
      engine: 'Dual Electric Motors',
      power: '516 hp',
      transmission: 'Direct Drive',
      acceleration: '4.1s',
      range: '450 miles'
    },
    hotspots: [
      { id: 'roof', x: '50%', y: '25%', label: 'Panoramic Roof', description: 'Expansive heat-rejecting glass panel for an airy cabin feel.' },
      { id: 'lights', x: '15%', y: '55%', label: 'Digital Light', description: 'Advanced lighting technology with over 1 million pixels per headlamp.' },
      { id: 'wheels', x: '35%', y: '85%', label: 'AMG Styling', description: '21-inch multi-spoke wheels with aerodynamic optimizations.' }
    ]
  },
  {
    id: 'gt-coupe',
    brand: 'MotorSuite',
    name: 'GT Performance',
    type: VehicleType.COUPE,
    basePrice: 157000,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200',
    stats: {
      passengers: 2,
      engine: '4.0L V8 Biturbo',
      power: '577 hp',
      transmission: '9-Speed Auto',
      acceleration: '3.1s'
    },
    hotspots: [
      { id: 'aero', x: '82%', y: '55%', label: 'Active Aero', description: 'Electronically adjustable rear wing for maximum downforce.' },
      { id: 'exhaust', x: '88%', y: '75%', label: 'Sport Exhaust', description: 'Quad-exhaust system with adjustable valves for acoustic performance.' }
    ]
  },
  {
    id: 'g-class',
    brand: 'MotorSuite',
    name: 'G-Alpha Lux',
    type: VehicleType.SUV,
    basePrice: 139900,
    image: 'https://images.unsplash.com/photo-1520031444823-d517ff677e28?auto=format&fit=crop&q=80&w=1200',
    stats: {
      passengers: 5,
      engine: 'V8 Biturbo',
      power: '585 hp',
      transmission: '9G-TRONIC',
      acceleration: '4.5s'
    },
    hotspots: [
      { id: 'offroad', x: '35%', y: '82%', label: 'All-Terrain', description: 'Enhanced suspension with 3 locking differentials.' }
    ]
  }
];

export const CLIENTS: Client[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Hot', lastInteraction: '2 hours ago', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: '2', name: 'Sarah Miller', email: 'sarah.m@business.com', status: 'Warm', lastInteraction: '1 day ago', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: '3', name: 'Michael Chen', email: 'mchen@tech.io', status: 'Cold', lastInteraction: '3 days ago', avatar: 'https://i.pravatar.cc/150?u=3' },
];

export const QUOTES: Quote[] = [
  { id: 'QT-2024-001', clientName: 'John Doe', vehicleModel: 'Vision EQS', total: 105600, status: 'Sent', date: '2024-03-20' },
  { id: 'QT-2024-002', clientName: 'Sarah Miller', vehicleModel: 'GT Performance', total: 158200, status: 'Accepted', date: '2024-03-18' },
  { id: 'QT-2024-003', clientName: 'Alex Hunt', vehicleModel: 'G-Alpha Lux', total: 139900, status: 'Draft', date: '2024-03-21' },
];
