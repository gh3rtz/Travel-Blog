import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-gray-800 dark:text-white">
          Go Travel
        </Link>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </button>

          {/* Hamburger Menu Icon (visible on small screens) */}
          <button
            onClick={handleMenuToggle}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white md:hidden"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Home</Link>
            <Link to="/posts" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Posts</Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-48 z-50">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mb-2"
            >
              Home
            </Link>
            <Link
              to="/posts"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mb-2"
            >
              Posts
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
