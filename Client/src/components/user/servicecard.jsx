import React from 'react';
import { StarIcon, HeartIcon } from '@heroicons/react/solid';

const ServiceCard = () => {
  return (
    <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <div className="absolute top-0 right-0 bg-white rounded flex mt-2 me-2 items-center">
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <span className="text-gray-600 ml-1">4.5</span>
        </div>
        <img
          src="http://localhost:8080/public/images/1681886137730-Me.JPG"
          alt="Service Image"
          className="w-full h-40 object-cover"
        />
      </div>
      
      <div className="px-4 py-2">
        <h3 className="text-lg font-medium text-gray-800">Service Title</h3>
        <p className="text-gray-600 mt-2">
          Service description goes here. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <div className="flex items-center mt-4">
          <span className="text-xl font-medium text-gray-800">$19.99</span>
          <span className="text-gray-600 ml-2">/hour</span>
        </div>
        <p className="text-gray-500 text-sm mt-2 mb-2">
          *Conditions apply. Please contact us for details.
        </p>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex items-center justify-between mt-2 mb-1">
          <HeartIcon className="w-6 h-6 text-red-500" />
          <button className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-blue-900 to-blue-500">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
