import type { ReactNode } from "react";

export interface AccordionProps {
  children: ReactNode;

  type?: "single" | "multiple";

  value?: string | string[];

  defaultValue?: string | string[];

  onValueChange?: (value: string | string[]) => void;
}

export interface AccordionContextValue {
  type: "single" | "multiple";

  value: string | string[];

  toggleItem: (value: string) => void;

  registerTrigger: (
    value: string,
    ref: HTMLButtonElement | null,
    disabled: boolean,
  ) => void;

  focusNext: (current: string) => void;

  focusPrevious: (current: string) => void;

  focusFirst: () => void;

  focusLast: () => void;
}

export interface AccordionItemProps {
  value: string;
  disabled?: boolean;
  children: ReactNode;
}

export interface AccordionItemContextValue {
  value: string;
  disabled: boolean;
  open: boolean;
  id: string;
}

export interface AccordionTriggerProps {
  children: React.ReactNode;
}

export interface AccordionContentProps {
  children: React.ReactNode;
}
