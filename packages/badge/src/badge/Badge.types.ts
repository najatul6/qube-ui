import type {
  HTMLAttributes,
} from "react";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline";

  color?:
    | "gray"
    | "primary"
    | "success"
    | "warning"
    | "danger";

  size?: "sm" | "md" | "lg";
}