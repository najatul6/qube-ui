import { forwardRef } from "react";
import { cn } from "@qube-ui/core";
import type { BadgeProps } from "./Badge.types";

export const Badge = forwardRef<
  HTMLSpanElement,
  BadgeProps
>(
  (
    {
      children,
      variant = "solid",
      color = "gray",
      size = "md",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "qube-badge",
          `qube-badge--${variant}`,
          `qube-badge--${color}`,
          `qube-badge--${size}`,
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";