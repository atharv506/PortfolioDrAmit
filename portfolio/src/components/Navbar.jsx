import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white px-12 h-16 flex items-center justify-between shadow-md">
      <a href="#about" className="flex items-center text-3xl font-bold text-gray-900">
        <i className="fa-solid fa-user-graduate text-green-400 text-3xl pr-2"></i>
        <span>Dr. Amit Kumar Goyal</span>
      </a>

      <ul className="flex space-x-6 text-gray-500">
        <li>
          <a href="#about" className="hover:text-gray-700 transition-colors">About</a>
        </li>
        <li>
          <a href="#research" className="hover:text-gray-700 transition-colors">Research</a>
        </li>
        <li>
          <a href="#publications" className="hover:text-gray-700 transition-colors">Publications</a>
        </li>
        <li>
          <a href="#teaching" className="hover:text-gray-700 transition-colors">Teaching</a>
        </li>
        <li>
          <a href="#professional-links" className="hover:text-gray-700 transition-colors">Professional Links</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-700 transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
