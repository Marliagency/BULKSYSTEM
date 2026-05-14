"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const problems = [
  {
    label: "The chaos",
    title: "You keep starting over.",
    body: "Monday you're motivated. Thursday you've already lost track. You've tried apps, spreadsheets, PDFs. None of them stick. Not because you lack discipline — because they lack structure.",
  },
  {
    label: "The noise",
    title: "Too much information. Zero clarity.",
    body: "Macro targets here. Training split there. Recovery tips somewhere else. You're managing 6 apps, 3 spreadsheets and a notes app. The cognitive load kills consistency before the habits even form.",
  },
  {
    label: "The void",
    title: "You can't see if it's working.",
    body: "Without a unified view of your progress, you're flying blind. Is the weight going up because you're gaining muscle — or fat? Are you under-eating, over-training? You don't know. You guess.",
  },
];

export default function Problem() {
  return (
    <section className="py-32 bg-[#050505]">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="text-xs font-mono text-[#10B981] tracking-[0.12em] uppercase mb-4">
            The problem
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#F5F5F5] leading-tight">
            Every fitness tool is broken
            <br />
            <span className="text-[#52525B]">in the same way.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[#0B0B0B] hover:border-[rgba(255,255,255,0.09)] transition-all duration-300"
            >
              {/* Left accent */}
              <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-[rgba(255,255,255,0.06)] rounded-full" />
              <div className="absolute left-0 top-8 h-12 w-[2px] bg-[#10B981] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-[10px] font-mono text-[#52525B] tracking-[0.1em] uppercase mb-4">
                {p.label}
              </div>
              <h3 className="text-lg font-semibold text-[#F5F5F5] tracking-[-0.02em] mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
