import { useCallback } from "react";
import { useControllableState } from "@qube-ui/core";

import { DialogContext } from "./DialogContext";
import type { DialogProps } from "./Dialog.types";
import { DialogTrigger } from "./DialogTrigger";
import { DialogContent } from "./DialogContent";


export function DialogRoot({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: DialogProps) {
  const [open, setOpen] =
    useControllableState<boolean>({
      value: controlledOpen,
      defaultValue: defaultOpen,
      onChange: onOpenChange,
    });

  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <DialogContext.Provider
      value={{
        open,
        setOpen,
        toggle,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

DialogRoot.displayName = "Dialog";

type DialogComponent = typeof DialogRoot & {
  Trigger: typeof DialogTrigger;
  Content: typeof DialogContent;
};

export const Dialog =
  DialogRoot as DialogComponent;

Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;