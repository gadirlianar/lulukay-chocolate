"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";

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
            <a
              href="https://wa.me/77085037638?text=Здравствуйте%2C%20Алуа%21%20Хочу%20сделать%20заказ..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all shadow-lg hover:shadow-[#25D366]/30 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={24} />
              {t("contact.btn.wa")}
            </a>

            <a
              href="https://www.instagram.com/lulukay.chocolate.pvl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all shadow-lg hover:shadow-[#FD1D1D]/30 w-full sm:w-auto justify-center"
            >
              <InstagramIcon size={24} />
              {t("contact.btn.ig")}
            </a>
          </div>

          <p className="text-primary font-heading italic text-xl">
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
