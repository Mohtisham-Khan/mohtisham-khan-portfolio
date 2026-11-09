"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

/**
 * Portavia's avatar card: a 340 x 476 portrait with a second face on the
 * back and a "Hi / 👋" badge pinned to the bottom-left corner.
 */
export function PortraitCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0, rotateX: -180 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 1 }}
      style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
      className="portrait-card relative aspect-[340/476] shrink-0"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[20px] bg-surface shadow-[0_30px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/portrait.png"
          alt=""
          draggable={false}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/lumine-studio-cover.png"
          alt=""
          draggable={false}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="badge-swap absolute -bottom-8 -left-8 grid h-16 w-16 place-items-center rounded-full bg-[#D5FF6B] text-[#202020] shadow-[0_18px_45px_rgba(213,255,107,0.35)] min-[1200px]:-bottom-12 min-[1200px]:-left-12 min-[1200px]:h-24 min-[1200px]:w-24 [transform:translateZ(40px)]">
        <span className="text-2xl leading-none min-[1200px]:text-4xl">👋</span>
        <span className="font-display text-xl leading-none font-semibold min-[1200px]:text-2xl">
          Hi
        </span>
      </div>
    </motion.div>
  );
}

export default function PortraitJourney({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Portavia's scroll targets, driven continuously by the sticky track:
  //   x       0 → 340 → 340
  //   rotateY 0 → 150 → 340
  //   rotate  0 → 10  → 5
  //   scale   1 → .9  → 1
  // The card stops (x 340 / rotateY 340) for the final 15% of the track, then
  // unpins and scrolls away with the journey.
  const stops = [0, 0.05, 0.5, 0.85, 1];

  const x = useTransform(scrollYProgress, stops, [0, 0, 340, 340, 340], {
    clamp: true,
    ease: easeInOut,
  });

  const rotateY = useTransform(scrollYProgress, stops, [0, 0, 150, 340, 340], {
    clamp: true,
    ease: easeInOut,
  });

  const rotate = useTransform(scrollYProgress, stops, [0, 0, 10, 5, 5], {
    clamp: true,
    ease: easeInOut,
  });

  const scale = useTransform(scrollYProgress, stops, [1, 1, 0.9, 1, 1], {
    clamp: true,
    ease: easeInOut,
  });

  return (
    <div ref={wrapperRef} className="relative">
      {/* The hero is transparent at desktop so this dark plate can sit behind
          the pinned card while the hero copy paints above it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-svh bg-[#202020] min-[1200px]:block"
      />

      {!reduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 hidden min-[1200px]:block"
        >
          <div className="sticky top-0 flex h-svh items-center justify-center">
            <motion.div
              style={{
                x,
                rotate,
                rotateY,
                scale,
                transformPerspective: 1200,
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <PortraitCard />
            </motion.div>
          </div>
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
