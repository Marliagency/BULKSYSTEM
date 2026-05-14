"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const faqs = [
  {
    q: "Do I need fitness experience to use BulkSystem?",
    a: "No. BulkSystem is calibrated to your current level at setup. Whether you're a beginner or an advanced athlete, the system adapts to where you are and scales with your progress.",
  },
  {
    q: "Can I customize my meals?",
    a: "Yes. The visual portion system gives you structure, not a rigid meal plan. You choose foods within the portion framework — so it fits your preferences, culture, and schedule.",
  },
  {
    q: "Does it work for both bulking and cutting?",
    a: "Absolutely. BulkSystem supports bulk, cut, and maintenance phases. Switch between them with a single click — the system recalibrates your nutrition and training accordingly.",
  },
  {
    q: "How long does the daily check-in take?",
    a: "About 2 minutes. Log your weight, tick off your habits, note anything relevant. The system does the analysis. You go live your life.",
  },
  {
    q: "Will there be a mobile app?",
    a: "Yes — mobile apps for iOS and Android are in development. The web app is fully responsive and works great from your phone right now.",
  },
  {
    q: "What if I travel or eat out frequently?",
    a: "The visual portion system was designed for the real world, not a controlled kitchen. It works just as well at a restaurant, on the road, or when you're eating someone else's cooking.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Anytime, no questions asked. You keep access until the end of your billing period. And there's a 14-day money-back guarantee if BulkSystem isn't what you expected.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#0B0B0B]">
      <Container size="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="text-xs font-mono text-[#10B981] tracking-[0.12em] uppercase mb-4">FAQ</div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#F5F5F5] leading-tight">
            Questions answered.
          </h2>
        </motion.div>

        <div className="space-y-0 divide-y divide-[rgba(255,255,255,0.05)]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-5 text-left group cursor-pointer"
              >
                <span className={`text-sm font-medium transition-colors duration-150 ${
                  open === i ? "text-[#F5F5F5]" : "text-[#A1A1AA] group-hover:text-[#F5F5F5]"
                }`}>
                  {faq.q}
                </span>
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  open === i
                    ? "border-[rgba(16,185,129,0.4)] text-[#10B981] rotate-45"
                    : "border-[rgba(255,255,255,0.08)] text-[#52525B] group-hover:border-[rgba(255,255,255,0.15)]"
                }`}>
                  <span className="text-sm leading-none">+</span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 text-sm text-[#A1A1AA] leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
