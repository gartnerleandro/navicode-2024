import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía | Reto Frontend Navideño 2024",
  description: "Guía de inicio para el Reto Frontend Navideño 2024",
};

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
