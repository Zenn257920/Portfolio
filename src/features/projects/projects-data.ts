export type Project = {
  id: string;
  title: string;
  description: string;
  overview: string;
  technologies: string[];
  images: { src: string; alt: string }[];
  liveUrl?: string;
  sourceUrl?: string;
};

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "A simple expense tracker.",
    overview:
      "This expense tracker helps you record purchases by amount, category, and date, then review your spending to see where your money goes. Use it to keep everyday expenses organized and make more informed budgeting decisions.",
    technologies: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "shadcn/ui",
      "TypeScript",
      "Neon Serverless PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "Zod",
      "Recharts",
    ],

    liveUrl: "https://expense-tracker-dusky-nine-25.vercel.app/",
    sourceUrl: "https://github.com/Zenn257920/expense-tracker",
    images: [
      {
        src: "/dashboard.png",
        alt: "Expense tracker dashboard",
      },
      {
        src: "/transactions.png",
        alt: "Transactions",
      },
      {
        src: "/categories.png",
        alt: "Categories",
      },
    ],
  },
  {
    id: "project-two",
    title: "Project 2",
    description: "Add a short description for your second project.",
    overview: "Add the overview for your second project here.",
    technologies: [],
    images: [],
  },
];
