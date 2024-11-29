import React from 'react';
import { Package, Globe2, Box } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-12">Services We Offer</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Box className="w-8 h-8 text-red-500" />}
          title="Service"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        />
        
        <ServiceCard
          icon={<Globe2 className="w-8 h-8 text-red-500" />}
          title="Service"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        />
        
        <ServiceCard
          icon={<Package className="w-8 h-8 text-red-500" />}
          title="Service"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
        />
      </div>
      
      <div className="mt-12 flex justify-center space-x-4">
        <button className="border border-black text-black px-8 py-3 rounded-md">
          Request Quote
        </button>
        <button className="bg-black text-white px-8 py-3 rounded-md">
          Join Now
        </button>
      </div>
    </section>
  );
}

const ServiceCard = ({ icon, title, description }) => (
  <div className="p-6 rounded-lg bg-white shadow-sm">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Services;