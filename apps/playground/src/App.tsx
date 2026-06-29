import { Dialog } from "@qube-ui/dialog";

export default function DialogDemo() {
  return (
    <Dialog>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content>
          <h2>Hello Qube UI</h2>

          <p>This is our Dialog.</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
