import { forwardRef } from "react";
import { cn } from "@qube-ui/core";
import type { SpinnerProps } from "./Spinner.types";

export const Spinner = forwardRef<
  HTMLDivElement,
  SpinnerProps
>(
  (
    {
      size = "md",
      color = "primary",
      thickness = "normal",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn(
          "qube-spinner",
          `qube-spinner--${size}`,
          `qube-spinner--${color}`,
          `qube-spinner--${thickness}`,
          className,
        )}
        {...props}
      />
    );
  },
);

Spinner.displayName = "Spinner";