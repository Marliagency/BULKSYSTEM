"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const features = [
  {
    id: "dashboard",
    label: "Dashboard",
    headline: "Everything at a glance.",
    description:
      "Your weight, training load, nutrition score and recovery index — all unified in a single view. Open BulkSystem and know exactly where you stand in under 10 seconds.",
    preview: (
      <div className="space-y-3">
        {[
          { label: "Body Weight", value: "82.4 kg", bar: 72, color: "#10B981" },
          { label: "Calories Today", value: "3,240 kcal", bar: 88, color: "#10B981" },
          { label: "Recovery Score", value: "87 / 100", bar: 87, color: "#10B981" },
          { label: "Weekly Volume", value: "24,600 kg", bar: 61, color: "#A1A1AA" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="w-28 text-xs text-[#52525B] flex-shrink-0">{item.label}</div>
            <div className="flex-1 h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.bar}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </div>
            <div className="w-20 text-right font-mono text-xs text-[#F5F5F5]">{item.value}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "nutrition",
    label: "Nutrition",
    headline: "Structure without obsession.",
    description:
      "Visual meal plans calibrated to your goal. Portion-based, not calorie-counted. Switch between bulk, cut and maintenance phases with one click. Your food, your rhythm.",
    preview: (
      <div className="grid grid-cols-3 gap-2">
        {[
          { meal: "Breakfast", items: ["Oats 2 cups", "3 Eggs", "Banana"], done: true },
          { meal: "Lunch", items: ["Rice 2 fists", "Chicken palm", "Greens"], done: true },
          { meal: "Dinner", items: ["Pasta 2 fists", "Tuna palm", "Olive oil"], done: false },
        ].map((m) => (
          <div
            key={m.meal}
            className={`p-3 rounded-xl border text-xs ${
              m.done
                ? "bg-[rgba(16,185,129,0.06)] border-[rgba(16,185,129,0.15)]"
                : "bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)]"
            }`}
          >
            <div className={`font-medium mb-2 ${m.done ? "text-[#10B981]" : "text-[#A1A1AA]"}`}>
              {m.meal} {m.done && "✓"}
            </div>
            {m.items.map((item) => (
              <div key={item} className="text-[#52525B] leading-relaxed">{item}</div>
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "training",
    label: "Training",
    headline: "Programmed to progress.",
    description:
      "Evidence-based periodization. Automatic load progression. Every session prescribed — you just execute. Never think about what to train again.",
    preview: (
      <div className="space-y-2">
        <div className="text-xs text-[#52525B] mb-3 font-mono">Upper Push A — Week 12</div>
        {[
          { ex: "Bench Press", sets: "4×6", weight: "85 kg", done: true },
          { ex: "Incline DB Press", sets: "3×10", weight: "32 kg", done: true },
          { ex: "Shoulder Press", sets: "3×10", weight: "40 kg", done: false },
          { ex: "Lateral Raises", sets: "3×15", weight: "12 kg", done: false },
          { ex: "Tricep Pushdown", sets: "3×12", weight: "30 kg", done: false },
        ].map((row) => (
          <div
            key={row.ex}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs ${
              row.done ? "bg-[rgba(16,185,129,0.05)]" : "bg-[rgba(255,255,255,0.02)]"
            }`}
          >
            <div className={`w-3 h-3 rounded-sm flex-shrink-0 flex items-center justify-center text-[8px] ${
              row.done ? "bg-[#10B981] text-black" : "border border-[rgba(255,255,255,0.1)]"
            }`}>
              {row.done && "✓"}
            </div>
            <div className={`flex-1 ${row.done ? "text-[#52525B] line-through" : "text-[#A1A1AA]"}`}>
              {row.ex}
            </div>
            <div className="font-mono text-[#52525B]">{row.sets}</div>
            <div className={`font-mono ${row.done ? "text-[#52525B]" : "text-[#10B981]"}`}>{row.weight}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "recovery",
    label: "Recovery",
    headline: "Rest is training.",
    description:
      "Sleep quality, deload scheduling, and readiness scores. BulkSystem tells you when to push and when to pull back — before your body forces you to.",
    preview: (
      <div className="space-y-4">
        <div className="flex gap-4">
          {[
            { label: "Recovery", value: "87", color: "#10B981" },
            { label: "Sleep", value: "82", color: "#10B981" },
            { label: "HRV", value: "71", color: "#A1A1AA" },
          ].map((s) => (
            <div key={s.label} className="flex-1 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-xl p-3 text-center">
              <div className="font-mono text-2xl font-medium" style={{ color: s.color }}>{s.value}</div>
              <div className="text-[10px] text-[#52525B] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-[rgba(16,185,129,0.06)] border border-[rgba(16,185,129,0.12)] rounded-xl p-3">
          <div className="text-xs text-[#10B981] font-medium">Recommendation</div>
          <div className="text-xs text-[#A1A1AA] mt-1">
            All signals green. Full intensity session recommended today.
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    headline: "Clarity over time.",
    description:
      "12-week body composition trends, strength progression curves, adherence heatmaps. See exactly what's working. Double down on it.",
    preview: (
      <div className="space-y-3">
        <div className="text-xs text-[#52525B] font-mono mb-2">12-week strength progression</div>
        {[
          { ex: "Bench Press", start: 70, end: 87.5, pct: "+25%" },
          { ex: "Squat", start: 90, end: 115, pct: "+28%" },
          { ex: "Deadlift", start: 110, end: 140, pct: "+27%" },
        ].map((row) => (
          <div key={row.ex} className="flex items-center gap-3">
            <div className="w-24 text-xs text-[#52525B] flex-shrink-0">{row.ex}</div>
            <div className="flex-1 flex items-center gap-2">
              <span className="font-mono text-xs text-[#52525B]">{row.start}</span>
              <div className="flex-1 h-1 bg-[rgba(255,255,255,0.05)] rounded-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#10B981] rounded-full"
                  initial={{ width: "40%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="font-mono text-xs text-[#F5F5F5]">{row.end} kg</span>
            </div>
            <div className="text-xs text-[#10B981] font-mono w-10 text-right">{row.pct}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "checkin",
    label: "Weekly Check-In",
    headline: "Two minutes. Every week.",
    description:
      "Log your weight, rate your adherence, note what worked. BulkSystem adjusts your upcoming week based on your input. The system learns as you do.",
    preview: (
      <div className="space-y-3">
        <div className="text-xs text-[#A1A1AA] mb-4">Week 12 check-in</div>
        {[
          { q: "Weight this morning", val: "82.4 kg" },
          { q: "Nutrition adherence", val: "9/10" },
          { q: "Training adherence", val: "10/10" },
          { q: "Energy levels", val: "High" },
        ].map((row) => (
          <div key={row.q} className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.05)]">
            <span className="text-xs text-[#52525B]">{row.q}</span>
            <span className="text-xs font-mono text-[#10B981]">{row.val}</span>
          </div>
        ))}
        <div className="mt-3 px-3 py-2 bg-[rgba(16,185,129,0.06)] border border-[rgba(16,185,129,0.12)] rounded-lg text-xs text-[#10B981]">
          Great week. Next week: +2.5 kg on compound lifts.
        </div>
      </div>
    ),
  },
];

export default function Features() {
  const [active, setActive] = useState("dashboard");
  const current = features.find((f) => f.id === active) || features[0];

  return (
    <section id="features" className="py-32 bg-[#050505]">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="text-xs font-mono text-[#10B981] tracking-[0.12em] uppercase mb-4">
            Features
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#F5F5F5] leading-tight">
            Built to last the long run.
          </h2>
        </motion.div>

        {/* Tab nav */}
        <div className="flex flex-wrap gap-1 justify-center mb-12 p-1.5 bg-[#0B0B0B] border border-[rgba(255,255,255,0.05)] rounded-2xl max-w-2xl mx-auto">
          {features.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-4 py-2 text-sm rounded-xl transition-all duration-200 cursor-pointer ${
                active === f.id
                  ? "bg-[#111111] text-[#F5F5F5] border border-[rgba(255,255,255,0.08)] shadow-sm"
                  : "text-[#52525B] hover:text-[#A1A1AA]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Feature content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: copy */}
            <div>
              <div className="text-xs font-mono text-[#10B981] tracking-[0.1em] uppercase mb-3">
                {current.label}
              </div>
              <h3 className="text-3xl font-semibold text-[#F5F5F5] tracking-[-0.03em] mb-4 leading-tight">
                {current.headline}
              </h3>
              <p className="text-base text-[#A1A1AA] leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Right: preview */}
            <div className="bg-[#0B0B0B] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {current.preview}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
