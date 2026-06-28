import type { HTMLAttributes } from "react";

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";

  color?: "primary" | "current";

  thickness?: "thin" | "normal" | "thick";
}