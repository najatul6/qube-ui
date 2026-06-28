import { useTabs } from "./useTabs";
import type { TabsContentProps } from "./Tabs.types";

export function TabsContent({
  children,
  value,
}: TabsContentProps) {
  const tabs = useTabs();

  if (tabs.value !== value) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      className="qube-tabs-content"
    >
      {children}
    </div>
  );
}