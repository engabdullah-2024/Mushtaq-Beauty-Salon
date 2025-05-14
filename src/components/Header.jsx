import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiHairStrands } from 'react-icons/gi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, text: 'Home', href: '#home' },
    { id: 2, text: 'Services', href: '#services' },
    { id: 3, text: 'Team', href: '#team' },
    { id: 4, text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-pink-50 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <GiHairStrands className="h-8 w-8 text-pink-600" />
            <span className="ml-2 text-xl font-bold text-pink-900">Mushtaq Beauty</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-pink-900 hover:text-pink-600 transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-pink-900 hover:text-pink-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 bg-pink-50">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-pink-900 hover:text-pink-600 transition-colors duration-300"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;