import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Define prop types for the ResponsiveContainer
interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "narrow" | "wide" | "full";
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end";
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className,
  variant = "default",
  padding = "xs",
  align = "center",
}) => {
  // Define variant-based max-width classes
  const variantClasses = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-7xl",
    full: "max-w-full",
  };

  // Define padding classes with more subtle options
  const paddingClasses = {
    none: "px-0 py-0",
    xs: "px-2 py-2 sm:px-3 sm:py-3",
    sm: "px-4 py-2 sm:px-4 sm:py-3",
    md: "px-4 py-4 sm:px-6 sm:py-4",
    lg: "px-6 py-6 sm:px-8 sm:py-6",
    xl: "px-8 py-8 sm:px-10 sm:py-8",
  };

  // Define alignment classes
  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto",
        variantClasses[variant],
        paddingClasses[padding],
        alignClasses[align],
        className
      )}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
