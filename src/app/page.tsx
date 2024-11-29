import { NavBar } from "@/_components/NavBar/NavBar";
import { Hero } from "@/_components/Hero/Hero";
import { HowItWorks } from "@/_components/HowItWorks/HowItWorks";
import { SnowEffect } from "@/_components/SnowEffect/SnowEffect";
import { IntegrateTools } from "@/_components/IntegrateTools/IntegrateTools";
import { FAQ } from "@/_components/FAQ/FAQ";

export default function Home() {
  return (
    <main>
      <SnowEffect />
      <NavBar />
      <Hero />
      <IntegrateTools />
      <HowItWorks />
      <FAQ />
    </main>
  );
}
