import type { Dict } from "../types/i18n";


export const ru: Dict = {
  lang: "ru",
  switchLabel: "EN",
  nav: { home: "Главная", features: "Возможности", faq: "FAQ", contact: "Контакты" },
  hero: {
    title: "Демо-лендинг на Astro",
    subtitle: "React-острова, i18n, Tailwind — всё как в реальном проекте",
    cta: "Открыть модалку",
  },
  faq: {
    title: "Частые вопросы",
    items: [
      { q: "Что это за демо?", a: "Мини-проект на Astro + TS + Tailwind с React-островами." },
      { q: "Зачем оно нужно?", a: "Показать, что я умею работать со стеком из ТЗ." },
      { q: "Есть ли i18n?", a: "Да, RU и EN через отдельные роуты и словари." },
    ],
  },
  modal: { title: "Привет!", body: "Это React-остров, гидрированный на клиенте.", close: "Закрыть" },
  footer: "Собрано на Astro + React + Tailwind",
};
