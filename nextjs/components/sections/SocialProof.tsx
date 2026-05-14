"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [
  { value: "12,400+", label: "Workouts logged" },
  { value: "94%", label: "Consistency rate" },
  { value: "3.2 kg", label: "Avg gain in 8 weeks" },
  { value: "< 2 min", label: "Daily check-in" },
];

const taglines = [
  "Built for consistency.",
  "Designed for real progress.",
  "One system. Everything connected.",
  "Minimal system. Maximum focus.",
];

export default function SocialProof() {
  return (
    <section className="border-y border-[rgba(255,255,255,0.05)] bg-[#0B0B0B] py-16">
      <Container size="xl">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[rgba(255,255,255,0.05)]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center px-6 py-4 first:pl-0 last:pr-0"
            >
              <div className="font-mono text-2xl font-medium text-[#F5F5F5] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-[#52525B] mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Taglines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {taglines.map((t, i) => (
            <span key={i} className="text-sm text-[#52525B] font-medium">
              {t}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
