# CLAUDE.md — V006 FlowTech

> Был `A100 - FlowTech` (категория «Знакомые») до реорга портфеля 2026-06-15 → теперь
> **V006** в `007 - Ventures/`. Старое имя встречается в старых документах.

## Клиент и проект

**Клиент:** Никита Усачёв — ООО «Инженер Атмосферы», сайт `flowtech.moscow`
**Продукт:** компактные аэродинамические трубы под маркой **Flowtech**
**Статусы компании:** перспективный портфель Фонда НТИ («Аэронет», «Кружковое движение»),
резидент Сколково и НПЦ БАС «ПРОТОС», участник Московского инновационного кластера
**Язык:** русский. **Связь:** Telegram, отвечает быстро, часто голосовыми
**Оформление:** через ИП Земцов Д. А.; клиенту нужны закрывающие документы на юрлицо
(обосновать расходы), возможно отчуждение прав на ООО

### Текущее состояние (2026-07-19)

**Активный запрос — фирстиль и брендбук, НЕ сайт.** Никита явно попросил не смешивать:
«я бы не объединял сайт и эту историю, так как это может поставить странные рамки».

- **Бюджет:** 150–200 тыс. ₽ на фирстиль. Готов добавить, если результат сильный
- **Исполнитель по дизайну:** Даниил Зенцов; ведение/договор — Денис
- **Отправлено:** опросник `docs/brandbook-questionnaire-ru.md` (черновик, см. ниже)
- **Ждём:** ответы → КП с этапами, сроками, ценой + примеры работ

**Боль клиента, его словами:** сайт, мерч, логотип и презентации **в разном стиле** — нужна
единая история. За июль хорошего дизайнера не нашли: либо оверпрайс (30 тыс. за логотип),
либо «странно и много правок».

**Что просил сделать (его ТЗ):** лого (альт-вариант + русификация), лого конкурса «Технологии
потока», форма презентаций, мерч, визитки, бланк письма, возможно доработка стилистики сайта.

**Хвост работ за горизонтом фирстиля** (из голосовых — большой и реальный): презентации по
образовательному направлению, второй сайт (образовалка), платформа онлайн-курсов, баннеры,
постеры, брошюры и раздатка под выставки, фон для видеороликов, серия материалов для «Научных
развлечений», доработка интерфейсов. Клиент готов заказать «сразу много чего» и прописать
это в договоре.

**Контекст, влияющий на сроки:** команда в отъезде **29 июля – 2 августа** (конкурс с НТИ).
Проводили Всероссийскую олимпиаду школьников и отборочный этап нацсоревнований с НТИ.

**Хорошие новости от клиента:** получен контракт на поставку трубы, поданы две заявки на
крупные гранты. ИП получило лицензию на образовательную деятельность.

**Клиент просил:** контакты по отшиву мерча и по изготовлению. Печать частично закрывают
своими партнёрами (ДК).

### 🔴 Открытый риск — товарный знак

Никита упомянул: «мы пытались ещё полгода назад логотип» зарегистрировать. **Статус заявки
неизвестен**, и от него зависит, можно ли вообще менять знак: если экспертиза идёт, а начертание
поменять — регистрация защитит не то, чем пользуются. Это первый вопрос опросника, и он должен
быть закрыт **до** старта работ по логотипу.

### Замечания по ведению

- Клиент прямо предупредил: «правок будет много, обсуждений будет много». Прошлые подрядчики
  ломались именно на этом → в договоре нужен **лимит раундов** и критерии приёмки.
- Никита перестраивает формат работы, потому что «всё замкнуто» на нём и не хватает времени.
  Из этого следует практическое: просить **слот времени**, а не «когда получится», и держать
  опросники короткими (текущий — 14 вопросов, 11 из них с вариантами).
- Отвечает голосовыми — расшифровки складывать в `docs/`, чтобы факты не терялись.

## Состояние репозитория

**Ветка `v3-dev`. Последний коммит — 2026-03-22** (CI workflow). То есть **код не трогали
четыре месяца**: текущая активность по проекту — дизайн и переговоры, а не разработка.
`docs/questionnaire-ru.md` (420 строк) — старый опросник **по сайту**, не по фирстилю.

## Где правда, когда источники расходятся

1. **Прод `flowtech.moscow` и `git log`** — что реально выкачено.
2. **`docs/`** — опросники, ТЗ клиента, переписка.
3. **Этот файл** — стабильные рамки и договорённости.

Раздел «Текущее состояние» — снимок на дату; при расхождении с перепиской правы документы в `docs/`.

## Project Overview

Marketing website for FlowTech aerodynamic wind tunnel (ADT) company. Three design variants (A/B/C) for client review, sharing i18n, theming, and base components via a pnpm monorepo.

