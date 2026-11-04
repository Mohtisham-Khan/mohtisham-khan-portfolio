"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const CARD = {
  front: "/images/portrait.png",
  back: "/images/project-1.png",
  // Must stay in sync with the headline gap in Hero.tsx:
  //   md:gap-[calc(clamp(200px,24vw,340px)_+_1.5rem)]
  // The card width has to fit inside that gap, so both use the same clamp.
  width: "clamp(200px, 24vw, 340px)",
};

// STOPS kept for reference - values used in transforms

export default function FlipCard() {
  const [isAbsolute, setIsAbsolute] = useState(false);
  const [showHi, setShowHi] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  const xRaw = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    ["50vw", "50vw", "70vw", "70vw", "70vw"],
  );
  const rotateYRaw = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.7, 0.85, 1],
    [0, 0, 160, 250, 340, 340],
  );
  const rotateZRaw = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0, 0, 5, -5, -5],
  );

  const x = useSpring(xRaw, { stiffness: 90, damping: 28 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 90, damping: 28 });
  const rotateZ = useSpring(rotateZRaw, { stiffness: 90, damping: 28 });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHi((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (!projectsSection) return;
      const rect = projectsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.3) {
        setIsAbsolute(true);
      } else {
        setIsAbsolute(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none">
      <motion.div
        className={`z-50 hidden md:block ${
          isAbsolute ? "absolute" : "fixed"
        }`}
        style={{
          top: "50%",
          left: x,
          x: "-50%",
          y: "-50%",
          rotateY,
          rotateZ,
          transformStyle: "preserve-3d",
          perspective: "1200px",
          willChange: "transform",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div
          className="relative"
          style={{
            width: CARD.width,
            height: `calc(${CARD.width} * 1.4)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute inset-0 rounded-[24px] shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <img
              src={CARD.front}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute inset-0 rounded-[24px] shadow-[0_40px_80px_rgba(0,0,0,0.4)] overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <img
              src={CARD.back}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            className="absolute -left-[70px] -bottom-[70px] w-[140px] h-[140px] rounded-full bg-[#D5FF6B] flex items-center justify-center shadow-[0_20px_40px_rgba(213,255,107,0.3)]"
            style={{
              transform: "translateZ(40px)",
            }}
            animate={{
              scale: rotateY.get() > 80 && rotateY.get() < 280 ? 0.8 : 1,
              opacity: rotateY.get() > 80 && rotateY.get() < 280 ? 0.6 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              key={showHi ? "hi" : "wave"}
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="text-[#202020] text-lg font-semibold"
            >
              {showHi ? "Hi" : "👋"}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
