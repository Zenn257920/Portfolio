import { createFileRoute } from "@tanstack/react-router";
import ProjectsDetailsPage from "../../features/projects/project-details-page";

export const Route = createFileRoute("/projects/$projectId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ProjectsDetailsPage />;
}
