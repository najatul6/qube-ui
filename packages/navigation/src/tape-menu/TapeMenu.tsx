import { useCallback, useState } from "react";
import { TapeMenuContext } from "./TapeMenuContext";
import type { TapeMenuProps } from "./TapeMenu.types";

export function TapeMenu({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
}: TapeMenuProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [items, setItems] = useState<string[]>([]);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const setValue = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  const registerItem = useCallback((item: string) => {
    setItems((prev) => {
      if (prev.includes(item)) return prev;
      return [...prev, item];
    });
  }, []);

  return (
    <TapeMenuContext.Provider
      value={{
        value,
        setValue,
        registerItem,
        items,
      }}
    >
      <nav className="qube-tape-menu" role="tablist">
        {children}
      </nav>
    </TapeMenuContext.Provider>
  );
}
