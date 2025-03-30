"use client";

import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-4">
        <div className="text-lg font-semibold sm:text-base text-center sm:text-left">
          Andrea Tomatis
        </div>

        <div className="flex flex-wrap justify-center sm:justify-between space-x-6 sm:space-x-4 mt-2 sm:mt-0">
          <a
            
            className="text-lg font-medium hover:underline sm:text-sm w-full sm:w-auto text-center flex items-center justify-center space-x-2"
          >
            <FaPhone />
            <span>+54 9 2612 47-2068</span>
          </a>
          <a
           
            className="text-lg font-medium hover:underline sm:text-sm w-full sm:w-auto text-center flex items-center justify-center space-x-2"
          >
            <FaEnvelope />
            <span>andreapaolatomatis@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
