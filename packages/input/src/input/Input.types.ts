import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode;

  helperText?: ReactNode;

  error?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  size?: "sm" | "md" | "lg";
}