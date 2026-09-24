export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  priceStarting: string;
  durationEstimate: string;
  iconName: string;
  imageUrl: string;
  features: string[];
  popularTag?: string;
}

export interface Review {
  id: string;
  author: string;
  location?: string;
  quote: string;
  rating: number;
  serviceType: string;
  date?: string;
  avatarInitial?: string;
}

export interface ServiceArea {
  name: string;
  badge: string;
  description: string;
}

export interface CalculatorState {
  category: 'auto' | 'furniture';
  vehicleType: 'hatchback' | 'sedan' | 'suv' | 'van';
  furnitureType: 'gauc' | 'kreslo' | 'stolicky' | 'matrac';
  packageType: 'basic' | 'complete' | 'premium';
  addons: {
    ozon: boolean;
    leatherProtection: boolean;
    textileProtection: boolean;
    petHairRemoval: boolean;
  };
}

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  city: string;
  serviceCategory: string;
  note?: string;
}
