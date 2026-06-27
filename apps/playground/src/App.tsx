import { useState } from "react";
import { TapeMenu } from "@qube-ui/navigation";

export default function App() {
  const [value, setValue] = useState("home");

  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>

      <TapeMenu defaultValue="home">
        <TapeMenu.Item value="home">Home</TapeMenu.Item>

        {show && <TapeMenu.Item value="products">Products</TapeMenu.Item>}

        <TapeMenu.Item value="pricing">Pricing</TapeMenu.Item>
      </TapeMenu>
    </>
  );
}
