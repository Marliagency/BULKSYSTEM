"use client";

import { motion } from "framer-motion";

interface GlowProps {
  size?: "sm" | "md" | "lg" | "xl";
  intensity?: "low" | "medium" | "high";
  className?: string;
}

const sizes = {
  sm: "w-48 h-48",
  md: "w-96 h-96",
  lg: "w-[600px] h-[600px]",
  xl: "w-[900px] h-[900px]",
};

const intensities = {
  low: "opacity-20",
  medium: "opacity-40",
  high: "opacity-60",
};

export default function Glow({ size = "lg", intensity = "low", className = "" }: GlowProps) {
  return (
    <motion.div
      className={`
        pointer-events-none absolute rounded-full
        bg-[radial-gradient(circle,rgba(16,185,129,0.3)_0%,transparent_70%)]
        blur-3xl
        ${sizes[size]}
        ${intensities[intensity]}
        ${className}
      `}
      animate={{ opacity: [intensities[intensity] === "opacity-20" ? 0.15 : 0.35, intensities[intensity] === "opacity-20" ? 0.25 : 0.5] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
  );
}
