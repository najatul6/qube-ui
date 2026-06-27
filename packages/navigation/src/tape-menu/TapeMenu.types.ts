import { ReactNode } from "react";

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