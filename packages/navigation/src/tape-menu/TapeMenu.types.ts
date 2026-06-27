import type { ReactNode, RefObject } from "react";

export interface TapeMenuProps {
  children: ReactNode;

  value?: string;
  defaultValue?: string;

  onValueChange?: (value: string) => void;
}

export interface TapeMenuItemProps {
  children: ReactNode;

  value: string;
  disabled?: boolean;
}

export interface TapeMenuItemData {
  value: string;
  disabled: boolean;
  ref: RefObject<HTMLButtonElement | null>;
}