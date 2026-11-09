"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowIcon from "./ArrowIcon";

export type AccordionEntry = {
  id: string;
  title: string;
  number?: string;
  body?: string;
  bullets?: string[];
};

export default function Accordion({
  items,
  variant,
}: {
  items: AccordionEntry[];
  variant: "services" | "faq";
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const isFaq = variant === "faq";

  return (
    <div className={isFaq ? "" : "space-y-0"}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className={isFaq ? "border-b border-border" : ""}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={`group text-foreground md:text-2xl flex w-full cursor-pointer items-center justify-between gap-6 text-left transition-colors ${
                isFaq ? "py-7" : "py-6"
              }`}
            >
              {isFaq ? (
                <span className="flex flex-1 items-start gap-5">
                  <span className="type-4 pt-1">
                    {index + 1}.
                  </span>
                  <span className="flex-1">{item.title}</span>
                </span>
              ) : (
                <span className="type-4">
                  {item.number ? `${item.number}. ` : ""}
                  {item.title}
                </span>
              )}

              <ArrowIcon
                className={`h-7 w-7 shrink-0 text-foreground transition-transform duration-300 group-hover:text-accent ${
                  isOpen ? "-translate-y-1 rotate-[-90deg]" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden pt-4"
                >
                  <div
                    className={
                      isFaq
                        ? "pb-7 pl-10 pr-12"
                        : "pb-7 pr-14"
                    }
                  >
                    {item.body ? <p className="lead max-w-[540px]">{item.body}</p> : null}
                    {item.bullets ? (
                      <ul className="list-disc space-y-2 pl-5 marker:text-accent">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="text-lg leading-[27px] font-light">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