## Architecture

- `site/` — Production v1 site (frozen, DO NOT modify). Uses npm, not pnpm.
- `packages/shared/` — Shared i18n, theme system, base components, fonts/assets
- `packages/variant-a/` — Evolutionary redesign (cloned from current site, TypeScript)
- `packages/variant-b/` — Moderate departure (borrows core DNA, more changes)
- `packages/variant-c/` — Different approach

`site/` is excluded from the pnpm workspace. Only `packages/*` are workspace members.

## Commands

```
pnpm install                  # Install all workspace dependencies
pnpm dev:a                    # Variant A dev server (port 3001)
pnpm dev:b                    # Variant B dev server (port 3002)
pnpm dev:c                    # Variant C dev server (port 3003)
pnpm build:all                # Build all variants
pnpm typecheck                # TypeScript check across all packages
pnpm lint                     # ESLint across all packages
pnpm site:dev                 # Run original v1 site (uses npm internally)
```

## Tech Stack

- React 18, Vite 5, Tailwind CSS 3, TypeScript 5.4+
- i18next + react-i18next for internationalization
- pnpm workspaces
- No build step for shared package (consumed as source by Vite)

## Shared Package Usage

```tsx
// i18n — import once in main.tsx as side-effect
import '@flowtech/shared/i18n'

// Theme provider — wrap App
import { ThemeProvider, useTheme } from '@flowtech/shared/theme'

// Components
import { Button, LanguageSwitcher, ThemeToggle } from '@flowtech/shared/components'

// CSS — import in variant's index.css BEFORE tailwind directives
// @import '@flowtech/shared/assets/fonts.css';
// @import '@flowtech/shared/theme/tokens.css';
```

## i18n

- Three languages: Russian (default), English, Chinese
- Namespaces: common, hero, about, product, schools, news, contacts
- Translations in `packages/shared/i18n/locales/{ru,en,zh}/`
- Usage: `const { t } = useTranslation('hero')` then `t('title')`

## Theming

- CSS custom properties in `packages/shared/theme/tokens.css`
- Light/dark toggle via `.dark` class on `<html>` (Tailwind `darkMode: 'class'`)
- Semantic Tailwind classes: `bg-bg-primary`, `text-text-primary`, `text-text-muted`, etc.
- Legacy aliases still work: `bg-main`, `from-gd0`, `border-border`, etc.

## Conventions

- All v2 code is TypeScript (.ts/.tsx). site/ remains .jsx (frozen).
- Components: PascalCase folders with matching .tsx file (e.g., `Header/Header.tsx`)
- All new text content must use i18n `t()` calls, never hardcoded strings
- Tailwind shared via preset pattern — variants extend `packages/shared/theme/tailwind-preset.ts`
- Brand assets in shared, variant-specific images in each variant's `public/assets/`
- Content is in Russian with English and Chinese translations to be completed

## Как заканчивать ход (правило Дениса, 2026-07-19)

🔴 **Любая передача управления заканчивается AskUserQuestion. Без исключений.**

Старое правило говорило «когда нужен Денис ИЛИ когда готово» — и пропускало третий случай:
**работа встала посреди, это не вопрос и не конец сессии.** Дословно: *«когда проект активен и
он останавливается без вопроса или предложения и это не конец сессии, я должен читать всё»*.
Именно там он получал отчёт вместо вопроса.

**Бюджет терминала — ~8 строк до вопроса.** Денис alt-tab'ается между 6–10 живыми проектами.
Длинное сообщение — это не тщательность, а неоплаченная работа, переданная уставшему читателю.

Форма конца хода:

1. **Одна строка — что изменилось**, с тегом проекта и числом, если оно есть
   (`Nivium: 5 невидимых узлов графа проиндексированы, 58 → 63`).
2. **Одна строка — что заблокировано и на ком**, если есть
   (`SEMPACK: ждём CloudPayments — от тебя ничего не нужно`).
3. **AskUserQuestion.** Варианты ранжированы, рекомендованный первым, **каждый с размером**
   (5 минут / сессия / нужен созвон).

Детали, таблицы, счётчики тестов, обоснования, insight → **в файл**, одним кликабельным путём.
Не рендерить в терминал «чтобы не потерялось»: если важно — место в durable-файле, если нет —
не набирать вовсе.

🔴 **Никогда не заканчивать таблицей состояния.** Таблица отвечает на «каково состояние всего» —
вопрос, которого он не задавал. Его вопрос всегда «что мне сейчас делать».

**Язык по адресату:** разговор — English; документы для Дениса (handoff, план, разбор) — русский
с английскими терминами (`push`, `migration`, `staging`); клиентские документы — русский;
код, коммиты, ADR, идентификаторы — English.
