"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const features = [
  "Full nutrition system (visual portions)",
  "Progressive training programs",
  "Daily & weekly check-ins",
  "Recovery & sleep tracking",
  "Analytics dashboard",
  "Goal phase switching (bulk/cut/maintain)",
  "Unlimited history",
  "Email support",
];

const yearlyFeatures = [
  ...features,
  "Priority support",
  "Early access to new features",
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  const monthly = 29;
  const yearlyMonthly = 19;
  const yearlySave = Math.round((1 - yearlyMonthly / monthly) * 100);

  return (
    <section id="pricing" className="py-32 bg-[#050505]">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="text-xs font-mono text-[#10B981] tracking-[0.12em] uppercase mb-4">
            Pricing
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#F5F5F5] leading-tight mb-4">
            One plan. Everything included.
          </h2>
          <p className="text-base text-[#A1A1AA]">No tiers. No feature locks. Full access from day one.</p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 p-1 bg-[#0B0B0B] border border-[rgba(255,255,255,0.06)] rounded-xl">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
                !yearly
                  ? "bg-[#111111] text-[#F5F5F5] border border-[rgba(255,255,255,0.08)]"
                  : "text-[#52525B] hover:text-[#A1A1AA]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                yearly
                  ? "bg-[#111111] text-[#F5F5F5] border border-[rgba(255,255,255,0.08)]"
                  : "text-[#52525B] hover:text-[#A1A1AA]"
              }`}
            >
              Yearly
              <span className="text-[10px] font-medium text-[#10B981] bg-[rgba(16,185,129,0.1)] px-1.5 py-0.5 rounded-md">
                −{yearlySave}%
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[rgba(16,185,129,0.3)] to-transparent opacity-40" />

          <div className="relative bg-[#0B0B0B] rounded-3xl overflow-hidden border border-[rgba(16,185,129,0.15)]">
            {/* Top accent line */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-60" />

            <div className="p-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
                <div>
                  <div className="text-xs font-mono text-[#10B981] tracking-[0.1em] uppercase mb-3">
                    BulkSystem {yearly ? "Yearly" : "Monthly"}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#52525B] text-xl font-mono">€</span>
                    <motion.span
                      key={yearly ? "yearly" : "monthly"}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="font-mono text-[5rem] font-medium text-[#F5F5F5] leading-none tracking-tight"
                    >
                      {yearly ? yearlyMonthly : monthly}
                    </motion.span>
                    <span className="text-[#52525B] text-sm mb-1">/ month</span>
                  </div>
                  {yearly && (
                    <div className="text-sm text-[#52525B] mt-1">
                      Billed €{yearlyMonthly * 12}/year · Save €{(monthly - yearlyMonthly) * 12}
                    </div>
                  )}
                </div>

                <Button size="lg" className="sm:w-auto w-full" onClick={() => {}}>
                  Start Building →
                </Button>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[rgba(255,255,255,0.06)] mb-8" />

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-3">
                {(yearly ? yearlyFeatures : features).map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.04 }}
                    className="flex items-start gap-3 text-sm text-[#A1A1AA]"
                  >
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.2)] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#10B981] text-[9px]">✓</span>
                    </div>
                    {f}
                  </motion.div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-xs text-[#52525B]">
                <span>🔒 Secure payment via Stripe</span>
                <span className="hidden sm:block text-[#3F3F46]">·</span>
                <span>Cancel anytime</span>
                <span className="hidden sm:block text-[#3F3F46]">·</span>
                <span>14-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 text-sm text-[#52525B]"
        >
          Built for long-term progress. Consistency compounds.
        </motion.p>
      </Container>
    </section>
  );
}
