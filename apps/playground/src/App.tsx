import { Spinner } from "@qube-ui/spinner";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        alignItems: "center",
        padding: 40,
      }}
    >
      <Spinner />

      <Spinner size="sm" />

      <Spinner size="lg" />

      <Spinner thickness="thin" />

      <Spinner thickness="thick" />

      <Spinner color="current" />
    </div>
  );
}