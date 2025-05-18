import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle, IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white py-4 px-6 shadow-md flex justify-center gap-10 items-center">
      {/* Left side: Back icon and logo */}
      <div className="flex items-center gap-4">
        <Link to="/">
          <IoArrowBackCircle size={30} className="hover:text-white" />
        </Link>
        <h1 className="text-2xl font-bold">📖 Quran Clone</h1>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 items-center">
        <Link to="/dev" className="text-lg font-medium hover:text-gray-200">Dev</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-60 bg-white text-black p-6 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-green-700">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <IoClose size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="text-black hover:text-green-700" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/dev" className="text-black hover:text-green-700" onClick={() => setIsOpen(false)}>Dev</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
