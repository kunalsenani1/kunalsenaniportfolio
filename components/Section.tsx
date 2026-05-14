"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative px-5 py-24 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12 max-w-3xl"
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.36em] text-cyanfire">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl font-semibold leading-[0.95] text-zinc-50 sm:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
