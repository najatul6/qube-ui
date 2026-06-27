import { forwardRef } from "react";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "solid",
      size = "md",
      loading = false,
      disabled,
      className,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={[
          "qube-button",
          `qube-button--${variant}`,
          `qube-button--${size}`,
          loading && "qube-button--loading",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";