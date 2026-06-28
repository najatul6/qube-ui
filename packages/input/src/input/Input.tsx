import { forwardRef, useId } from "react";
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
    const generatedId = useId();

    const inputId = id ?? generatedId;

    const helperId = `${inputId}-helper`;

    return (
      <div className="qube-input-root">
        {label && (
          <label
            htmlFor={inputId}
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
            id={inputId}
            disabled={disabled}
            aria-invalid={error || undefined}
            aria-describedby={
              helperText ? helperId : undefined
            }
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
            id={helperId}
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