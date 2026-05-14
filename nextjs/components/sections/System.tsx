"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const notList = ["Another calorie counter", "A workout app", "A PDF program", "A meal planner", "A habit tracker"];
const isList = [
  { title: "An operating system for your body.", body: "Every variable — food, training, sleep, recovery — connected and co-dependent. Change one, the system adapts the rest." },
  { title: "Structured around your goal, not your data.", body: "You set the destination. BulkSystem plans the route, tracks the miles, and tells you when to course-correct." },
  { title: "Built for the long game.", body: "Not the 30-day transformation. The 12-month evolution. Compounding consistency, visible through every weekly check-in." },
];

export default function System() {
  return (
    <section id="system" className="py-32 bg-[#0B0B0B]">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="text-xs font-mono text-[#10B981] tracking-[0.12em] uppercase mb-4">
            The system
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#F5F5F5] leading-tight">
            This is not a fitness app.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* NOT column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-xs font-mono text-[#52525B] tracking-[0.1em] uppercase mb-6">
              BulkSystem is NOT
            </div>
            <div className="space-y-3">
              {notList.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 px-4 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)]"
                >
                  <span className="text-[#3F3F46] text-lg leading-none">×</span>
                  <span className="text-sm text-[#52525B]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IS column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-xs font-mono text-[#10B981] tracking-[0.1em] uppercase mb-6">
              BulkSystem IS
            </div>
            <div className="space-y-4">
              {isList.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[rgba(16,185,129,0.15)] border border-[rgba(16,185,129,0.25)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#10B981] text-xs">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#F5F5F5] tracking-[-0.01em] mb-1">{item.title}</div>
                    <div className="text-sm text-[#A1A1AA] leading-relaxed">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Centered quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 text-center"
        >
          <blockquote className="text-[clamp(1.2rem,2.5vw,2rem)] font-medium text-[#F5F5F5] tracking-[-0.03em] max-w-2xl mx-auto leading-snug">
            "Consistency compounds. <span className="text-[#10B981]">BulkSystem</span> is the infrastructure for that consistency."
          </blockquote>
        </motion.div>
      </Container>
    </section>
  );
}
