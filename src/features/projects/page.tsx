import { Link } from "@tanstack/react-router";

const PROJECTS = [
  { id: "project-one", title: "Project 1", description: "Description." },
  { id: "project-two", title: "Project 2", description: "Description." },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-zinc-400">These are my Projects.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            to="/projects/$projectId"
            params={{ projectId: project.id }}
            className="rounded-lg border border-zinc-800 p-6 transition-colors hover:border-zinc-600"
          >
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
