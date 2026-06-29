import { createContext, useContext } from "react";
import type { AccordionItemContextValue } from "./Accordion.types";

export const AccordionItemContext =
  createContext<AccordionItemContextValue | null>(null);

export function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "Accordion.Item must be used inside Accordion.",
    );
  }

  return context;
}