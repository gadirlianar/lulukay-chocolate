"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    { icon: "🍓", titleKey: "badge.1.title", subKey: "badge.1.sub" },
    { icon: "🍫", titleKey: "badge.2.title", subKey: "badge.2.sub" },
    { icon: "🎁", titleKey: "badge.3.title", subKey: "badge.3.sub" },
    { icon: "🚕", titleKey: "badge.4.title", subKey: "badge.4.sub" },
  ];

  return (
    <section className="bg-surface py-8 border-y border-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 md:grid md:grid-cols-4 md:gap-8">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[240px] md:w-auto flex items-center gap-4 snap-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl bg-accent/20 w-12 h-12 flex items-center justify-center rounded-full">
                {badge.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-primary text-sm whitespace-nowrap">
                  {t(badge.titleKey)}
                </span>
                <span className="text-xs text-muted">
                  {t(badge.subKey)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
