export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
  }
  
  export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
  }
  
  export interface Property {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    location: string;
    rating: number;
  }
  export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    rating?: number; // Optional prop
}
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
