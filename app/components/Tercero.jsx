"use client";

import React from "react";
import Carrousel from "./ui/Carrousel";

const TestimonialsSection = () => {
  return (
    <section className="bg-[#600f6d] py-16">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white dark:text-white">
          ALGUNOS TESTIMONIOS
        </h2>
        <p className="mt-4 text-lg text-white">
          Ellos tomaron acción y ahora están disfrutando de los resultados
        </p>
      </div>
      <Carrousel/>
    </section>
  );
};

export default TestimonialsSection;
