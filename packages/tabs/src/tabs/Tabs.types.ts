import type { ReactNode } from "react";

export interface TabsProps {
  children: ReactNode;

  value?: string;
  defaultValue?: string;

  onValueChange?: (value: string) => void;
}

export interface TabsListProps {
  children: ReactNode;
}

export interface TabsTriggerProps {
  children: ReactNode;

  value: string;

  disabled?: boolean;
}

export interface TabsContentProps {
  children: ReactNode;

  value: string;
}