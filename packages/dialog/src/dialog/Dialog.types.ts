import type { ReactNode } from "react";

export interface DialogProps {
  children: ReactNode;

  open?: boolean;

  defaultOpen?: boolean;

  onOpenChange?: (open: boolean) => void;
}

export interface DialogTriggerProps {
  children: ReactNode;
}

export interface DialogContentProps {
  children: ReactNode;
}

export interface DialogContextValue {
  open: boolean;

  setOpen: (open: boolean) => void;

  toggle: () => void;
}