import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DriverSection } from "@/components/driver-section";
import { FleetSection } from "@/components/fleet-section";
import { TrackingSection } from "@/components/tracking-section";
import { AppDownloadSection } from "@/components/app-download-section";
import { Footer } from "@/components/footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    requestAnimationFrame(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DriverSection />
      <FleetSection />
      <TrackingSection />
      <AppDownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
