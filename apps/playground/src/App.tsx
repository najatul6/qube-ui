import { useState } from "react";
import { TapeMenu } from "@qube-ui/navigation";

export default function App() {
  const [value, setValue] = useState("home");

  return (
    <TapeMenu
      value={value}
      onValueChange={setValue}
    >
      <TapeMenu.Item value="home">Home</TapeMenu.Item>
      <TapeMenu.Item value="products">Products</TapeMenu.Item>
      <TapeMenu.Item value="pricing">Pricing</TapeMenu.Item>
      <TapeMenu.Item value="about">About</TapeMenu.Item>
      <TapeMenu.Item value="contact">Contact</TapeMenu.Item>
    </TapeMenu>
  );
}