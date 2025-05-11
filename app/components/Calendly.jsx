"use client";
import React, { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup por si el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-10 w-full flex justify-center">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/andreapaolatomatis/40min"
        style={{
          minWidth: "320px",
          height: "700px",
        }}
      ></div>
    </div>
  );
};

export default Calendly;

