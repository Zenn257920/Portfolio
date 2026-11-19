import { motion } from "motion/react";
import { Reveal } from "@/components/common/reveal";

const SKILLS = [
  { name: "React", note: "UI development", mark: "R" },
  { name: "TypeScript", note: "Typed applications", mark: "TS" },
  { name: "Tailwind CSS", note: "Responsive styling", mark: "TW" },
  { name: "Next.js", note: "Full-stack React", mark: "N" },
  { name: "RTK Query", note: "Server-state management", mark: "RTK" },
  { name: "TanStack Query", note: "Server-state management", mark: "TSQ" },
  { name: "Zustand", note: "State management", mark: "Z" },
  { name: "Recharts", note: "Data visualization", mark: "RC" },
  { name: "PostgreSQL", note: "Relational data", mark: "PG" },
  { name: "Drizzle ORM", note: "Type-safe queries", mark: "D" },
  { name: "Better Auth", note: "Authentication", mark: "BA" },
  { name: "Zod", note: "Schema validation", mark: "Z" },
];

export default function AboutPage() {
  return (
    <div className="space-y-20">
      <section className="grid gap-8 border-b border-zinc-800 pb-14 md:grid-cols-[1fr_2fr] md:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
            A little about me
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              I'm a fresh graduate frontend developer passionate about building
              thoughtful, useful experiences for the web. I enjoy bringing clean
              interfaces to life with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="skills-title" className="space-y-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                Tools I work with
              </p>
              <h2
                id="skills-title"
                className="text-3xl font-bold tracking-tight"
              >
                Skills & technology
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              Technologies from my portfolio and featured project.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {SKILLS.map((skill, index) => (
            <Reveal key={skill.name} delay={Math.min(index % 4, 3) * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex min-h-28 items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-blue-400/40 hover:bg-zinc-900"
              >
                <span
                  aria-hidden="true"
                  className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-xs font-bold tracking-tight text-blue-300 transition-colors group-hover:bg-blue-400/20"
                >
                  {skill.mark}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-zinc-100">
                    {skill.name}
                  </span>
                  <span className="mt-1 block text-xs text-zinc-500">
                    {skill.note}
                  </span>
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
