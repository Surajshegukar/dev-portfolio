# Suraj Shegukar — Developer Portfolio 🚀

A modern, minimal, and pixel-perfect developer portfolio, blog, and products registry. Built using Next.js 16 (App Router), React 19, Framer Motion, and Tailwind CSS.

This portfolio is adapted from [abdulrehmanwaseem/My-Portfolio](https://github.com/abdulrehmanwaseem/My-Portfolio).

---

## ✨ Features

- **Dynamic Interactive Sections**: Beautiful, collapsible layout components displaying experiences, awards, certifications, and projects.
- **Projects Showcase**: Detailed records of work and personal projects (including *IntelJet - job inteligence collector* and the *ForgeDock* ecosystem).
- **Embedded Blog**: Optimized markdown/MDX-based blogging system.
- **LLM-Friendly Feeds**: Built-in endpoints providing clean Markdown representations of the portfolio for consumption by LLMs (AI assistants) at:
  - `/llms.txt`
  - `/llms-full.txt`
  - `/projects.md`
  - `/experience.md`
- **RSS & Sitemap**: Automated RSS feeds (`/rss`) and SEO sitemaps (`/sitemap.xml`).
- **Dynamic OG Images**: Real-time OpenGraph banner generation under `/og` routes.
- **Dark Mode Support**: Seamless transition between light and dark themes.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (using App Router and Turbopack)
- **Frontend library**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Documentation/MDX**: Fumadocs Core
- **Type Checking**: TypeScript

---

## 📁 Codebase Structure

```
dev-portfolio/
├── src/
│   ├── app/                      ← Next.js App Router (pages & API feeds)
│   ├── components/               ← Shared UI layout components
│   ├── config/                   ← General site configurations (site.ts)
│   ├── features/                 ← Feature-scoped logic & UI modules
│   │   ├── blog/                 ← Blog listings, MDX parser, and posts
│   │   ├── products/             ← Product pages (e.g. ShopFlow)
│   │   └── profile/              ← Profile data structure (projects, experiences, stack)
│   ├── styles/                   ← Global styling configurations
│   └── types/                    ← Shared TypeScript interfaces
├── projects-readme/              ← Source Readme documents for key projects
├── LICENSE                       ← MIT License (including original attribution)
└── package.json                  ← Package dependencies and build scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have **Node.js v18+** installed.

### 2. Installation

Install all package dependencies:

```bash
npm install
```

### 3. Development Server

Start the local development server on port `1408`:

```bash
npm run dev
```

Open [http://localhost:1408](http://localhost:1408) in your browser to view the portfolio.

### 4. Build and Production Run

To build the static optimized pages and preview the production build:

```bash
# Build the project
npm run build

# Start production server locally
npm run start
```

---

## 📄 License & Attribution

This project is licensed under the **MIT License**. It is cloned and customized from the original template by [Abdul Rehman Waseem](https://github.com/abdulrehmanwaseem/My-Portfolio). See the [LICENSE](./LICENSE) file for details.
