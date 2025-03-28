import { Antonio, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${antonio.variable} ${poppins.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

