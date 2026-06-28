import { useControllableState } from "@qube-ui/core";
import { TabsContext } from "./TabsContext";
import type { TabsProps } from "./Tabs.types";

export function Tabs({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
}: TabsProps) {
  const [value, setValue] = useControllableState({
    value: controlledValue,
    defaultValue,
    onChange: onValueChange,
  });

  return (
    <TabsContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      <div className="qube-tabs">{children}</div>
    </TabsContext.Provider>
  );
}
