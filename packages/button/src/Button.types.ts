import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";

  size?: "sm" | "md" | "lg";

  loading?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}
