import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/src/Images/Artboard17.png" alt="Timely Logo" className="h-14 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About Us
            </Link>
            {location.pathname === '/' ? (
              <>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <span>Services</span>
                  <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />
                </button>
                <button
                  onClick={() => scrollToSection('operation')}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Operation
                </button>
              </>
            ) : (
              <>
                <Link to="/#services" className="text-gray-700 hover:text-gray-900">
                  Services
                </Link>
                <Link to="/#operation" className="text-gray-700 hover:text-gray-900">
                  Operation
                </Link>
              </>
            )}
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link
              to="/signin"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ top: '64px' }} // Height of the navbar
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            About Us
          </Link>
          
          {location.pathname === '/' ? (
            <>
              <button
                onClick={() => scrollToSection('services')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('operation')}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Operation
              </button>
            </>
          ) : (
            <>
              <Link
                to="/#services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Services
              </Link>
              <Link
                to="/#operation"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Operation
              </Link>
            </>
          )}
          
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact
          </Link>
          
          <Link
            to="/signin"
            className="block px-3 py-2 rounded-md text-base font-medium bg-black text-white hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-30"
          style={{ top: '64px' }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;