import { createContext } from "react";
import type { TapeMenuItemData } from "./TapeMenu.types";

export interface TapeMenuContextValue {
  value?: string;
  setValue: (value: string) => void;

  items: TapeMenuItemData[];

  registerItem: (item: TapeMenuItemData) => void;
  unregisterItem: (value: string) => void;

  moveFocus: (
    currentValue: string,
    direction: "next" | "prev"
  ) => void;
}
export const TapeMenuContext =
  createContext<TapeMenuContextValue | null>(null);