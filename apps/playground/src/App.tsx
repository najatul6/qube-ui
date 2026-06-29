import { Dialog } from "@qube-ui/dialog";
import "@qube-ui/tokens";
export default function DialogDemo() {
  return (
    <>
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
      <div
        style={{
          background: "var(--color-primary)",
          padding: "var(--space-4)",
          borderRadius: "var(--radius-md)",
          color: "white",
        }}
      >
        Qube UI Tokens Working 🚀
      </div>
    </>
  );
}
