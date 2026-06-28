import { Separator } from "@qube-ui/separator";

export default function App() {
  return (
    <div
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div>Profile</div>

      <Separator />

      <div>Settings</div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          height: 60,
        }}
      >
        <span>Home</span>

        <Separator orientation="vertical" />

        <span>About</span>

        <Separator orientation="vertical" />

        <span>Contact</span>
      </div>
    </div>
  );
}