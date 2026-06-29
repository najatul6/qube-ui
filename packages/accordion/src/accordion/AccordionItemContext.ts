import { createContext, useContext } from "react";
import type { AccordionItemContextValue } from "./Accordion.types";

export const AccordionItemContext =
  createContext<AccordionItemContextValue | null>(
    null,
  );

export function useAccordionItemContext() {
  const context = useContext(
    AccordionItemContext,
  );

  if (!context) {
    throw new Error(
      "AccordionItem components must be used within Accordion.Item.",
    );
  }

  return context;
}