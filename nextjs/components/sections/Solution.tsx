"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const bentoItems = [
  {
    col: "col-span-2",
    tag: "Nutrition",
    title: "Eat precisely. Without counting.",
    body: "Visual portion system calibrated to your body. Weekly meal structure you actually follow. No apps. No macros. No obsession.",
    accent: true,
  },
  {
    col: "col-span-1",
    tag: "Training",
    title: "Progressive. Structured. Inevitable.",
    body: "Every session programmed. Load increases automatically as you get stronger.",
  },
  {
    col: "col-span-1",
    tag: "Recovery",
    title: "Rest as a variable, not an afterthought.",
    body: "Sleep, deload weeks, and recovery scores integrated into your plan.",
  },
  {
    col: "col-span-1",
    tag: "Analytics",
    title: "See everything. Decide with data.",
    body: "Weight trends, strength curves, habit streaks. The full picture, always.",
  },
  {
    col: "col-span-2",
    tag: "Habits",
    title: "2 minutes a day. Compounding forever.",
    body: "Daily check-ins so fast you won't skip them. Consistency tracked. Progress visible. The habit builds itself.",
    accent: false,
  },
];

export default function Solution() {
  return (
    <section id="features" className="py-32 bg-[#0B0B0B]">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="text-xs font-mono text-[#10B981] tracking-[0.12em] uppercase mb-4">
            The solution
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#F5F5F5] leading-tight mb-5">
            One system.
            <br />
            <span className="text-[#10B981]">Everything connected.</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-lg mx-auto leading-relaxed">
            BulkSystem replaces five fragmented tools with a single cohesive operating system for your body.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 gap-4">
          {bentoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`
                ${item.col} relative group
                p-8 rounded-2xl
                border transition-all duration-300
                ${item.accent
                  ? "bg-[rgba(16,185,129,0.04)] border-[rgba(16,185,129,0.15)] hover:border-[rgba(16,185,129,0.25)] hover:bg-[rgba(16,185,129,0.07)]"
                  : "bg-[#111111] border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)]"
                }
              `}
            >
              <div className={`text-[10px] font-mono tracking-[0.1em] uppercase mb-3 ${item.accent ? "text-[#10B981]" : "text-[#52525B]"}`}>
                {item.tag}
              </div>
              <h3 className="text-xl font-semibold text-[#F5F5F5] tracking-[-0.02em] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.body}</p>

              {/* Hover glow for accent items */}
              {item.accent && (
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
