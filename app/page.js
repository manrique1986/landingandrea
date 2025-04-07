"use client";

import { useRef } from "react";
import Primero from "./components/Primero";
import Segundo from "./components/Segundo";
import Tercero from "./components/Tercero";
import Cuarto from "./components/Cuarto";
import Quinto from "./components/quinto";

export default function Home() {
  const calendlyRef = useRef(null);

  const scrollToCalendly = () => {
    if (calendlyRef.current) {
      calendlyRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Ref not found!");
    }
  };

  return (
    <div>
      <Primero onClickScroll={scrollToCalendly} />
      <Segundo calendlyRef={calendlyRef} />
      <Tercero />
      <Cuarto />
      <Quinto />
    </div>
  );
}
