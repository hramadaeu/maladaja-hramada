"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "span" | "li" | "header";
  variant?: "fade-up" | "fade-left" | "fade-in" | "zoom-in";
};

const variantStyles = {
  "fade-up": {
    hidden: "opacity-0 translate-y-6",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 -translate-x-6",
    visible: "opacity-100 translate-x-0",
  },
  "fade-in": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  "zoom-in": {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 500,
  as: Tag = "div",
  variant = "fade-up",
}: RevealProps) {
  const { ref, inView } = useInView();
  const { hidden, visible } = variantStyles[variant];

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all ease-out will-change-transform",
        inView ? visible : hidden,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
