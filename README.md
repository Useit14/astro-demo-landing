# Astro Demo Landing

Двухъязычный лендинг-демо на **Astro + TypeScript + Tailwind CSS + React**.

Собран как компактный пример работы со стеком из ТЗ: i18n RU/EN, React-острова
с разными стратегиями гидратации, SEO-база, production-ready сборка.

## Демо

- **Живая версия:** https://astro-demo-landing.netlify.app
- **Репозиторий:** https://github.com/Useit14/astro-demo-landing

## Что демонстрирует проект

- **Astro** — статическая генерация, файловый роутинг, `.astro`-компоненты
- **i18n** — RU/EN через отдельные роуты и типизированные словари
- **React-острова** — интерактив подключается через `client:*`
- **Tailwind CSS** — утилитарная стилизация
- **TypeScript (strict)** — строгая типизация словарей и пропсов
- **SEO-база** — canonical, hreflang, OG-теги, sitemap, robots.txt
- **Производительность** — минимум JS на клиенте, статика, zero-JS для статичных частей

## Структура
src/
├── components/ UI-компоненты
│ ├── Header.astro → статичный хедер (Astro)
│ ├── Footer.astro → статичный футер (Astro)
│ ├── LanguageSwitch.tsx → React-остров, client:load
│ ├── Faq.tsx → React-остров, client:visible
│ └── Modal.tsx → React-остров, client:idle
├── i18n/
│ ├── ru.ts → русский словарь
│ └── en.ts → английский словарь
├── types/
│ ├── i18n.ts → Lang, Dict
│ └── faq.ts → FaqItem
├── layouts/
│ └── Base.astro → общий layout + <head>, SEO
├── pages/
│ ├── index.astro → редирект на /ru/
│ ├── 404.astro
│ ├── ru/index.astro → русская версия
│ └── en/index.astro → английская версия
└── styles/
└── global.css → Tailwind-директивы

## Стек

| Слой | Технология |
|---|---|
| Фреймворк | Astro |
| Язык | TypeScript (strict) |
| UI | React 18 |
| Стили | Tailwind CSS |
| Деплой | Netlify |

## Установка

```bash
npm install
```

## Установка

```bash
npm run dev
```

## Сборка
```bash
npm run build
npm run preview 
```

## Маршруты
| URL |	Что показывает
|---|---|
/ |	редирект на /ru/ |
/ru/ |	русская версия лендинга |
/en/ |	английская версия лендинга |
любой другой |	404 |

## Интерактив
Реализован через React-острова с разными стратегиями гидратации:

Компонент |	Стратегия |	Почему |
|---|---|---|
LanguageSwitch |	client:load |	критичный UI, нужен сразу |
Faq |	client:visible |	гидрируется при попадании во вьюпорт |
Modal |	client:idle |	гидрируется, когда браузер свободен |
Статичные части (Header, Footer, layout) — на Astro, без JS на клиенте.

## SEO
- <meta name="robots" content="noindex, nofollow"> — демо не индексируется
- canonical-ссылки
- hreflang для RU/EN
- Open Graph и Twitter Card для превью в соцсетях
- sitemap-index.xml через @astrojs/sitemap
- robots.txt в public/