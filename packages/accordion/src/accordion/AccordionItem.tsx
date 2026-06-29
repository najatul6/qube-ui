import { AccordionItemContext } from "./AccordionItemContext";
import { useAccordionContext } from "./AccordionContext";
import type { AccordionItemProps } from "./Accordion.types";
import { useId } from "react";

export function AccordionItem({
  value,
  disabled = false,
  children,
}: AccordionItemProps) {
  const accordion = useAccordionContext();
  const id = useId();
  const open = Array.isArray(accordion.value)
    ? accordion.value.includes(value)
    : accordion.value === value;

  return (
    <AccordionItemContext.Provider
      value={{
        value,
        disabled,
        open,
        id
      }}
    >
      <div
        className="qube-accordion-item"
        data-state={open ? "open" : "closed"}
        data-disabled={disabled || undefined}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}
