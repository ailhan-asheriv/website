import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import ContextSection from "../components/sections/ContextSection";
import HowItWorks from "../components/sections/HowItWorks";
import ThreeLayers from "../components/sections/ThreeLayers";
import Stakeholders from "../components/sections/Stakeholders";
import VisionTimeline from "../components/sections/VisionTimeline";
import Developers from "../components/sections/Developers";
import GeographicPresence from "../components/sections/GeographicPresence";
import ContactCTA from "../components/sections/ContactCTA";
import type { Metadata } from "next";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Operational intelligence for vessel lifecycle"
      : "Gemi yasam dongusu icin operasyonel istihbarat",
    description: isEn
      ? "A'SHERIV unifies design data, sensor telemetry, and maintenance history into a living digital twin."
      : "A'SHERIV tasarim verisi, sensor telemetrisi ve bakim gecmisini yasayan bir dijital ikizde birlestirir.",
    openGraph: {
      title: isEn
        ? "Operational intelligence for vessel lifecycle"
        : "Gemi yasam dongusu icin operasyonel istihbarat",
      description: isEn
        ? "A'SHERIV unifies design data, sensor telemetry, and maintenance history into a living digital twin."
        : "A'SHERIV tasarim verisi, sensor telemetrisi ve bakim gecmisini yasayan bir dijital ikizde birlestirir.",
    },
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <ContextSection />
        <HowItWorks />
        <ThreeLayers />
        <Stakeholders />
        <VisionTimeline />
        <Developers />
        <GeographicPresence />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
