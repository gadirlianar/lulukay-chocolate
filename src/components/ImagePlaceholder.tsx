"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ImagePlaceholderProps {
  label?: string;
  emoji?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  emoji = "📸",
  className = "",
}: ImagePlaceholderProps) {
  const { t } = useLanguage();

  return (
    <div
      className={`flex flex-col items-center justify-center bg-accent/30 border-2 border-dashed border-accent rounded-2xl p-6 ${className}`}
    >
      <span className="text-4xl mb-2">{emoji}</span>
      {label && (
        <span className="text-sm font-body text-primary/80 text-center px-4 font-medium mb-1">
          {label}
        </span>
      )}
      <span className="text-xs font-body text-muted text-center">
        {t("placeholder.text")}
      </span>
    </div>
  );
}
