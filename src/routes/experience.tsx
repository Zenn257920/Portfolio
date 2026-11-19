import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/reveal";
import { projects } from "@/features/projects/projects-data";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

function ExperiencePage() {
  const featured = projects[0];

  return (
    <section className="space-y-12">
      <Reveal>
        <div className="border-b border-zinc-800 pb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
            Experience
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Learning by building.
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            As a fresh graduate frontend developer, I’m growing my skills by
            building practical web applications. Here’s a project from my
            portfolio.
          </p>
        </div>
      </Reveal>
      {featured && (
        <Reveal delay={0.1}>
          <article className="relative max-w-3xl border-l border-blue-400/40 pl-7">
            <span
              aria-hidden="true"
              className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-blue-300 ring-4 ring-zinc-950"
            />
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Featured project
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{featured.title}</h2>
            <p className="mt-3 max-w-xl leading-7 text-zinc-400">
              {featured.overview}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {featured.technologies.slice(0, 6).map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                >
                  {technology}
                </li>
              ))}
            </ul>
            <Link
              to="/projects/$projectId"
              params={{ projectId: featured.id }}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200"
            >
              View project <ArrowUpRight size={16} />
            </Link>
          </article>
        </Reveal>
      )}
    </section>
  );
}
