import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "../features/contact/page";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ContactPage />;
}
