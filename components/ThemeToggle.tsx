"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type Theme = "light" | "dark";

function getTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("theme-change", onStoreChange);
  return () => window.removeEventListener("theme-change", onStoreChange);
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event("theme-change"));
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getTheme,
    () => "light" as Theme,
  );
  const isDark = theme === "dark";

  // Re-apply after React hydration so the saved theme is not lost.
  useLayoutEffect(() => {
    const stored = localStorage.getItem("theme");
    applyTheme(stored === "dark" ? "dark" : "light");
  }, []);

  function toggleTheme() {
    applyTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-4 right-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-sm transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-200"
    >
      {isDark ? (
        <FaSun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <FaMoon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
