import React from 'react';
import { FaWhatsapp, FaUserTie, FaLaptopCode } from 'react-icons/fa';
import dev from '../assets/dev.jpg'; // Adjust path to your image

const Dev = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-md w-full text-center">
        <img
          src={dev}
          alt="Eng Abdullah"
          className="mx-auto mb-6 w-40 h-40 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Eng Abdullah</h1>
        <p className="text-indigo-600 font-semibold mb-4">Fullstack Dev / UI Designer</p>

        <div className="mb-6">
          <h3 className="flex items-center justify-center text-lg text-gray-700 font-semibold gap-2 mb-2">
            <FaUserTie /> CEO and Founder Of:
          </h3>
          <p className="text-gray-600 text-base">DugsiHub</p>
          <p className="text-gray-600 text-base">SmartStudy</p>
        </div>

        <div className="flex items-center justify-center text-green-600 font-semibold text-lg gap-3 cursor-pointer hover:text-green-700 transition">
          <FaWhatsapp size={28} />
          <a href="https://wa.me/613169435" target="_blank" rel="noopener noreferrer">
            WhatsApp: +613169435
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dev;
