import React from "react";

const Primero = () => {
  return (
    <div
      className="flex flex-col items-center sm:items-start h-auto min-h-screen w-full text-white p-6 sm:p-8 bg-cover bg-center bg-no-repeat
     bg-[url('https://res.cloudinary.com/dytpump6i/image/upload/v1743032584/Disen%CC%83o_sin_ti%CC%81tulo_20_vc51tk.png')]"
      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col items-center sm:items-start justify-center w-full max-w-[90%] sm:w-3/5 p-6 sm:p-8 rounded-lg sm:pl-16">
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

          <div className="mt-6 text-center sm:text-left p-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-8">
              {/* Contenedor principal para las dos listas */}
              <div className="w-full sm:w-auto">
                <ul className="space-y-2 font-[var(--font-poppins)] text-xs sm:text-base sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#911ba2] rounded-full"></span> ESTRATEGIA de captación personalizada
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#911ba2] rounded-full"></span> PUBLICIDAD OPTIMIZADA en Meta y Google
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#911ba2] rounded-full"></span> OPTIMIZACIÓN DE PERFIL en redes
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#911ba2] rounded-full"></span> CREATIVOS de alto impacto
                  </li>
                </ul>
              </div>

              {/* Contenedor principal para la segunda lista */}
              <div className="w-full sm:w-auto">
                <ul className="space-y-2 font-[var(--font-poppins)] text-xs sm:text-base sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#911ba2] rounded-full"></span> AUTOMATIZACIÓN de gestión de clientes
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#911ba2] rounded-full"></span> REPORTES y ANÁLISIS de resultados
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#911ba2] rounded-full"></span> PLANTILLAS de respuesta para ventas
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#911ba2] rounded-full"></span> SEGUIMIENTO y AJUSTES semanales
                  </li>
                </ul>
              </div>
            </div>

            {/* Botón central */}
            <div className="flex justify-center sm:justify-start mt-6">
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




















