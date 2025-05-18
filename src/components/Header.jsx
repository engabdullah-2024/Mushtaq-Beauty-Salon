import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";
const Header = () => {
  return (
    <header className="bg-green-700 text-white py-5 text-center shadow-md flex justify-center gap-5 items-center sm: flex-col">
       <Link to="/" className=" mt-2 ml-5 ">
    <IoArrowBackCircle size={28} />
  </Link>
      <h1 className="text-3xl font-bold">📖 Quran Clone</h1>
     
      <Link to="/dev"><p className="text-3xl mt-1 ml-10 ">Dev</p></Link>

    </header>
  )
}

export default Header
