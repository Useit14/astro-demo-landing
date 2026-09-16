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

```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── LanguageSwitch.tsx
│   ├── Faq.tsx
│   └── Modal.tsx
├── i18n/
│   ├── ru.ts
│   └── en.ts
├── types/
│   ├── i18n.ts
│   └── faq.ts
├── layouts/
│   └── Base.astro
├── pages/
│   ├── index.astro
│   ├── 404.astro
│   ├── ru/
│   │   └── index.astro
│   └── en/
│       └── index.astro
└── styles/
    └── global.css
```

### Назначение папок

| Путь | Что внутри |
|---|---|
| `components/` | UI-компоненты: Astro (Header, Footer) и React-острова (LanguageSwitch, Faq, Modal) |
| `i18n/` | Словари локализации RU/EN |
| `types/` | Общие TypeScript-типы (Lang, Dict, FaqItem) |
| `layouts/` | Общий layout с `<head>` и SEO-тегами |
| `pages/` | Файловый роутинг: страницы и 404 |
| `styles/` | Глобальные стили и директивы Tailwind |

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