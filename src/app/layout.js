import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "IANNELLI RENT",
  description: "Noleggio auto, veicoli commerciali e camere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${inter.variable} antialiased`}>
      <body className="">{children}</body>
    </html>
  );
}
