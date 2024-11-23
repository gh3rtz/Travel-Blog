import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo and Tagline */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Go Travel
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Exploring the world, one step at a time</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://instagram.com/givarirmdn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 dark:text-gray-400 hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com/gh3rtz/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-600 dark:text-gray-400 hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com/givarirmdn/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-300 dark:border-gray-700 my-4 mx-auto w-11/12"></div>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 Go Travel
      </p>
    </footer>
  );
};

export default Footer;
