import { useDialogContext } from "./DialogContext";

import type { DialogContentProps } from "./Dialog.types";

export function DialogContent({
  children,
}: DialogContentProps) {
  const dialog =
    useDialogContext();

  if (!dialog.open) {
    return null;
  }

  return (
    <div role="dialog" aria-modal="true">
      {children}
    </div>
  );
}