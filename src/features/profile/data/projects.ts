import type { Project } from "../types/projects";

export const WORK_PROJECTS: Project[] = [
  {
    id: "chat-platform",
    title: "University Internal Chat Platform",
    period: { start: "2024" },
    link: "#",
    skills: ["Next.js", "Firebase", "WebSockets", "Tailwind CSS", "Real-Time Sync"],
    isExpanded: true,
    description: `A WhatsApp-style internal communication application for a university client, supporting 5,000+ active users with real-time messaging, media sharing, and core chat features.
- Architected the application using Next.js and Firebase for real-time data sync, focusing on scalability and reliability under concurrent user load.
- Created an intuitive and optimized chat UI supporting media attachments, message read receipts, and typing indicators.
- Designed secure rules and custom authentication logic to partition chat data among different user roles.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Chat+Platform",
  },
  {
    id: "easywork-erp",
    title: "Lead Management ERP",
    period: { start: "2024" },
    link: "#",
    skills: ["Next.js", "Express.js", "Prisma ORM", "MySQL", "Flutter API", "Push Notifications"],
    isExpanded: true,
    description: `A subscription-based lead marketplace ERP for real estate brokers (similar to NoBroker/MagicBricks for brokers), including broker registration, profiles, and lead discovery.
- Designed a credit-based subscription and payment system where brokers purchase credits to unlock lead contact details.
- Built REST APIs powering a companion Flutter mobile app, plus bulk lead import from Excel/Google Sheets and admin reporting dashboards.
- Implemented automated new-lead alerts, activity log tracking, and segmented push notifications targeted by user city, state, and account status.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=EasyWork+ERP",
  }
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    id: "forgedock",
    title: "ForgeDock — Productivity Tools Ecosystem",
    period: { start: "2025" },
    link: "https://forgedocks.vercel.app/",
    skills: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Shadcn UI", "PostgreSQL", "Supabase", "Clerk", "Framer Motion", "Cloudflare R2"],
    isExpanded: true,
    description: `A modern, SEO-optimized web productivity platform that unifies 100+ online utilities (PDF, images, dev tools, calculators, AI, and business helpers) into a single ecosystem.
- **Specialized Product Suites**: Built modular toolkits like PDFForge (merging/compressing), DevForge (formatting/decoding/testing), ImageForge (upscaling/background-removing), and AIForge.
- **Robust Architecture**: Built with Next.js 15 App Router, React 19, and Server Actions, using Clerk and NextAuth for secure multi-tenant sessions.
- **Serverless Storage & DB**: Utilizes Supabase (PostgreSQL) for transactional data, combined with Cloudflare R2 and AWS S3 for fast, secure file-processing uploads.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=ForgeDock",
  },
  {
    id: "job-intelligence-collector",
    title: "IntelJet - job inteligence collector",
    period: { start: "2026" },
    link: "https://inteljet.vercel.app/",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Chrome Extension", "IndexedDB", "Dexie.js", "Gemini AI", "Turborepo"],
    isExpanded: true,
    description: `A privacy-first, AI-augmented job tracking and application management platform managed in a unified Turborepo monorepo workspace.
- **Offline-First Chrome Extension (Manifest V3)**: Features domain-specific scrapers (LinkedIn, Indeed, Naukri, Wellfound) and a generic schema parser, with real-time popup auto-refresh using \`MutationObserver\` and IndexedDB (via Dexie.js) for local storage.
- **Resume Intelligence & Tailoring**: Extends resume parsing (PDF/DOCX) using \`pdf-parse\` and \`mammoth\`, featuring automated tailoring, comparison diff engine, and outcome tracking.
- **AI Orchestration & Telemetry**: Offloads heavy LLM queries (Gemini/OpenAI) using Redis-backed BullMQ background workers, complete with a real-time token, spend, and latency tracking dashboard.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=JobX",
  },
  {
    id: "research-agent",
    title: "Autonomous Research Agent Pipeline",
    period: { start: "2026" },
    link: "https://github.com/Surajshegukar/research-agent",
    skills: ["LangChain", "Google Gemini", "Tavily Search API", "BeautifulSoup", "Python", "uv"],
    isExpanded: true,
    description: `An autonomous, sequential multi-agent research pipeline that automates the process of gathering, analyzing, and synthesizing information.
- **Sequential Multi-Agent Architecture**: Built with LangChain and Google Gemini, utilizing specialized agents (Search, Reading, Writer, Critic) for the research lifecycle.
- **Web Search & Scraping**: Integrates Tavily Search API and BeautifulSoup web scraping to retrieve and extract real-time data from top relevant articles.
- **Quality Control**: Includes a Critic Agent that evaluates the written report for accuracy, clarity, and source quality, scoring it out of 10 with actionable suggestions.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=ResearchAgent",
  },
  {
    id: "ytrag-simple-rag-engine",
    title: "YTRAG — Local RAG Search Engine",
    period: { start: "2026" },
    link: "https://github.com/Surajshegukar/ytrag-simple-rag-engine",
    skills: ["FastAPI", "FAISS", "Google Gemini", "Sentence-Transformers", "LangChain", "Python", "Vanilla JS"],
    isExpanded: true,
    description: `A lightweight, local Retrieval-Augmented Generation (RAG) platform featuring a FastAPI backend and a premium Single-Page Application (SPA) web interface.
- **Multi-Format Ingestion**: Supports parsing and ingestion of PDF, Word, Excel, CSV, JSON, and plain text files with dynamic chunking using LangChain.
- **Local Embedding & Vector Search**: Generates dense vector representations using Sentence-Transformers and handles fast similarity search utilizing FAISS.
- **Contextual Synthesis & Premium UI**: Integrates Google Gemini for source-cited summaries of retrieved knowledge, complete with a drag-and-drop file uploader and interactive workspace layout.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=YTRAG",
  },

  {
    id: "algo-trading-ml",
    title: "Risk-Controlled Algorithmic Trading using ML",
    period: { start: "2024" },
    link: "https://github.com/Surajshegukar/risk-controlled-algorithmic-trading-using-machine-learning",
    skills: ["Python", "Machine Learning", "Jupyter Notebook", "Pandas", "Scikit-Learn"],
    description: `An algorithmic trading model using Machine Learning to analyze stock trends, assess trading risks, and execute risk-controlled options/equity strategies.
- Backtested machine learning models (Random Forest, SVM) on historical stock data to predict price direction.
- Designed key risk assessment metrics to mitigate drawdown and control options position sizing dynamically.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=AlgoML",
  },
  {
    id: "algo-trading-strategies",
    title: "Algorithmic Trading Strategies",
    period: { start: "2024" },
    link: "https://github.com/Surajshegukar/algorithmic-trading-strategies",
    skills: ["Python", "Jupyter Notebook", "NumPy", "Backtesting", "Quantitative Finance"],
    description: `A compilation of quantitative finance models, backtesting environments, momentum trading, and statistical arbitrage strategies tested in Jupyter Notebooks.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=AlgoTrade",
  },


];
