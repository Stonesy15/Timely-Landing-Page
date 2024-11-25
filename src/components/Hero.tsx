import React from 'react';
import { Apple, PlaySquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Let's Go <span className="text-red-500">Places</span> On Time.
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg">
            Timely delivers all packages around through dedicated customer service, engaged
            employees and strategic partnerships.
          </p>
          <button className="mt-8 bg-red-500 text-white px-8 py-3 rounded-md">
            Get Started
          </button>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-black text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition-colors"
            >
              <Apple className="w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-xs">Download on the</span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </a>
            
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-black text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition-colors"
            >
              <PlaySquare className="w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-xs">Get it on</span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg max-w-md">
            <h3 className="font-semibold mb-4">Kaduna</h3>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Track your package"
                className="flex-1 p-2 border rounded-md"
              />
              <button className="bg-red-500 text-white px-6 py-2 rounded-md">
                Track
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img
            src="/src/assets/deliveryman.png"
            alt="Delivery Man"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;