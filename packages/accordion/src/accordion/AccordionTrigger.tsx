import {
  useEffect,
  useRef,
} from "react";
import { cn } from "@qube-ui/core";
import { useAccordionContext } from "./AccordionContext";
import { useAccordionItemContext } from "./AccordionItemContext";
import type { AccordionTriggerProps } from "./Accordion.types";

export function AccordionTrigger({
  children,
}: AccordionTriggerProps) {
  const accordion = useAccordionContext();
  const item = useAccordionItemContext();

  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    accordion.registerTrigger(
      item.value,
      ref.current,
      item.disabled,
    );

    return () =>
      accordion.registerTrigger(
        item.value,
        null,
        item.disabled,
      );
  }, [accordion, item]);

  return (
    <button
      ref={ref}
      id={`${item.id}-trigger`}
      type="button"
      disabled={item.disabled}
      aria-expanded={item.open}
      aria-controls={`${item.id}-content`}
      className={cn(
        "qube-accordion-trigger",
        item.open &&
          "qube-accordion-trigger--open",
      )}
      onClick={() =>
        accordion.toggleItem(item.value)
      }
      onKeyDown={(e) => {
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault();
            accordion.focusNext(item.value);
            break;

          case "ArrowUp":
            e.preventDefault();
            accordion.focusPrevious(item.value);
            break;

          case "Home":
            e.preventDefault();
            accordion.focusFirst();
            break;

          case "End":
            e.preventDefault();
            accordion.focusLast();
            break;
        }
      }}
    >
       <span>{children}</span>

  <span
    className={cn(
      "qube-accordion-chevron",
      item.open &&
        "qube-accordion-chevron--open",
    )}
  >
    ▼
  </span>
    </button>
  );
}