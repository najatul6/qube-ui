import { Accordion } from "@qube-ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion defaultValue="item-1">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Item 1</Accordion.Trigger>

        <Accordion.Content>Content 1</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>Item 2</Accordion.Trigger>

        <Accordion.Content>Content 2</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>Item 3</Accordion.Trigger>

        <Accordion.Content>Content 3</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-4" disabled>
        <Accordion.Trigger>Item 4 (Disabled)</Accordion.Trigger>

        <Accordion.Content>Content 4</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}
