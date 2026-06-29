import { useEffect, useRef } from "react";

import { useDialogContext } from "./DialogContext";
import type { DialogContentProps } from "./Dialog.types";

export function DialogContent({
  children,
}: DialogContentProps) {
  const dialog = useDialogContext();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(
      event: KeyboardEvent,
    ) {
      if (event.key === "Escape") {
        dialog.setOpen(false);
      }
    }

    window.addEventListener(
      "keydown",
      onKeyDown,
    );

    return () =>
      window.removeEventListener(
        "keydown",
        onKeyDown,
      );
  }, [dialog]);

  useEffect(() => {
    function onMouseDown(
      event: MouseEvent,
    ) {
      if (
        ref.current &&
        !ref.current.contains(
          event.target as Node,
        )
      ) {
        dialog.setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      onMouseDown,
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        onMouseDown,
      );
  }, [dialog]);

  if (!dialog.open) {
    return null;
  }

  return (
    <div className="qube-dialog-root">
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className="qube-dialog-content"
      >
        {children}
      </div>
    </div>
  );
}