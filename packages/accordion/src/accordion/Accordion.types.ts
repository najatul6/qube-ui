import type { ReactNode, Dispatch, SetStateAction } from "react";

export interface AccordionProps {
  children: ReactNode;

  type?: "single" | "multiple";

  value?: string | string[];

  defaultValue?: string | string[];

  onValueChange?: (value: string | string[]) => void;
}

export interface AccordionItemProps {
  value: string;

  disabled?: boolean;

  children: ReactNode;
}

export interface AccordionTriggerProps {
  children: ReactNode;
}

export interface AccordionContentProps {
  children: ReactNode;
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

  focusNext: (value: string) => void;

  focusPrevious: (value: string) => void;

  focusFirst: () => void;

  focusLast: () => void;
}

export interface AccordionItemContextValue {
  value: string;

  disabled: boolean;

  open: boolean;

  id: string;
}
