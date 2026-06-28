import { Badge } from "@qube-ui/badge";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
        padding: 40,
      }}
    >
      <Badge>Default</Badge>

      <Badge color="primary">Primary</Badge>

      <Badge color="success">Success</Badge>

      <Badge color="warning">Warning</Badge>

      <Badge color="danger">Danger</Badge>

      <Badge variant="outline">
        Outline
      </Badge>

      <Badge size="sm">Small</Badge>

      <Badge size="lg">Large</Badge>
    </div>
  );
}