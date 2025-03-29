import React from "react";
import { FaCircle } from "react-icons/fa";

const Primero = () => {
  return (
    <div
      className=" relative flex flex-col items-center sm:items-start h-auto min-h-screen w-full text-white  sm:p-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dytpump6i/image/upload/v1743202079/Disen%CC%83o_sin_ti%CC%81tulo_22_qp9en7.png')" }}
    >
      {/* Fondo para móviles */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden" 
        style={{ backgroundImage: "url('https://res.cloudinary.com/dytpump6i/image/upload/v1743208308/Disen%CC%83o_sin_ti%CC%81tulo_25_cz3bja.png')" }}>
      </div>

      <div className="mt-10 relative flex flex-col items-center sm:items-start justify-center w-full max-w-[100%] sm:w-3/5  sm:p-8 rounded-lg sm:pl-16">
        <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <h1 className="text-3xl sm:text-8xl font-[var(--font-antonio)]">AT</h1>
          <div className="border-l-4 border-white h-12 sm:h-24"></div>
          <div>
            <h1 className="text-xl sm:text-5xl font-[var(--font-antonio)]">Andrea Tomatis</h1>
            <h2 className="text-md sm:text-4xl text-gray-400 font-[var(--font-poppins)]">Trafficker Digital</h2>
          </div>
        </div>

        <div className="mt-6 space-y-4 text-sm sm:text-xl w-full">
          <p className="text-sm sm:text-2xl text-[#911ba3] leading-tight font-[var(--font-antonio)] text-center sm:text-left">
            CONSEGUÍ CLIENTES LISTOS PARA COMPRAR <br />
            <span className="text-white font-[var(--font-poppins)]">SIN PASAR HORAS EN REDES</span>
          </p>

          <p className="font-[var(--font-poppins)] text-center sm:text-left text-xs sm:text-base">
            Dejá de gastar tiempo y dinero en estrategias que no generan RESULTADOS. Con nuestro MÉTODO probado, vas a atraer CLIENTES LISTOS PARA COMPRAR sin necesidad de estar 24/7 en redes.
          </p>

          <div className="mt-6 text-center sm:text-left p-4 ">
            <div className="flex flex-wrap justify-center sm:justify-start lg:gap-8">
              <div className="w-full sm:w-auto ">
                <ul className="space-y-7 font-[var(--font-poppins)] text-xs sm:text-base grid grid-cols-2 sm:gap-8 sm:space-y-0">
                  <li className="flex   gap-2">
                    <FaCircle className="text-[#911ba2] text-xs " /> ESTRATEGIA de captación personalizada
                  </li>
                  <li className="flex  gap-2">
                    <FaCircle className="text-[#911ba2] text-xs " /> PUBLICIDAD OPTIMIZADA en Meta y Google
                  </li>
                  <li className="flex  gap-2">
                    <FaCircle className="text-[#911ba2] text-xs " /> OPTIMIZACIÓN DE PERFIL en redes
                  </li>
                  <li className="flex  gap-2">
                    <FaCircle className="text-[#911ba2] text-xs " /> CREATIVOS de alto impacto
                  </li>
                </ul>
              </div>

              <div className="w-full sm:w-auto">
                <ul className="space-y-4  font-[var(--font-poppins)] text-xs sm:text-base grid grid-cols-2 sm:gap-8 sm:space-y-0">
                  <li className="flex  gap-2">
                    <FaCircle className="text-[#911ba2] text-xs " /> AUTOMATIZACIÓN de gestión de clientes
                  </li>
                  <li className="flex  gap-2">
                    <FaCircle className="text-[#911ba2] text-xs " /> REPORTES y ANÁLISIS de resultados
                  </li>
                  <li className="flex  gap-2">
                    <FaCircle className="text-[#911ba2] text-xs " /> PLANTILLAS de respuesta para ventas
                  </li>
                  <li className="flex  gap-2">
                    <FaCircle className="text-[#911ba2] text-xs " /> SEGUIMIENTO y AJUSTES semanales
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start mt-20">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#911ba3] text-white text-xs sm:text-lg rounded-lg hover:bg-[#000000] font-[var(--font-antonio)] text-center w-full sm:w-auto">
                NO NECESITÁS MÁS SEGUIDORES, NECESITÁS MÁS CLIENTES. Te muestro cómo en una ASESORÍA GRATUITA.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primero;






















