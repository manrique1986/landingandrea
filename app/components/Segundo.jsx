import React, { useEffect } from "react";
import Calendly from "./Calendly.jsx";

const Segundo = ({ calendlyRef }) => {
  useEffect(() => {
    // Carga el script de Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Observa cuándo se carga el iframe de Calendly
    const observer = new MutationObserver(() => {
      const iframe = document.querySelector("iframe[src*='calendly.com']");
      if (iframe) {
        if (typeof fbq === "function") {
          fbq("trackCustom", "CalendlyWidgetViewed");
          console.log("Evento 'CalendlyWidgetViewed' enviado al Pixel ✅");
        } else {
          console.warn("Meta Pixel no está disponible aún ❌");
        }
        observer.disconnect(); // ya no hace falta seguir observando
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect(); // limpieza
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-center text-white py-8 ">
      <div className="absolute inset-0 bg-[#440155] backdrop-blur-2xl"></div>

      <div className="relative z-10">
        <h2 className="sm:text-4xl text-3xl font-bold mb-8">TE CUENTO COMO VOS PODES LOGRARLO</h2>

        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-[#cf27e9]">
            Paso 1 de 2: <span className="text-white">Mira el video</span>
          </h3>
          <div className="mt-4 flex justify-center">
            <iframe
              className="w-full md:w-full h-64 md:h-[600px] rounded-3xl"
              src="https://player.vimeo.com/video/1071083419?h=b9f4a81c0c&title=0&byline=0&portrait=0&dnt=1"
              title="Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-[#cf27e9]">Paso 2 de 2:</h3>
          <p className="mt-2 text-2xl">Agenda tu sesión de consultoría gratuita</p>
          <p className="text-gray-300 lg:text-xl">
            Programa tu llamada 100% gratuita en el calendario de abajo para ver si sos un buen fit
            para nuestro programa.
          </p>
        </div>

        {/* Calendly embebido */}
        <div ref={calendlyRef}>
          <Calendly />
        </div>
      </div>
    </div>
  );
};

export default Segundo;






