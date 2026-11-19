import { Link } from "@tanstack/react-router";
import { projects } from "./projects-data";
import { Reveal } from "@/components/common/reveal";
import { motion } from "motion/react";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <Reveal><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">Selected work</p><h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1><p className="mt-4 text-zinc-400">A collection of things I’ve been building.</p></div></Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.id} delay={0.08}>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
          <Link
            to="/projects/$projectId"
            params={{ projectId: project.id }}
            className="group block h-full rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-blue-400/40 hover:bg-zinc-900/70 focus-visible:outline-2 focus-visible:outline-blue-300"
          >
            <div className="mb-8 flex aspect-[16/8] items-center justify-center overflow-hidden rounded-lg bg-zinc-900">
              {project.images[0] ? <img src={project.images[0].src} alt={project.images[0].alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /> : <span className="text-sm text-zinc-600">Project preview</span>}
            </div>
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{project.description}</p>
            {project.technologies.length > 0 && <ul className="mt-5 flex flex-wrap gap-2">{project.technologies.slice(0, 4).map((tech) => <li key={tech} className="rounded-full border border-zinc-800 px-2.5 py-1 text-xs text-zinc-500">{tech}</li>)}</ul>}
          </Link>
          </motion.div></Reveal>
        ))}
      </div>
    </section>
  );
}
