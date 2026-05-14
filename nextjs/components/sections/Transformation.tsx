"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const timeline = [
  {
    period: "Week 1–2",
    label: "Foundation",
    body: "System calibrated to your body. Baseline metrics established. First habits forming — check-ins streak begins.",
    metrics: [{ k: "Adherence", v: "82%" }, { k: "Weight", v: "Stable" }],
  },
  {
    period: "Week 3–5",
    label: "Momentum",
    body: "Weight trending upward. Strength increases visible on every lift. The habit loop is locked in.",
    metrics: [{ k: "Weight", v: "+0.8 kg" }, { k: "Strength", v: "+12%" }],
  },
  {
    period: "Week 6–8",
    label: "Compounding",
    body: "Results accelerate as nutrition and training sync. Body composition shifting. People start asking questions.",
    metrics: [{ k: "Weight", v: "+2.1 kg" }, { k: "Adherence", v: "94%" }],
  },
  {
    period: "Month 3+",
    label: "Evolution",
    body: "New baseline established. Goals recalibrated. System scales with you indefinitely. Progress is the new normal.",
    metrics: [{ k: "Total gain", v: "+5.4 kg" }, { k: "Consistency", v: "91%" }],
  },
];

export default function Transformation() {
  return (
    <section id="results" className="py-32 bg-[#050505]">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="text-xs font-mono text-[#10B981] tracking-[0.12em] uppercase mb-4">
            Transformation
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#F5F5F5] leading-tight">
            What the journey looks like.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-[rgba(255,255,255,0.06)]" />
          <div className="absolute left-8 top-0 w-[1px] bg-gradient-to-b from-[#10B981] to-transparent h-2/3 animate-glow-pulse" />

          <div className="space-y-0">
            {timeline.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-12 pb-12 last:pb-0"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 w-16 flex justify-center">
                  <div className={`w-4 h-4 rounded-full border-2 mt-1 z-10 ${
                    i < 2
                      ? "bg-[#10B981] border-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                      : "bg-[#050505] border-[rgba(255,255,255,0.15)]"
                  }`} />
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-[#52525B]">{step.period}</span>
                    <span className="text-xs font-semibold text-[#10B981]">{step.label}</span>
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4 max-w-lg">{step.body}</p>
                  <div className="flex gap-4">
                    {step.metrics.map((m) => (
                      <div key={m.k} className="px-3 py-1.5 bg-[#0B0B0B] border border-[rgba(255,255,255,0.05)] rounded-lg">
                        <span className="text-[10px] text-[#52525B]">{m.k} </span>
                        <span className="text-xs font-mono text-[#10B981]">{m.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
