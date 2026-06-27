import { useState } from "react";
import { TapeMenuContext } from "./TapeMenuContext";
import type { TapeMenuProps } from "./TapeMenu.types";

export function TapeMenu({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
}: TapeMenuProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = controlledValue !== undefined;

  const value = isControlled ? controlledValue : internalValue;

  const setValue = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

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