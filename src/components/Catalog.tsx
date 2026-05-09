"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { handleConfettiClick } from "@/lib/confetti";

export default function Catalog() {
  const { t } = useLanguage();

  const whatsappStrawberry =
    "https://wa.me/77085037638?text=Здравствуйте%2C%20Алуа%21%20Хочу%20заказать%20клубнику%20в%20шоколаде...";
  const whatsappDates =
    "https://wa.me/77085037638?text=Здравствуйте%2C%20Алуа%21%20Хочу%20заказать%20финики%20в%20шоколаде...";

  return (
    <section id="catalog" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-4 text-primary">
            {t("catalog.title")}
          </h2>
          <p className="text-lg text-muted">
            {t("catalog.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Card 1: Strawberries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, rotateX: 2, rotateY: -2, zIndex: 10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            style={{ transformPerspective: 1000 }}
            className="bg-bg rounded-[2rem] p-6 shadow-sm border border-accent/10 flex flex-col cursor-pointer"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] mb-8 luxury-img-container rounded-t-2xl md:rounded-[1.5rem]">
              <Image
                src="/images/catalog1.png"
                alt="Клубника в шоколаде"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-t-2xl md:rounded-[1.5rem]"
              />
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mb-6 text-primary text-center">
              {t("catalog.card1.title")}
            </h3>

            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3 mb-8">
                <PriceRow items="6 шт." price="5 000 ₸" />
                <PriceRow items="9 шт." price="7 900 ₸" />
                <PriceRow items="12 шт." price="8 500 ₸" hit={t("catalog.hit")} />
                <PriceRow items="16 шт." price="11 850 ₸" />
                <PriceRow items="20 шт." price="15 000 ₸" />
                <PriceRow items="25 шт." price="20 000 ₸" />
              </div>

              <div>
                <p className="text-sm text-muted text-center italic mb-6">
                  {t("catalog.card1.note")}
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleConfettiClick(whatsappStrawberry);
                  }}
                  className="btn-magnetic block w-full bg-primary text-bg py-4 rounded-full text-center font-medium hover:bg-secondary transition-colors"
                >
                  {t("catalog.card1.btn")}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Dates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, rotateX: 2, rotateY: 2, zIndex: 10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ transformPerspective: 1000 }}
            className="bg-bg rounded-[2rem] p-6 shadow-sm border border-accent/10 flex flex-col cursor-pointer"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] mb-8 luxury-img-container rounded-t-2xl md:rounded-[1.5rem]">
              <Image
                src="/images/catalog2.JPG"
                alt="Финики в шоколаде"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-t-2xl md:rounded-[1.5rem]"
              />
            </div>
            
            <h3 className="text-2xl font-heading font-semibold mb-6 text-primary text-center">
              {t("catalog.card2.title")}
            </h3>

            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3 mb-8">
                <PriceRow items="Набор S (6 шт.)" price="3 800 ₸" />
                <PriceRow items="Набор M (9 шт.)" price="5 600 ₸" />
                <PriceRow items="Набор L (12 шт.)" price="7 590 ₸" />
              </div>

              <div className="mt-auto">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleConfettiClick(whatsappDates);
                  }}
                  className="btn-magnetic block w-full border-2 border-primary text-primary py-4 rounded-full text-center font-medium hover:bg-primary/5 transition-colors"
                >
                  {t("catalog.card2.btn")}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PriceRow({ items, price, hit }: { items: string; price: string; hit?: string }) {
  return (
    <div className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-surface transition-colors group">
      <div className="flex items-center gap-3">
        <span className="font-medium text-primary group-hover:text-secondary transition-colors">{items}</span>
        {hit && (
          <span className="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-md animate-pulse">
            {hit}
          </span>
        )}
      </div>
      <div className="flex-grow mx-4 border-b border-dashed border-accent/50"></div>
      <span className="font-semibold text-primary">{price}</span>
    </div>
  );
}
