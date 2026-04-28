"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToCatalog = () => {
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start z-10"
        >
          <span className="text-xs tracking-widest uppercase font-semibold text-secondary/80 mb-4 px-3 py-1 bg-accent/20 rounded-full">
            {t("hero.eyebrow")}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-heading mb-6 text-primary">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-muted mb-10 max-w-lg leading-relaxed whitespace-pre-line">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToCatalog}
              className="bg-primary text-bg px-8 py-4 rounded-full font-medium hover:scale-105 hover:bg-secondary transition-all shadow-lg hover:shadow-xl text-center"
            >
              {t("hero.btn.primary")}
            </button>
            <a
              href="https://wa.me/77085037638?text=Здравствуйте%2C%20Алуа%21%20Хочу%20сделать%20заказ..."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-medium hover:bg-primary/5 transition-colors text-center"
            >
              {t("hero.btn.outline")}
            </a>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[500px] lg:h-[600px] z-10"
        >
          {/* Decorative blur blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/30 rounded-full blur-3xl -z-10"></div>
          
          <div className="w-full h-full animate-[floating_4s_ease-in-out_infinite] relative">
            <Image
              src="/images/hero.JPG"
              alt="Hero"
              fill
              className="object-cover rounded-[2rem] shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted animate-bounce cursor-pointer"
        onClick={scrollToCatalog}
      >
        <ChevronDown size={32} />
      </motion.div>

      <style jsx global>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
