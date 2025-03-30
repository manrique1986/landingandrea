import { Antonio, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// Importar las fuentes y definirlas con variables CSS
const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["100", "300", "700"], // Agrega los pesos necesarios
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "700"], // Agrega los pesos necesarios
});

export const metadata = {
  title: "Vendes sin perseguir",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${antonio.variable} ${poppins.variable}`}>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

