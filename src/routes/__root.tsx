import { createRootRoute } from "@tanstack/react-router";
import DashboardLayout from "../components/layout/dashboard-layout";

export const Route = createRootRoute({
  component: DashboardLayout,
});
