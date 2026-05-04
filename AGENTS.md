<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
# Инструкции для кодинг-агента (Lumia Shop)

## Технологический стек:
- Framework: Next.js 16+ (App Router).
- Backend: NestJS (REST API).
- Styling: Tailwind CSS.
- Design System: Пастельные тона, основной цвет #E0F2FE (нежно-голубой).

## Правила написания кода:
1. **Никакого Pages Router.** Используй только App Router (`app/` директория).
2. **Server Components по умолчанию.** Используй `'use client'` только там, где нужна интерактивность.
3. **Типизация.** Всегда используй TypeScript. Не используй `any`.
4. **API Fetching.** Для запросов к нашему NestJS бэкенду используй `axios`.
5. **Компоненты.** Пиши функциональные компоненты в стиле "clean code".

## Важно:
Перед написанием нового функционала, проверь локальную документацию в `node_modules/next/dist/docs/`, если не уверен в изменениях API (Server Actions и т.д.).
<!-- END:nextjs-agent-rules -->
