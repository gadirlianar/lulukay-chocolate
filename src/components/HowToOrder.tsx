"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function HowToOrder() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      titleKey: "howto.step1.title",
      textKey: "howto.step1.text",
    },
    {
      num: "02",
      titleKey: "howto.step2.title",
      textKey: "howto.step2.text",
    },
    {
      num: "03",
      titleKey: "howto.step3.title",
      textKey: "howto.step3.text",
    },
  ];

  return (
    <section className="py-24 px-6 bg-bg overflow-hidden relative">
      {/* Decorative noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading mb-4 text-primary">
          {t("howto.title")}
        </h2>
        <p className="text-lg text-muted mb-16">
          {t("howto.subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-accent/30 -z-10"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-surface border-4 border-bg flex items-center justify-center shadow-lg mb-6 relative z-10">
                <span className="font-heading text-2xl font-bold text-secondary">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">
                {t(step.titleKey)}
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-[250px]">
                {t(step.textKey)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-accent/10 border border-accent/20 py-4 px-6 rounded-2xl inline-block"
        >
          <p className="text-sm font-medium text-secondary">
            {t("howto.note")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
