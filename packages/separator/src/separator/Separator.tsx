import { forwardRef } from "react";
import { cn } from "@qube-ui/core";
import type { SeparatorProps } from "./Separator.types";

export const Separator = forwardRef<
  HTMLDivElement,
  SeparatorProps
>(
  (
    {
      orientation = "horizontal",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          "qube-separator",
          `qube-separator--${orientation}`,
          className,
        )}
        {...props}
      />
    );
  },
);

Separator.displayName = "Separator";