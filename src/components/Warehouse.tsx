import React from 'react';

const Warehouse = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12">Warehouse Onsite</h2>
        
        <div className="relative">
          <img
            src="/src/assets/Group7029.svg"
            alt="World Map"
            className="w-full h-auto"
          />
          
          {/* Map markers */}
          <div className="absolute inset-0">
            {/* Add map markers here */}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center space-x-4">
          <button className="border border-black text-black px-8 py-3 rounded-md">
            Request Quote
          </button>
          <button className="bg-black text-white px-8 py-3 rounded-md">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Warehouse;