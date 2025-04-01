"use client";

import React from "react";
import Carrousel from "./ui/Carrousel";
import SpotlightCard from "./ui/SpotlightCard"

const TestimonialsSection = () => {
  return (
    
   
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white dark:text-white">
          ALGUNOS TESTIMONIOS
        </h2>
        <p className="mt-4 text-lg lg:text-2xl text-white">
          Ellos tomaron acción y ahora están disfrutando de los resultados
        </p>
      </div>
      <Carrousel/>
      </SpotlightCard>


  );
};

export default TestimonialsSection;
