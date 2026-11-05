import { createFileRoute } from "@tanstack/react-router";
import ProjectsPage from "../../features/projects/page";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ProjectsPage />;
}
