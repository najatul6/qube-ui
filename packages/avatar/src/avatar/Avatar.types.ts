import type { ImgHTMLAttributes, ReactNode } from "react";

export interface AvatarProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "children"
  > {
  fallback?: ReactNode;

  size?: "sm" | "md" | "lg";
}