import { Input } from "@qube-ui/input";

export default function App() {
  return (
    <div
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        maxWidth: 400,
      }}
    >
      <Input
        label="Email"
        placeholder="Enter your email"
      />

      <Input
        label="Search"
        placeholder="Search..."
        leftIcon={<span>🔍</span>}
      />

      <Input
        label="Password"
        type="password"
        rightIcon={<span>👁️</span>}
      />

      <Input
        label="Username"
        helperText="Only letters and numbers."
      />

      <Input
        label="Email"
        error
        helperText="Email is required."
      />

      <Input
        label="Disabled"
        disabled
        placeholder="Disabled input"
      />

      <Input
        label="Large"
        size="lg"
        placeholder="Large input"
      />
    </div>
  );
}