"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import DashboardMockup from "@/components/mockups/DashboardMockup";

export default function DashboardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-32 bg-[#0B0B0B] overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
      </div>

      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="text-xs font-mono text-[#10B981] tracking-[0.12em] uppercase mb-4">
            The product
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em] text-[#F5F5F5] leading-tight">
            See what you're building toward.
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] max-w-md mx-auto">
            Real interface. Real data. This is exactly what you see when you open BulkSystem.
          </p>
        </motion.div>

        <motion.div style={{ y }} className="max-w-3xl mx-auto">
          <DashboardMockup />
        </motion.div>
      </Container>
    </section>
  );
}
