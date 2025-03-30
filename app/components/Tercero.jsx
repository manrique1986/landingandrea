"use client";

import React from "react";
import Carrousel from "./ui/Carrousel";
import SpotlightCard from "./ui/SpotlightCard";

const TestimonialsSection = () => {
  return (
    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white dark:text-white">
          ALGUNOS TESTIMONIOS
        </h2>
        <p className="mt-4 text-lg text-white">
          Ellos tomaron acción y ahora están disfrutando de los resultados
        </p>
      </div>
      <Carrousel />
  
      {/* Imágenes de WhatsApp debajo del carrusel con tamaño reducido */}
      <div className="flex justify-center gap-4 mt-8 flex-wrap">
      <img 
    src="https://res.cloudinary.com/dytpump6i/image/upload/v1743360747/WhatsApp_Image_2025-03-30_at_15.07.25_1_y0cgap.jpg" 
    alt="Testimonio 2" 
    className="w-4xl sm:w-1/4 md:w-2xl h-auto rounded-lg shadow-lg" 
  />
  <img 
    src="https://res.cloudinary.com/dytpump6i/image/upload/v1743360771/WhatsApp_Image_2025-03-30_at_15.07.23_wkbplp.jpg" 
    alt="Testimonio 1" 
    className="w-1/3 sm:w-1/4 md:w-1/6 h-auto rounded-lg shadow-lg" 
  />
 
  <img 
    src="https://res.cloudinary.com/dytpump6i/image/upload/v1743360758/WhatsApp_Image_2025-03-30_at_15.07.25_slpdgr.jpg" 
    alt="Testimonio 3" 
    className="w-1/3 sm:w-1/4 md:w-1/6 h-auto rounded-lg shadow-lg" 
  />
</div>

    </SpotlightCard>
  );
};

export default TestimonialsSection;


