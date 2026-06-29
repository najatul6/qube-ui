import type { MouseEvent } from "react";

import { useDialogContext } from "./DialogContext";
import type { DialogTriggerProps } from "./Dialog.types";

export function DialogTrigger({
  children,
}: DialogTriggerProps) {
  const dialog =
    useDialogContext();

  function handleClick(
    event: MouseEvent<HTMLButtonElement>,
  ) {
    event.preventDefault();

    dialog.toggle();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}