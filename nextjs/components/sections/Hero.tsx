"use client";

import { motion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import DashboardMockup from "@/components/mockups/DashboardMockup";
import Container from "@/components/ui/Container";

const spring = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: spring } },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)",
        }}
      />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(16,185,129,0.07)_0%,transparent_70%)] pointer-events-none" />

      <Container size="xl" className="py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left — Copy */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-6 max-w-xl"
          >
            <motion.div variants={itemVariants}>
              <Badge>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
                Now in early access
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[#F5F5F5]"
            >
              Your body{" "}
              <span className="relative">
                <span className="text-[#10B981]">needs</span>
              </span>{" "}
              a system.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#A1A1AA] leading-relaxed tracking-[-0.01em] max-w-md"
            >
              Nutrition, training, recovery and analytics — unified in one
              precision system. Built for people who take progress seriously.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" onClick={() => scrollTo("#pricing")}>
                Start Building
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              <Button variant="ghost" size="lg" onClick={() => scrollTo("#features")}>
                Preview System
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-2">
              {[
                { value: "12k+", label: "workouts logged" },
                { value: "94%", label: "consistency rate" },
                { value: "8 wks", label: "avg to first goal" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-sm font-medium text-[#F5F5F5]">{stat.value}</div>
                  <div className="text-xs text-[#52525B] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="animate-float"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}
