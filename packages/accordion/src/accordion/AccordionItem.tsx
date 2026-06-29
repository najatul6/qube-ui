import { useId } from "react";
import { useAccordionContext } from "./AccordionContext";
import type { AccordionItemProps } from "./Accordion.types";
import { AccordionItemContext } from "./AccordionItemContext";

export function AccordionItem({
  value,
  disabled = false,
  children,
}: AccordionItemProps) {
  const accordion = useAccordionContext();
  const id = useId();
  const triggerId = `${id}-trigger`;
  const contentId = `${id}-content`;
  const open = Array.isArray(accordion.value)
    ? accordion.value.includes(value)
    : accordion.value === value;

  return (
    <AccordionItemContext.Provider
      value={{
        value,
        disabled,
        open,
        id,
        triggerId,
        contentId,
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
