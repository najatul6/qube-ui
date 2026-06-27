import { createContext } from "react";

export interface TapeMenuContextValue {
  value?: string;
  setValue: (value: string) => void;

  registerItem: (value: string) => void;
  items: string[];
}

export const TapeMenuContext =
  createContext<TapeMenuContextValue | null>(null);