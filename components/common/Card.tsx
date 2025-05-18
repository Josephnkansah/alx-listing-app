import React from "react";
import Image from "next/image";
import { CardProps } from "../../interfaces";
const DEFAULT_PROPERTY_IMAGE = "'/assets/placeholder.png'";

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <Image src="/assets/placeholder.png" alt="Property Image" width={400} height={300} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${price}/night
        </span>
      </div>
    </div>
  );
};

export default Card;