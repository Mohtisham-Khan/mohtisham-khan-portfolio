"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Keep in-page anchors smooth on the home page, but navigate home from the
  // blog routes where those sections don't exist.
  const toHome = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-5">
      <nav
        aria-label="Main"
        className="relative flex w-full max-w-[560px] items-center justify-between gap-6 rounded-[28px] border border-border bg-background/90 px-2.5 py-2 backdrop-blur-[5px] md:w-auto md:max-w-none md:gap-10"
      >
        <a
          href={toHome("#home")}
          aria-label={`${site.name} — home`}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground font-display text-[15px] font-bold tracking-wider text-background transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {site.monogram}
        </a>

        <span className="text-[13px] font-light whitespace-nowrap text-foreground md:hidden">
          Available for work
        </span>

        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={toHome(link.href)}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={toHome("#contact")}
          className="btn btn-solid hidden md:inline-flex"
        >
          Contact
        </a>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-5 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
              className="absolute inset-x-0 top-full z-50 mt-3 flex flex-col gap-1 rounded-3xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-[5px] md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={toHome(link.href)}
                  onClick={() => setOpen(false)}
                  className="nav-link rounded-xl px-3 py-2.5 text-lg hover:bg-surface"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={toHome("#contact")}
                onClick={() => setOpen(false)}
                className="btn btn-solid mt-2 w-full"
              >
                Contact
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>

      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 -z-10 cursor-default bg-foreground/20 md:hidden"
        />
      ) : null}
    </header>
  );
}
