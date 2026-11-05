import { Link, Outlet } from "@tanstack/react-router";
import StatusDot from "../common/status-dot";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-lg font-bold tracking-tight">
            <div className="flex items-center gap-2">
              Kaung Htet Zan Thar
              <StatusDot />
            </div>
          </Link>

          <ul className="flex items-center gap-6 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: true }}
                  className="group relative py-2 text-gray-400 transition-colors duration-300 hover:text-blue-400 [&.active]:text-blue-400"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-full group-[.active]:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
