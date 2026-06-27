import "./tape-menu/styles.css";
import { TapeMenu } from "./tape-menu/TapeMenu";
import { TapeMenuItem } from "./tape-menu/TapeMenuItem";

const Root = Object.assign(TapeMenu, {
  Item: TapeMenuItem,
});

export { Root as TapeMenu };