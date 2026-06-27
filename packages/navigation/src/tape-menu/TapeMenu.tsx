import { useCallback, useState } from "react";
import { TapeMenuContext } from "./TapeMenuContext";
import type { TapeMenuItemData, TapeMenuProps } from "./TapeMenu.types";

export function TapeMenu({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
}: TapeMenuProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [items, setItems] = useState<TapeMenuItemData[]>([]);

  const isControlled = controlledValue !== undefined;

  const value = isControlled ? controlledValue : internalValue;

  const setValue = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  const registerItem = useCallback((item: TapeMenuItemData) => {
    setItems((prev) => {
      if (prev.some((i) => i.value === item.value)) {
        return prev;
      }

      return [...prev, item];
    });
  }, []);

  const unregisterItem = useCallback((value: string) => {
    setItems((prev) => prev.filter((item) => item.value !== value));
  }, []);

  return (
    <TapeMenuContext.Provider
      value={{
        value,
        setValue,
        items,
        registerItem,
        unregisterItem,
      }}
    >
      <nav className="qube-tape-menu" role="tablist">
        {children}
      </nav>
    </TapeMenuContext.Provider>
  );
}
