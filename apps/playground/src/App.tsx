import { Avatar } from "@qube-ui/avatar";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        padding: 40,
        alignItems: "center",
      }}
    >
      <Avatar
        src="https://i.pravatar.cc/150?img=1"
        alt="User"
        fallback="U"
      />

      <Avatar fallback="NI" />

      <Avatar
        size="sm"
        fallback="SM"
      />

      <Avatar
        size="lg"
        fallback="LG"
      />

      <Avatar
        src="broken-image.jpg"
        fallback="ER"
      />
    </div>
  );
}