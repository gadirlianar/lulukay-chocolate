"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/77085037638?text=Здравствуйте%2C%20Алуа%21%20Хочу%20сделать%20заказ..."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="WhatsApp"
    >
      <div className="absolute inset-0 rounded-full animate-[ping_3s_ease-in-out_infinite] bg-[#25D366] opacity-30"></div>
      <MessageCircle size={28} className="relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-16 px-3 py-1.5 bg-primary text-bg text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
        {t("float.tooltip")}
      </span>
    </a>
  );
}
