"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { handleConfettiClick } from "@/lib/confetti";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ContactFooter() {
  const { t } = useLanguage();

  const whatsappHref =
    "https://wa.me/77085037638?text=Здравствуйте%2C%20Алуа%21%20Хочу%20сделать%20заказ...";

  return (
    <>
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-surface to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-[52px] leading-tight font-heading mb-6 text-primary">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                handleConfettiClick(whatsappHref);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-magnetic flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-[#25D366]/30 w-full sm:w-auto justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              {t("contact.btn.wa")}
            </motion.button>

            <motion.a
              href="https://www.instagram.com/lulukay.chocolate.pvl/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-magnetic flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-[#FD1D1D]/30 w-full sm:w-auto justify-center"
            >
              <InstagramIcon size={24} />
              {t("contact.btn.ig")}
            </motion.a>
          </div>

          <p className="font-heading italic text-xl text-secondary">
            @lulukay.chocolate.pvl
          </p>
        </div>
      </section>

      {/* Footer Bottom Bar */}
      <footer className="bg-primary text-bg py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading italic text-xl text-accent">
            ✦ Lulukay Chocolate
          </div>
          <div className="text-sm text-bg/70 text-center md:text-left">
            {t("footer.rights")}
          </div>
          <div>
            <a
              href="https://www.instagram.com/lulukay.chocolate.pvl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg/70 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
