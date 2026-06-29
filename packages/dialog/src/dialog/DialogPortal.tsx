import { createPortal } from "react-dom";

import { useDialogContext } from "./DialogContext";
import type { ReactNode } from "react";

interface DialogPortalProps {
  children: ReactNode;
}

export function DialogPortal({
  children,
}: DialogPortalProps) {
  const dialog = useDialogContext();

  if (!dialog.open) {
    return null;
  }

  return createPortal(
    children,
    document.body,
  );
}