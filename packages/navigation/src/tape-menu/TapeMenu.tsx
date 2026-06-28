import { useCallback, useState } from "react";
import { useControllableState } from "@qube-ui/core";
import { TapeMenuContext } from "./TapeMenuContext";
import type { TapeMenuItemData, TapeMenuProps } from "./TapeMenu.types";

export function TapeMenu({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
}: TapeMenuProps) {
  
  const [value, setValue] = useControllableState({
  value: controlledValue,
  defaultValue,
  onChange: onValueChange,
});
const [items, setItems] = useState<TapeMenuItemData[]>([]);

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

  const moveFocus = useCallback(
    (currentValue: string, direction: "next" | "prev") => {
      const enabledItems = items.filter((item) => !item.disabled);

      const currentIndex = enabledItems.findIndex(
        (item) => item.value === currentValue,
      );

      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      if (direction === "next") {
        nextIndex = (currentIndex + 1) % enabledItems.length;
      } else {
        nextIndex =
          (currentIndex - 1 + enabledItems.length) % enabledItems.length;
      }

      const nextItem = enabledItems[nextIndex];

      setValue(nextItem.value);
      nextItem.ref.current?.focus();
    },
   [items, setValue]
  );

  return (
    <TapeMenuContext.Provider
      value={{
        value,
        setValue,
        moveFocus,
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
