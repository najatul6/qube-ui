import type { TabsListProps } from "./Tabs.types";

export function TabsList({ children }: TabsListProps) {
  return (
    <div role="tablist" className="qube-tabs-list">
      {children}
    </div>
  );
}