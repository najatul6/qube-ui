import { useDialogContext } from "./DialogContext";

export function DialogOverlay() {
  const dialog = useDialogContext();

  if (!dialog.open) {
    return null;
  }

  return (
    <div
      className="qube-dialog-overlay"
      onClick={() => dialog.setOpen(false)}
    />
  );
}