"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";

type Variant = "primary" | "ghost" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[#10B981] text-black font-semibold hover:bg-[#059669] shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]",
  ghost:
    "bg-transparent text-[#F5F5F5] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.04)]",
  secondary:
    "bg-[#111111] text-[#F5F5F5] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.14)] hover:bg-[#161616]",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2 rounded-lg",
  md: "text-sm px-5 py-2.5 rounded-xl",
  lg: "text-base px-7 py-3.5 rounded-xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`
          inline-flex items-center justify-center gap-2
          font-medium tracking-[-0.01em] leading-none
          transition-all duration-200
          cursor-pointer select-none
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
