import { createContext, useContext } from "react";
import type { AccordionContextValue } from "./Accordion.types";

export const AccordionContext =
  createContext<AccordionContextValue | null>(
    null,
  );

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "Accordion components must be used within Accordion.",
    );
  }

  return context;
}