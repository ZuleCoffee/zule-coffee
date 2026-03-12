import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});



export const metadata: Metadata = {
  title: "Zule Coffee | UPB Campus Laureles",
  description:
    "Café de especialidad colombiano, repostería artesanal y cultura en el corazón de la UPB, Medellín. Café Librería Fórum y La Manzana café móvil. Catering para eventos.",
  keywords: [
    "Zule Coffee",
    "café especialidad Medellín",
    "café UPB",
    "café artesanal Colombia",
    "repostería artesanal Medellín",
    "café librería Fórum",
    "catering café Medellín",
  ],
  openGraph: {
    title: "Zule Coffee — Un café para permitirte soñar",
    description:
      "Café de especialidad, repostería artesanal y cultura en la UPB, Medellín. Conoce nuestra historia, menú y puntos de venta.",
    type: "website",
    locale: "es_CO",
    siteName: "Zule Coffee",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zule Coffee — Un café para permitirte soñar",
    description:
      "Café de especialidad, repostería artesanal y cultura en la UPB, Medellín.",
  },
};

// Root layout — fonts, metadata, and global structure for Zule Coffee
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-coffee-800">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-body antialiased bg-coffee-800`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="bg-coffee-800 min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
