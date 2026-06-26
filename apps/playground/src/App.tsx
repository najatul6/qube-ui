import { TapeMenu } from "@qube-ui/navigation";

export default function App() {
  return (
    <TapeMenu defaultValue="home">
      <TapeMenu.Item value="home">Home</TapeMenu.Item>
      <TapeMenu.Item value="products">Products</TapeMenu.Item>
      <TapeMenu.Item value="pricing">Pricing</TapeMenu.Item>
      <TapeMenu.Item value="about">About</TapeMenu.Item>
    </TapeMenu>
  );
}