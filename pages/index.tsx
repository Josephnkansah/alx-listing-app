import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Property } from '../components/common/interfaces';
export const DEFAULT_PROPERTY_IMAGE = '/assets/placeholder.png';

const filters = ["Top Villa", "Self Checkin", "Free Parking", "Pet Friendly"];
filters.map((filter) => <Pill key={filter} label={filter} />);
const Home: React.FC = () => {
  const sampleProperty: Property = {
    id: 1,
    title: 'Modern Loft in Downtown',
    description: 'Beautiful modern loft with amazing city views',
    price: 120,
    imageUrl: DEFAULT_PROPERTY_IMAGE,
    location: 'New York, NY',
    rating: 4.8,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to ALX Listings</h1>
      <div className="flex flex-wrap gap-6">
        <Card
          title={sampleProperty.title}
          description={sampleProperty.description}
          imageUrl={sampleProperty.imageUrl}
          price={sampleProperty.price}
        />
      </div>
      <div className="mt-6 space-x-4">
        <Button variant="primary">Book Now</Button>
        <Button variant="secondary">View Details</Button>
      </div>
    </div>
  );
};

export default Home;
