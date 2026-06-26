import { TapeMenu } from "./tape-menu/TapeMenu";
import { TapeMenuItem } from "./tape-menu/TapeMenuItem";
import "./styles.css";

const Root = Object.assign(TapeMenu, {
  Item: TapeMenuItem,
});

export { Root as TapeMenu };