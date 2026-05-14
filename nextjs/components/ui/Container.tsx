interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export default function Container({ children, className = "", size = "lg" }: ContainerProps) {
  return (
    <div className={`w-full ${sizes[size]} mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
