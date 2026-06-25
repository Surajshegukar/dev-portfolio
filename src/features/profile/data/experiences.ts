import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "quickensol",
    companyName: "Quickensol IT Solutions LLP",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Q&backgroundColor=ffc107",
    positions: [
      {
        id: "quickensol-frontend-dev",
        title: "Web Designer / Front-End Developer",
        employmentPeriod: {
          start: "10.2024",
          end: "06.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `
- Contributed to **30+ client projects** spanning ERP, HRMS, and e-commerce platforms, delivering **10+ projects end-to-end** as a full-stack developer using MERN, Next.js, Express.js, and CodeIgniter (CI3).
- Designed and implemented CRM, ERP, admin dashboards, vendor management systems, and business platforms with responsive UI/UX and performance-focused architecture using React.js, Next.js, Express.js, and Prisma.
- Built reusable React components and modular frontend architectures using React Hooks, Context API, and Tailwind CSS to improve scalability, state management, and cross-browser responsiveness.
- Worked in a Turborepo monorepo architecture to manage scalable Next.js, Express.js, and Prisma-based applications with shared packages and centralized APIs.
- Developed secure REST APIs, JWT/OAuth-based authentication systems, role-based access control, and CRUD operations using Express.js, Prisma ORM, MongoDB, SQL, Firebase, PHP, and MySQL.
- Built custom WordPress solutions including themes, plugins, custom post types, and SEO-friendly business websites, and integrated third-party APIs, payment gateways, and real-time chat features.
- Optimized applications for SEO, page speed, Core Web Vitals, and accessibility; handled debugging, deployment, and hosting using Git, GitHub, Linux, and cPanel in agile workflows.
        `,
        skills: [
          "React.js",
          "Next.js",
          "Express.js",
          "Prisma ORM",
          "Turborepo",
          "Tailwind CSS",
          "MongoDB",
          "MySQL",
          "PHP",
          "WordPress",
          "Git",
          "REST APIs",
          "SEO"
        ],
        isExpanded: true,
      }
    ],
    theme: false,
  },
  {
    id: "fulcrum",
    companyName: "Fulcrum Resources Infinity Pvt Ltd",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=F&backgroundColor=00a0e3",
    positions: [
      {
        id: "fulcrum-intern",
        title: "Full Stack Web Developer Intern",
        employmentPeriod: {
          start: "06.2024",
          end: "10.2024",
        },
        employmentType: "Internship",
        icon: "code",
        description: `
- Designed, developed, and maintained responsive websites and web applications using HTML5, CSS3, JavaScript, and modern JavaScript frameworks (MERN stack).
        `,
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "MERN Stack",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB"
        ],
        isExpanded: true,
      }
    ],
    theme: false,
  }
];
