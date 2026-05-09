"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import HowToOrder from "@/components/HowToOrder";
import Reviews from "@/components/Reviews";
import ContactFooter from "@/components/ContactFooter";
import Preloader from "@/components/Preloader";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-primary">
      <Preloader />
      <Navigation />
      <Hero />
      <ScrollReveal>
        <TrustBadges />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Catalog />
      </ScrollReveal>
      <ScrollReveal>
        <HowToOrder />
      </ScrollReveal>
      <ScrollReveal>
        <Reviews />
      </ScrollReveal>
      <ScrollReveal>
        <ContactFooter />
      </ScrollReveal>
    </main>
  );
}
