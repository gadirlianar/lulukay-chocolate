"use client";

import React, { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Reviews() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    "/images/mes1.jpg",
    "/images/mes2.jpg",
    "/images/mes3.jpg",
    "/images/mes4.jpg",
  ];

  return (
    <section id="reviews" className="py-24 px-6 bg-surface border-y border-accent/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading mb-12 text-primary text-center">
          {t("reviews.title")}
        </h2>

        {/* Horizontal Slider (CSS Scroll Snap) */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4 -mx-4 md:px-0 md:mx-0"
          >
            {reviews.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[260px] md:w-[300px] bg-bg rounded-[2rem] shadow-sm snap-center border border-accent/20 hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <div className="w-full h-[460px] md:h-[530px] relative bg-surface">
                  <Image
                    src={src}
                    alt={`Review ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="w-full py-4 flex flex-col justify-center items-center bg-bg z-10 relative">
                  <div className="w-12 h-[2px] bg-accent/50 mb-3"></div>
                  <p className="text-xs text-muted italic">
                    {t("reviews.caption")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fade edges for desktop */}
          <div className="hidden md:block absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-surface to-transparent pointer-events-none"></div>
          <div className="hidden md:block absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-surface to-transparent pointer-events-none"></div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.instagram.com/lulukay.chocolate.pvl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors group"
          >
            {t("reviews.link").replace(" →", "")}
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
