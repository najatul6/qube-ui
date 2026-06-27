import { createContext } from "react";

export interface TapeMenuContextValue {
  value?: string;
  setValue: (value: string) => void;
}

export const TapeMenuContext =
  createContext<TapeMenuContextValue | null>(null);