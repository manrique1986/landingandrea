import React from "react";

const SegundoBloque = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-center bg-[#59026f] text-white py-8 mt-10">
      <h2 className="text-4xl font-bold mb-8">TE CUENTO COMO VOS PODES LOGRARLO</h2>

      {/* Paso 1 */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-white">Paso 1 de 2: Mira el video</h3>
        <div className="mt-4 flex justify-center">
          <iframe 
            className="w-full md:w-3/5 h-64 md:h-96" 
            src="https://www.youtube.com/embed/TU_CODIGO_DE_VIDEO" 
            title="Video de YouTube"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Paso 2 */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-white">Paso 2 de 2:</h3>
        <p className="mt-2 text-lg">
          Agenda tu sesión de consultoría gratuita
        </p>
        <p className="text-gray-300">
          Programa tu llamada 1000% gratuita en el calendario de abajo para ver si sos un buen fit para nuestro programa.
        </p>
      </div>
    </div>
  );
};

export default SegundoBloque;


