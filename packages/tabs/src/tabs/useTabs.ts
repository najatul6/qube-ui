import { useContext } from "react";
import { TabsContext } from "./TabsContext";

export function useTabs() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error(
      "Tabs components must be used inside <Tabs>"
    );
  }

  return context;
}