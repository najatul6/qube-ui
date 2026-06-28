import { createContext } from "react";

export interface TabsContextValue {
  value?: string;

  setValue: (value: string) => void;
}

export const TabsContext =
  createContext<TabsContextValue | null>(null);