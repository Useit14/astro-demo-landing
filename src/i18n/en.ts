import type { Dict } from "./ru";

export const en: Dict = {
  lang: "en",
  switchLabel: "RU",
  nav: { home: "Home", features: "Features", faq: "FAQ", contact: "Contacts" },
  hero: {
    title: "Astro demo landing",
    subtitle: "React islands, i18n, Tailwind — just like in a real project",
    cta: "Open modal",
  },
  faq: {
    title: "FAQ",
    items: [
      { q: "What is this demo?", a: "A mini project on Astro + TS + Tailwind with React islands." },
      { q: "Why does it exist?", a: "To show I can work with the stack from the brief." },
      { q: "Does it have i18n?", a: "Yes, RU and EN via separate routes and dictionaries." },
    ],
  },
  modal: { title: "Hi!", body: "This is a React island hydrated on the client.", close: "Close" },
  footer: "Built with Astro + React + Tailwind",
};