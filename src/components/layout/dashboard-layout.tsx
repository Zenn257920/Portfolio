import { useState } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import StatusDot from "../common/status-dot";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

export default function DashboardLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800">
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg font-bold tracking-tight">
              <div className="flex items-center gap-2">
                <span>Portfolio</span>
                <StatusDot />
              </div>
            </Link>

            <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
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

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-md p-2 text-gray-300 transition-colors hover:bg-zinc-800 hover:text-white md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <HugeiconsIcon
                icon={isMenuOpen ? Cancel01Icon : Menu01Icon}
                size={24}
                strokeWidth={2}
              />
            </button>
          </div>

          {isMenuOpen && (
            <ul
              id="mobile-navigation"
              className="mt-4 flex flex-col gap-2 border-t border-zinc-800 pt-4 text-sm font-medium md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: true }}
                    onClick={closeMenu}
                    className="block rounded-md px-3 py-3 text-gray-400 transition-colors hover:bg-zinc-800 hover:text-blue-400 [&.active]:bg-zinc-800 [&.active]:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 sm:px-6">
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
