import { useState } from 'react';
import React from 'react';
import { FaBars, FaTimes, FaCut, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarker, FaRegClock, FaBrush, FaSprayCan } from 'react-icons/fa';
import { GiHairStrands } from 'react-icons/gi';

const BeautySalon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="bg-pink-50 shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GiHairStrands className="h-8 w-8 text-pink-600" />
              <span className="ml-2 text-xl font-bold text-pink-900">Mushtaq Beauty</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-pink-900 hover:text-pink-600">Home</a>
              <a href="#services" className="text-pink-900 hover:text-pink-600">Services</a>
              <a href="#team" className="text-pink-900 hover:text-pink-600">Team</a>
              <a href="#contact" className="text-pink-900 hover:text-pink-600">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-pink-900 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <div className="px-4 pt-2 pb-4 bg-pink-50">
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={toggleMenu} className="text-pink-900 hover:text-pink-600">Home</a>
              <a href="#services" onClick={toggleMenu} className="text-pink-900 hover:text-pink-600">Services</a>
              <a href="#team" onClick={toggleMenu} className="text-pink-900 hover:text-pink-600">Team</a>
              <a href="#contact" onClick={toggleMenu} className="text-pink-900 hover:text-pink-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Rest of the content... */}
    </div>
  );
};

export default  BeautySalon