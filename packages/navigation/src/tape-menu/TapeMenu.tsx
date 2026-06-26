import { useState } from "react";
import { TapeMenuContext } from "./TapeMenuContext";
import type { TapeMenuProps } from "./TapeMenu.types";

export function TapeMenu({
  children,
  defaultValue,
}: TapeMenuProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <TapeMenuContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      <nav className="qube-tape-menu">
        {children}
      </nav>
    </TapeMenuContext.Provider>
  );
}