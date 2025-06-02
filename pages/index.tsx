import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { DEFAULT_PROPERTY_IMAGE } from '../constants';
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = ["Top Villa", "Self Checkin", "Free Parking", "Pet Friendly"];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      <section className="text-center bg-gray-100 py-20 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to ALX Listings</h1>
        <p className="text-lg">Discover your next favorite stay with amazing deals.</p>
      </section>

      <section className="flex gap-2 flex-wrap justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200"
          >
            {filter}
          </button>
        ))}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps) => (
          <Card
            key={property.name}
            title={property.name}
            description={property.description || 'Great place to stay.'}
            imageUrl={property.image || DEFAULT_PROPERTY_IMAGE}
            price={property.price}
            location={`${property.address.city}, ${property.address.country}`}
            rating={property.rating}
          />
        ))}
      </section>

      <div className="mt-6 text-center space-x-4">
        <Button variant="primary">Book Now</Button>
        <Button variant="secondary">View All Listings</Button>
      </div>
    </div>
  );
};

export default Home;
