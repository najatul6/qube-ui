import { cn } from "@qube-ui/core";
import { useEffect, useRef } from "react";
import { useAccordionItemContext } from "./AccordionItemContext";
import type { AccordionContentProps } from "./Accordion.types";

export function AccordionContent({
  children,
}: AccordionContentProps) {
  const item = useAccordionItemContext();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (item.open) {
      const height = element.scrollHeight;

      element.style.height = "0px";

      requestAnimationFrame(() => {
        element.style.height = `${height}px`;
      });

      const handle = () => {
        element.style.height = "auto";
      };

      element.addEventListener("transitionend", handle, {
        once: true,
      });
    } else {
      const height = element.scrollHeight;

      element.style.height = `${height}px`;

      requestAnimationFrame(() => {
        element.style.height = "0px";
      });
    }
  }, [item.open]);

  return (
    <div
      id={item.contentId}
      role="region"
      aria-labelledby={item.triggerId}
      hidden={false}
      className={cn(
        "qube-accordion-content",
        item.open && "qube-accordion-content--open",
      )}
    >
      <div
        ref={ref}
        className="qube-accordion-content__inner"
      >
        {children}
      </div>
    </div>
  );
}