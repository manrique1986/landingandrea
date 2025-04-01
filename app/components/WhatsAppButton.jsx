"use client"; 

import { FaWhatsapp } from 'react-icons/fa'; 

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+5492612472068" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-4 bg-[#25d366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#128c7e] transition-colors duration-300 z-50"
    >
 
      <FaWhatsapp size={16} className="sm:size-8 md:size-12 lg:size-30 xl:size-8" />
    </a>  );
};

export default WhatsAppButton;