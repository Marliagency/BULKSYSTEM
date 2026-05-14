"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function FinalCTA() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(16,185,129,0.07)_0%,transparent_65%)]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      <Container size="sm" className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="text-xs font-mono text-[#10B981] tracking-[0.12em] uppercase">
            Start today
          </div>

          <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-semibold tracking-[-0.04em] text-[#F5F5F5] leading-[1.04]">
            Stop guessing.
            <br />
            <span className="text-[#10B981]">Start building.</span>
          </h2>

          <p className="text-lg text-[#A1A1AA] max-w-sm mx-auto leading-relaxed">
            The system is ready. The only question is when you decide to use it.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button size="lg" onClick={() => scrollTo("#pricing")}>
              Start Building
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button variant="ghost" size="lg" onClick={() => scrollTo("#features")}>
              Explore features
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-2">
            {["14-day guarantee", "Cancel anytime", "No credit card required to explore"].map((t, i) => (
              <span key={i} className="text-xs text-[#52525B]">{t}</span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
