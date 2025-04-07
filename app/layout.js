import { Antonio, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from "next/script"; // ✅ Importante para scripts externos

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

export const metadata = {
  title: "Vender sin perseguir",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${antonio.variable} ${poppins.variable}`}>
      <head>
        {/* ✅ Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1201502215027372');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1201502215027372&ev=PageView&noscript=1"
          />
        </noscript>

        {/* ✅ Evento personalizado: trackear clic en botón */}
        <Script id="track-calendly-click" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function () {
              var botonCalendly = document.getElementById('boton-calendly');
              if (botonCalendly) {
                botonCalendly.addEventListener('click', function () {
                  fbq('trackCustom', 'CalendlyClick');
                });
              }
            });
          `}
        </Script>
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
