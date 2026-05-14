interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "neutral";
  className?: string;
}

export default function Badge({ children, variant = "accent", className = "" }: BadgeProps) {
  const styles = {
    accent: "bg-[rgba(16,185,129,0.1)] text-[#10B981] border border-[rgba(16,185,129,0.2)]",
    neutral: "bg-[rgba(255,255,255,0.05)] text-[#A1A1AA] border border-[rgba(255,255,255,0.08)]",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        text-xs font-medium tracking-[0.06em] uppercase
        px-3 py-1.5 rounded-full
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
