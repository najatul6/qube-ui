import { forwardRef } from "react";
import { cn } from "@qube-ui/core";
import type { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error = false,
      leftIcon,
      rightIcon,
      size = "md",
      className,
      disabled,
      id,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="qube-input-root">
        {label && (
          <label
            htmlFor={id}
            className="qube-input-label"
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            "qube-input",
            `qube-input--${size}`,
            error && "qube-input--error",
            disabled && "qube-input--disabled",
          )}
        >
          {leftIcon && (
            <span className="qube-input__icon">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            disabled={disabled}
            className={cn(
              "qube-input__field",
              className,
            )}
            {...props}
          />

          {rightIcon && (
            <span className="qube-input__icon">
              {rightIcon}
            </span>
          )}
        </div>

        {helperText && (
          <p
            className={cn(
              "qube-input-helper",
              error &&
                "qube-input-helper--error",
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";