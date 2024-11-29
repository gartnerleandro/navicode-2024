import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

import { Footer } from "@/_components/Footer/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reto Frontend Navideño 2024",
  description: "Desarrolla una experiencia web mágica mientras aprendes tecnologías modernas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
