import type { FaqItem } from "./faq";

export type Lang = "ru" | "en";

export interface Dict {
  lang: Lang;
  switchLabel: string;
  nav: { home: string; features: string; faq: string; contact: string };
  hero: { title: string; subtitle: string; cta: string };
  faq: { title: string; items: FaqItem[] };
  modal: { title: string; body: string; close: string };
  footer: string;
}