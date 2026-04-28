import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  style: ["normal", "italic"]
});

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Lulukay Chocolate — Клубника и финики в шоколаде, Павлодар",
  description: "Клубника и финики в бельгийском шоколаде на заказ в Павлодаре. Авторские наборы ручной работы. Заказ через WhatsApp и Instagram. Доставка по Павлодару.",
  openGraph: {
    title: "Lulukay Chocolate 🍓",
    description: "Премиальный шоколад на заказ в Павлодаре",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><text y='32' font-size='32'>🍓</text></svg>",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-body antialiased relative selection:bg-accent selection:text-primary">
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
