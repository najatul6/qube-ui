import { useState } from "react";
import { TabsContext } from "./TabsContext";
import type { TabsProps } from "./Tabs.types";

export function Tabs({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
}: TabsProps) {
  const [internalValue, setInternalValue] =
    useState(defaultValue);

  const isControlled =
    controlledValue !== undefined;

  const value = isControlled
    ? controlledValue
    : internalValue;

  const setValue = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  return (
    <TabsContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
}