import { useRef, useLayoutEffect, useState } from "react";
import { useAccordionItemContext } from "./AccordionItemContext";
import type { AccordionContentProps } from "./Accordion.types";

export function AccordionContent({
  children,
}: AccordionContentProps) {
  const item = useAccordionItemContext();

  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;

    setHeight(ref.current.scrollHeight);
  }, [children]);

  return (
    <div
      id={`${item.id}-content`}
      role="region"
      aria-labelledby={`${item.id}-trigger`}
      className="qube-accordion-content-wrapper"
      style={{
        height: item.open ? height : 0,
      }}
    >
      <div
        ref={ref}
        className="qube-accordion-content"
      >
        {children}
      </div>
    </div>
  );
}