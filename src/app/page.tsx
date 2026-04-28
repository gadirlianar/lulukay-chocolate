import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import HowToOrder from "@/components/HowToOrder";
import Reviews from "@/components/Reviews";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-primary">
      <Navigation />
      <Hero />
      <TrustBadges />
      <About />
      <Catalog />
      <HowToOrder />
      <Reviews />
      <ContactFooter />
    </main>
  );
}
