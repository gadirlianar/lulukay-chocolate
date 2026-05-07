"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const { lang, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-primary font-heading italic text-2xl font-semibold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ✦ Lulukay Chocolate
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <button onClick={() => scrollTo("about")} className="hover:text-muted transition-colors">
            {t("nav.about")}
          </button>
          <button onClick={() => scrollTo("catalog")} className="hover:text-muted transition-colors">
            {t("nav.catalog")}
          </button>
          <button onClick={() => scrollTo("reviews")} className="hover:text-muted transition-colors">
            {t("nav.reviews")}
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-muted transition-colors">
            {t("nav.contact")}
          </button>
        </nav>

        {/* Right Area */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Toggle */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface shadow-sm border border-accent/20 text-sm font-semibold">
            <button onClick={() => setLanguage("RU")} className={lang === "RU" ? "text-primary" : "text-muted font-normal hover:text-primary transition-colors"}>RU</button>
            <span className="text-muted/50">|</span>
            <button onClick={() => setLanguage("EN")} className={lang === "EN" ? "text-primary" : "text-muted font-normal hover:text-primary transition-colors"}>EN</button>
            <span className="text-muted/50">|</span>
            <button onClick={() => setLanguage("KZ")} className={lang === "KZ" ? "text-primary" : "text-muted font-normal hover:text-primary transition-colors"}>KZ</button>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/77085037638?text=Здравствуйте%2C%20Алуа%21%20Хочу%20сделать%20заказ..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-bg px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:bg-secondary transition-all"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-bg flex flex-col items-center pt-10 px-6 gap-6 md:hidden backdrop-blur-md">
          <button onClick={() => scrollTo("about")} className="text-2xl font-heading hover:text-muted transition-colors">
            {t("nav.about")}
          </button>
          <button onClick={() => scrollTo("catalog")} className="text-2xl font-heading hover:text-muted transition-colors">
            {t("nav.catalog")}
          </button>
          <button onClick={() => scrollTo("reviews")} className="text-2xl font-heading hover:text-muted transition-colors">
            {t("nav.reviews")}
          </button>
          <button onClick={() => scrollTo("contact")} className="text-2xl font-heading hover:text-muted transition-colors">
            {t("nav.contact")}
          </button>
          
          <div className="h-px w-16 bg-accent/50 my-4"></div>
          
          <div className="flex items-center gap-4 text-xl font-medium">
            <button onClick={() => { setLanguage("RU"); setMobileOpen(false); }} className={lang === "RU" ? "text-primary underline decoration-2 underline-offset-4" : "text-muted"}>RU</button>
            <span className="text-muted/50">|</span>
            <button onClick={() => { setLanguage("EN"); setMobileOpen(false); }} className={lang === "EN" ? "text-primary underline decoration-2 underline-offset-4" : "text-muted"}>EN</button>
            <span className="text-muted/50">|</span>
            <button onClick={() => { setLanguage("KZ"); setMobileOpen(false); }} className={lang === "KZ" ? "text-primary underline decoration-2 underline-offset-4" : "text-muted"}>KZ</button>
          </div>
        </div>
      )}
    </header>
  );
}
