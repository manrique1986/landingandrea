
"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "¿Este programa sirve para mí si ya tengo campañas activas o redes funcionando?",
    answer:
      "Sí, justamente trabajamos con empresas que ya tienen cierta presencia pero sienten que no están logrando resultados consistentes. Si ya estás invirtiendo tiempo o dinero en marketing y no ves ventas reales, te ayudamos a detectar cuellos de botella, optimizar lo que tenés y rediseñar tu estrategia con foco en conversión y previsibilidad.",
  },
  {
    question: "¿Cuánto tiempo lleva ver resultados?",
    answer:
      "Depende de tu punto de partida. En general, trabajamos en ciclos de 45 a 60 días donde ya se observan mejoras en la calidad de los leads, el posicionamiento y las métricas clave. Nuestro enfoque no es “hacer más”, sino “hacer lo correcto”: una estrategia afinada desde el inicio acelera mucho el impacto.",
  },
  {
    question: "¿Qué necesito tener listo para empezar?",
    answer:
      "Con tener disponibilidad para una reunión inicial, predisposición para compartir información clave del negocio y contar con al menos un mínimo de presencia digital activa (como Instagram, LinkedIn o una web), es suficiente. Nosotros nos encargamos del resto: estrategia, campañas, automatización y seguimiento.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-[#600f6d] to-[#440155] opacity-80 backdrop-blur-lg">
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-white dark:text-white">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 bg-[#600f6d]">
            <button
              className="flex justify-between items-center w-full text-left font-semibold text-white dark:text-white"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-white dark:text-white">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
