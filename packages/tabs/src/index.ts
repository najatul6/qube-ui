import "./tabs/styles.css";

import { Tabs } from "./tabs/Tabs";
import { TabsList } from "./tabs/TabsList";
import { TabsTrigger } from "./tabs/TabsTrigger";
import { TabsContent } from "./tabs/TabsContent";

const Root = Object.assign(Tabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export { Root as Tabs };

export type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from "./tabs/Tabs.types";