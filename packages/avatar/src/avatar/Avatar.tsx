import { forwardRef, useState } from "react";
import { cn } from "@qube-ui/core";
import type { AvatarProps } from "./Avatar.types";

export const Avatar = forwardRef<
  HTMLDivElement,
  AvatarProps
>(
  (
    {
      src,
      alt,
      fallback,
      size = "md",
      className,
      ...props
    },
    ref,
  ) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          "qube-avatar",
          `qube-avatar--${size}`,
          className,
        )}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            className="qube-avatar__image"
            onError={() => setImageError(true)}
            {...props}
          />
        ) : (
          <span className="qube-avatar__fallback">
            {fallback}
          </span>
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";