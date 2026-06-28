import { useTabs } from "./useTabs";
import type { TabsTriggerProps } from "./Tabs.types";

export function TabsTrigger({
  children,
  value,
  disabled = false,
}: TabsTriggerProps) {
  const tabs = useTabs();

  const active = tabs.value === value;

  return (
    <button
      type="button"
      role="tab"
      disabled={disabled}
      aria-selected={active}
      data-active={active}
      className="qube-tabs-trigger"
      onClick={() => tabs.setValue(value)}
    >
      {children}
    </button>
  );
}