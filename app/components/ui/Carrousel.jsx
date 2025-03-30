"use client";

import { useState } from "react";


const AnimatedTestimonials = ({ testimonials }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
  
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-white py-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto p-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#461468] p-6 rounded-lg shadow-lg text-center"
          >
            <div className="mb-4">
              <video
                src={testimonial.src}
                className="w-full h-64 md:h-80 rounded-lg object-cover"
                loop
                controls
                playsInline
              />
            </div>
            <h3 className="text-2xl font-bold text-[#cf27e9]">{testimonial.name}</h3>
            <p className="text-gray-300 text-lg">{testimonial.designation}</p>
          </div>
        ))}
      </div>
  
    </div>
   
  );
};

export default function Carrousel() {
  const testimonios = [
    {
      name: "Diego Rodriguez",
      designation: "Lic. en Psicología",
      src: "https://res.cloudinary.com/dytpump6i/video/upload/v1743259145/testimonio_Diego_Rodri%CC%81guez_video_lozxkz.mp4",
    },
    {
      name: "Pato Poggi",
      designation: "Asesora y comercial de Essen Argentina",
      src: "https://res.cloudinary.com/dytpump6i/video/upload/v1743259404/TESTIMONIO_PATO_POGGI_zao1ug.mp4",
    },
    {
      name: "Antonella Arquicon",
      designation: "Ar. Arquitectura y Contrucciones",
      src: "https://res.cloudinary.com/dytpump6i/video/upload/v1743358713/WhatsApp_Video_2025-03-30_at_15.05.29_awhrbd.mp4",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonios} />;
}
