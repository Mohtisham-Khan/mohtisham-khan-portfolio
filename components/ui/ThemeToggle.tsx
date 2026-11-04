"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
    >
      {mounted ? (
        isDark ? (
          <LuSun aria-hidden="true" className="h-[18px] w-[18px]" />
        ) : (
          <LuMoon aria-hidden="true" className="h-[18px] w-[18px]" />
        )
      ) : (
        <span aria-hidden="true" className="block h-[18px] w-[18px]" />
      )}
    </button>
  );
}
