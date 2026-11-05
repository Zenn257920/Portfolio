import { useParams } from "@tanstack/react-router";

export default function ProjectsDetailsPage() {
  const { projectId } = useParams({ from: "/projects/$projectId" });

  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold capitalize">
        {projectId.replaceAll("-", " ")}
      </h1>
      <p className="text-zinc-400">Project details go here.</p>
    </section>
  );
}
