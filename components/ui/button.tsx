"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "hero" | "hero-outline" | "soft" | "link";
  size?: "sm" | "lg" | "xl" | "icon";
}

const variantClasses: Record<string, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-border bg-transparent hover:bg-secondary text-foreground",
  hero:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
  "hero-outline":
    "border border-primary/40 text-primary hover:bg-primary/10",
  soft:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  link:
    "bg-transparent text-primary underline-offset-4 hover:underline",
};

const sizeClasses: Record<string, string> = {
  sm: "h-9 px-3 text-xs",
  lg: "h-11 px-6 text-sm",
  xl: "h-12 px-8 text-base",
  icon: "h-10 w-10 p-0",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background gap-2";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "lg", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
