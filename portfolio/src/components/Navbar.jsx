import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#about" className="flex items-center text-gray-900">
              <i className="fa-solid fa-graduation-cap text-green-500 text-3xl"></i>
              <span className="ml-3 text-xl md:text-2xl font-bold">Dr. Amit Kumar Goyal</span>
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              <li><a href="#about" className="text-gray-600 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">About</a></li>
              <li><a href="#research" className="text-gray-600 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Research</a></li>
              <li><a href="#publications" className="text-gray-600 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Publications</a></li>
              <li><a href="#teaching" className="text-gray-600 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Teaching</a></li>
              <li><a href="#professional-links" className="text-gray-600 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Links</a></li>
              <li><a href="#contact" className="text-gray-600 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-green-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li><a href="#about" className="text-gray-600 hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">About</a></li>
            <li><a href="#research" className="text-gray-600 hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Research</a></li>
            <li><a href="#publications" className="text-gray-600 hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Publications</a></li>
            <li><a href="#teaching" className="text-gray-600 hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Teaching</a></li>
            <li><a href="#professional-links" className="text-gray-600 hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Professional Links</a></li>
            <li><a href="#contact" className="text-gray-600 hover:bg-green-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
