"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "RU" | "EN";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  RU: {
    "nav.about": "О нас",
    "nav.catalog": "Каталог",
    "nav.reviews": "Отзывы",
    "nav.contact": "Контакты",
    "nav.cta": "Написать в WhatsApp",
    "hero.eyebrow": "Павлодар • Ручная работа • Только свежее",
    "hero.title": "Искусство в каждом кусочке 🍓",
    "hero.subtitle": "Клубника и финики в премиальном бельгийском шоколаде на заказ. Идеальный подарок для любого повода. Доставка по Павлодару.",
    "hero.btn.primary": "Выбрать набор →",
    "hero.btn.outline": "Написать в WhatsApp",
    "badge.1.title": "Только свежие ягоды",
    "badge.1.sub": "Ежедневные закупки",
    "badge.2.title": "Шоколад Callebaut",
    "badge.2.sub": "Оригинальный бельгийский",
    "badge.3.title": "Индивидуальный дизайн",
    "badge.3.sub": "Под любой повод",
    "badge.4.title": "Доставка по Павлодару",
    "badge.4.sub": "Быстро и аккуратно",
    "about.eyebrow": "Обо мне",
    "about.title": "Привет, меня зовут Алуа 🫶",
    "about.body": "Я создаю клубнику и финики в шоколаде на заказ. Я вкладываю душу в каждый заказ и хочу радовать вас красивыми и вкусными наборами. У меня есть опыт в этом деле, и к каждой коробочке я подхожу с ювелирной аккуратностью, вниманием к деталям и эстетике ✨",
    "about.sign": "— Алуа, основатель Lulukay Chocolate",
    "catalog.title": "Каталог",
    "catalog.subtitle": "Выберите свой идеальный набор",
    "catalog.card1.title": "КЛУБНИКА В БОКСАХ 🍓🍫",
    "catalog.card1.note": "Можно больше? Конечно! Соберем индивидуальный бокс любого размера.",
    "catalog.card1.btn": "Заказать клубнику",
    "catalog.card2.title": "ФИНИКИ В ШОКОЛАДЕ 🫘🍫",
    "catalog.card2.btn": "Заказать финики",
    "catalog.hit": "ХИТ 🔥",
    "howto.title": "Как сделать заказ?",
    "howto.subtitle": "Всё просто — 3 шага",
    "howto.step1.title": "Выбираете набор",
    "howto.step1.text": "Изучите каталог и выберите подходящий размер и вид.",
    "howto.step2.title": "Пишете нам",
    "howto.step2.text": "Напишите в WhatsApp или Instagram Direct для согласования деталей и дизайна.",
    "howto.step3.title": "Получаете заказ",
    "howto.step3.text": "Алуа создаёт вашу идеальную коробочку и доставляет по Павлодару 🚕",
    "howto.note": "📩 Принимаем заказы через WhatsApp и Instagram. Telegram не используется.",
    "reviews.title": "Что говорят клиенты 🤍",
    "reviews.caption": "Отзыв из Instagram Stories",
    "reviews.link": "Смотреть все отзывы в Instagram →",
    "contact.title": "Буду ждать ваши заказы ✨",
    "contact.subtitle": "Напишите прямо сейчас, чтобы обсудить детали вашего идеального подарка.",
    "contact.btn.wa": "Написать в WhatsApp",
    "contact.btn.ig": "Написать в Instagram",
    "footer.rights": "© 2026 Lulukay Chocolate. Доставка по г. Павлодар.",
    "float.tooltip": "Написать нам",
    "placeholder.text": "Фото будет добавлено"
  },
  EN: {
    "nav.about": "About",
    "nav.catalog": "Catalog",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.cta": "Order on WhatsApp",
    "hero.eyebrow": "Pavlodar • Handmade • Only Fresh",
    "hero.title": "Art in Every Bite 🍓",
    "hero.subtitle": "Strawberries and dates in premium Belgian chocolate, made to order. The perfect gift for any occasion. Delivery across Pavlodar.",
    "hero.btn.primary": "Browse Catalog →",
    "hero.btn.outline": "Message on WhatsApp",
    "badge.1.title": "Only Fresh Berries",
    "badge.1.sub": "Daily sourced",
    "badge.2.title": "Callebaut Chocolate",
    "badge.2.sub": "Original Belgian",
    "badge.3.title": "Custom Design",
    "badge.3.sub": "For any occasion",
    "badge.4.title": "Delivery in Pavlodar",
    "badge.4.sub": "Fast & careful",
    "about.eyebrow": "About Me",
    "about.title": "Hi, I'm Alua 🫶",
    "about.body": "I create chocolate-dipped strawberries and dates, made to order. I pour my heart into every order — beautiful boxes that bring joy. Each set is crafted with jeweller-like precision, a keen eye for detail, and love for aesthetics ✨",
    "about.sign": "— Alua, founder of Lulukay Chocolate",
    "catalog.title": "Catalog",
    "catalog.subtitle": "Choose your perfect set",
    "catalog.card1.title": "STRAWBERRIES IN BOXES 🍓🍫",
    "catalog.card1.note": "Need more? Of course! We'll make a custom box of any size.",
    "catalog.card1.btn": "Order Strawberries",
    "catalog.card2.title": "DATES IN CHOCOLATE 🫘🍫",
    "catalog.card2.btn": "Order Dates",
    "catalog.hit": "HIT 🔥",
    "howto.title": "How to Order?",
    "howto.subtitle": "It's simple — 3 steps",
    "howto.step1.title": "Choose Your Set",
    "howto.step1.text": "Browse the catalog and pick your preferred size and type.",
    "howto.step2.title": "Message Us",
    "howto.step2.text": "Write to us on WhatsApp or Instagram Direct to confirm details and design.",
    "howto.step3.title": "Receive Your Order",
    "howto.step3.text": "Alua crafts your perfect box and delivers it across Pavlodar 🚕",
    "howto.note": "📩 Orders accepted via WhatsApp and Instagram only. We are not on Telegram.",
    "reviews.title": "What Customers Say 🤍",
    "reviews.caption": "Review from Instagram Stories",
    "reviews.link": "See all reviews on Instagram →",
    "contact.title": "Looking forward to your orders ✨",
    "contact.subtitle": "Message now to discuss the details of your perfect gift.",
    "contact.btn.wa": "Message on WhatsApp",
    "contact.btn.ig": "Message on Instagram",
    "footer.rights": "© 2026 Lulukay Chocolate. Delivery in Pavlodar.",
    "float.tooltip": "Message Us",
    "placeholder.text": "Photo will be added"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("RU");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang && (savedLang === "RU" || savedLang === "EN")) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    setLang(prev => {
      const nextLang = prev === "RU" ? "EN" : "RU";
      localStorage.setItem("lang", nextLang);
      return nextLang;
    });
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
