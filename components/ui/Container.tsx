import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
  maxWidth = "1200px",
}: {
  children: ReactNode;
  className?: string;
  /** Pass "none" to opt out of the default max width (e.g. full-bleed heroes). */
  maxWidth?: string;
}) {
  return (
    <div
      className={`mx-auto w-full px-5 md:px-10 ${className}`}
      style={{ maxWidth }}
    >
      {children}
    </div>
  );
}
