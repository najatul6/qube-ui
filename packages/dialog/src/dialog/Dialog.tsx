import { useCallback, useEffect } from "react";
import { useControllableState } from "@qube-ui/core";
import { DialogPortal } from "./DialogPortal";
import { DialogContext } from "./DialogContext";
import type { DialogProps } from "./Dialog.types";
import { DialogTrigger } from "./DialogTrigger";
import { DialogContent } from "./DialogContent";
import { DialogOverlay } from "./DialogOverlay";

export function DialogRoot({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: DialogProps) {
  const [open, setOpen] = useControllableState<boolean>({
    value: controlledOpen,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });
  
  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

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
  Portal: typeof DialogPortal;
  Overlay: typeof DialogOverlay;
};

export const Dialog = DialogRoot as DialogComponent;

Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Portal = DialogPortal;
Dialog.Overlay = DialogOverlay;