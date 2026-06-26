import { ReactNode } from "react";

export interface TapeMenuProps {
  children: ReactNode;
  defaultValue?: string;
}

export interface TapeMenuItemProps {
  children: ReactNode;
  value: string;
}