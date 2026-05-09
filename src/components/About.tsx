"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <span className="text-xs tracking-widest uppercase font-semibold text-secondary/80 mb-4 px-3 py-1 bg-accent/20 rounded-full w-max">
            {t("about.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-primary">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            {t("about.body")}
          </p>
          <p className="font-heading italic text-xl text-secondary">
            {t("about.sign")}
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/5] max-w-md mx-auto"
        >
          {/* Decorative offset border */}
          <div className="absolute inset-0 border-2 border-accent rounded-[2rem] translate-x-4 translate-y-4 -z-10"></div>
          
          <div className="luxury-img-container rounded-[2rem] w-full h-full">
            <Image
              src="/images/about.png"
              alt="About Alua"
              fill
              className="object-cover rounded-[2rem] shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
