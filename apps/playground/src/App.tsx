import { Button } from "@qube-ui/button";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        padding: 40,
        flexWrap: "wrap",
      }}
    >
      <Button>Default</Button>

      <Button variant="outline">Outline</Button>

      <Button variant="ghost">Ghost</Button>

      <Button size="sm">Small</Button>

      <Button size="md">Medium</Button>

      <Button size="lg">Large</Button>

      <Button loading>Loading</Button>

      <Button disabled>Disabled</Button>

      <Button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Click Me
      </Button>
      <Button leftIcon={<span>🚀</span>}>Deploy</Button>

      <Button rightIcon={<span>→</span>}>Continue</Button>

      <Button leftIcon={<span>💾</span>} variant="outline">
        Save
      </Button>
    </div>
  );
}
