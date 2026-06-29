import "./accordion/styles.css";

import { Accordion as AccordionRoot } from "./accordion/Accordion";
import { AccordionItem } from "./accordion/AccordionItem";
import { AccordionTrigger } from "./accordion/AccordionTrigger";
import { AccordionContent } from "./accordion/AccordionContent";

const Accordion = Object.assign(
  AccordionRoot,
  {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
  },
);

export { Accordion };

export type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "./accordion/Accordion.types";