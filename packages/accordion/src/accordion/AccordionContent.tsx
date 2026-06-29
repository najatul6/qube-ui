import { cn } from "@qube-ui/core";
import { useAccordionItemContext } from "./AccordionItemContext";
import type { AccordionContentProps } from "./Accordion.types";

export function AccordionContent({ children }: AccordionContentProps) {
  const item = useAccordionItemContext();

  return (
    <div
      id={`${item.id}-content`}
      role="region"
      aria-labelledby={`${item.id}-trigger`}
      hidden={!item.open}
      className={cn(
        "qube-accordion-content",
        item.open && "qube-accordion-content--open",
      )}
    >
      <div className="qube-accordion-content__inner">
        {children}
      </div>
    </div>
  );
}