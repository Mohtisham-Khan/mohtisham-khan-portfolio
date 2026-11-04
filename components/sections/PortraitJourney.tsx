"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

type Points = {
  /** Progress where the card begins leaving the hero pose. */
  pStart: number;
  /** Progress of the Service pose (rotateY 150 / x 340 / scale .9). */
  pServices: number;
  /** Progress of the About pose (rotateY 340 / x 340 / scale 1). */
  pAbout: number;
};

const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

function measure(wrapper: HTMLElement): Points | null {
  const vh = window.innerHeight;
  const wrapRect = wrapper.getBoundingClientRect();
  if (wrapRect.height <= vh) return null;
  const sMax = wrapRect.height - vh;

  let pServices = 0.5;
  const services = document.getElementById("services");
  if (services) {
    const rect = services.getBoundingClientRect();
    const center = rect.top + window.scrollY + rect.height / 2 - vh / 2;
    pServices = clamp(center / sMax, 0.15, 0.75);
  }

  let pAbout = 0.85;
  const about = document.getElementById("about");
  if (about) {
    const rect = about.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    pAbout = clamp((top + 0.4 * rect.height - vh) / sMax, pServices + 0.12, 0.97);
  }

  return { pStart: 0.05, pServices, pAbout };
}

export default function PortraitJourney({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState<Points | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const pStart = points?.pStart ?? 0.05;
  const pServices = points?.pServices ?? 0.5;
  const pAbout = points?.pAbout ?? 0.85;

  // Portavia's exact scroll targets, driven continuously by scroll progress:
  //   x       0 → 340 → 340
  //   rotateY 0 → 150 → 340
  //   rotate  0 → 10  → 5
  //   scale   1 → .9  → 1
  // y stays 0 in the reference - the card only drifts right and flips.
  const x = useTransform(
    scrollYProgress,
    [0, pStart, pServices, pAbout, 1],
    [0, 0, 340, 340, 340],
    { clamp: true, ease: easeInOut },
  );

  const rotateY = useTransform(
    scrollYProgress,
    [0, pStart, pServices, pAbout, 1],
    [0, 0, 150, 340, 340],
    { clamp: true, ease: easeInOut },
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, pStart, pServices, pAbout, 1],
    [0, 0, 10, 5, 5],
    { clamp: true, ease: easeInOut },
  );

  const scale = useTransform(
    scrollYProgress,
    [0, pStart, pServices, pAbout, 1],
    [1, 1, 0.9, 1, 1],
    { clamp: true, ease: easeInOut },
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const run = () => setPoints(measure(wrapper));
    run();

    const observer = new ResizeObserver(run);
    observer.observe(wrapper);
    window.addEventListener("resize", run);
    if (document.fonts) document.fonts.ready.then(run).catch(() => {});

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", run);
    };
  }, []);

  if (reduceMotion) return <>{children}</>;

  return (
    <div ref={wrapperRef} className="relative">
      {/* Portavia's `Sticky Wrap` = 300vh track with the card pinned in a
          sticky 100vh viewport container while content scrolls past. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden lg:block"
      >
        <div className="relative h-[300vh]">
          <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
            <motion.div
              initial={{ opacity: 1, scale: 0, rotateX: -180 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 1 }}
              style={{
                transformPerspective: 1200,
                transformStyle: "preserve-3d",
              }}
              className="relative aspect-[340/476] w-[340px]"
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  x,
                  rotateY,
                  rotate,
                  scale,
                  transformPerspective: 1200,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-[20px] bg-surface [backface-visibility:hidden]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/portrait.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[20px] bg-foreground text-background [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="font-display text-[84px] leading-none font-bold tracking-tight">
                    MK
                  </span>
                  <span className="h-4 opacity-70">UI Engineer</span>
                </div>

                <div className="absolute bottom-5 left-5 z-10 rounded-full bg-accent px-4 py-2 text-sm font-semibold whitespace-nowrap text-accent-foreground shadow-[0_10px_30px_rgba(0,0,0,0.18)] [transform:translateZ(36px)]">
                  Hi 👋
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-20">{children}</div>
    </div>
  );
}
