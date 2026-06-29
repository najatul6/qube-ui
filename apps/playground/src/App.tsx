import { Accordion } from "@qube-ui/accordion";

export default function App() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
      }}
    >
      <Accordion defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            What is Qube UI?
          </Accordion.Trigger>

          <Accordion.Content>
            Qube UI is an open source React component
            library.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger>
            Is it accessible?
          </Accordion.Trigger>

          <Accordion.Content>
            Yes. Every component is designed with
            accessibility in mind.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Trigger>
            Does it support TypeScript?
          </Accordion.Trigger>

          <Accordion.Content>
            Yes, it's written in TypeScript from the
            ground up.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}