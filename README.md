# GaMMa VPN — pre-landing

Конверсионная страница-прелендинг для Telegram-бота
[@gammaVPN_bot](https://t.me/gammaVPN_bot). Единственная цель страницы —
переход в бота.

## Стек

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind CSS v4** — токены в [`src/index.css`](src/index.css)
- **Motion** (Framer Motion) — reveal, stagger, hover, аккордеон, sticky CTA

## Дизайн-система

Строгий монохром, снятый с фирменного знака: в аватаре бота 94% пикселей —
ровно `#000000` и `#FFFFFF`. Акцентного цвета на странице нет: иерархия
держится на весе, кегле и прозрачности, а CTA притягивает внимание тем, что
это единственная чисто-белая поверхность.

| Роль | Значение | Контраст на чёрном |
| --- | --- | --- |
| `--color-paper` | `#FFFFFF` | 21:1 |
| `--color-paper-dim` | `#A1A1A1` | 8.1:1 |
| `--color-paper-faint` | `#7A7A7A` | 4.8:1 |

Шрифты: **Onest** (кириллица-native), **Playfair Display italic** —
типографический акцент на одно-два слова, **JetBrains Mono** — служебные
лейблы.

Знак в [`src/components/icons.tsx`](src/components/icons.tsx) векторизован из
официального аватара (marching squares по субпиксельному контуру +
упрощение Дугласа–Пекера) и наследует `currentColor`, поэтому работает в обеих
полярностях бренда одним ассетом.

## Разработка

```bash
npm install
npm run dev
```

```bash
npm run build
```

```bash
npm run lint
```

## Тексты

Весь копирайт вынесен в [`src/lib/content.ts`](src/lib/content.ts) — правится
без касания вёрстки.

> **Важно:** `MONTHLY_USERS` — реальный публичный счётчик Telegram со страницы
> бота, снимок от 2026-08-04. Перепроверяйте перед деплоем либо убирайте:
> устаревшая цифра хуже её отсутствия.

## MCP

[`.mcp.json`](.mcp.json) подключает каталог компонентов
[21st.dev](https://21st.dev/mcp). Ключ читается из переменной окружения
`TWENTY_FIRST_API_KEY` и в репозиторий не попадает.
