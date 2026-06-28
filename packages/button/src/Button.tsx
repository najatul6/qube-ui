import { forwardRef } from "react";
import type { ButtonProps } from "./Button.types";
import { cn } from "@qube-ui/core";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "solid",
      size = "md",
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      className,
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cn(
  "qube-button",
  `qube-button--${variant}`,
  `qube-button--${size}`,
  loading && "qube-button--loading",
  className,
)}
        {...props}
      >
        {leftIcon && !loading && (
          <span className="qube-button__icon">{leftIcon}</span>
        )}

        <span className="qube-button__label">
          {loading ? "Loading..." : children}
        </span>

        {rightIcon && !loading && (
          <span className="qube-button__icon">{rightIcon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";