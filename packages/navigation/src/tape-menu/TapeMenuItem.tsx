import { useTapeMenu } from "./useTapeMenu";
import type { TapeMenuItemProps } from "./TapeMenu.types";

export function TapeMenuItem({
  children,
  value,
}: TapeMenuItemProps) {
  const menu = useTapeMenu();

  const active = menu.value === value;

  return (
    <button
      type="button"
       className="qube-tape-menu-item"
       data-active={active}
      onClick={() => menu.setValue(value)}
    >
      {children}
    </button>
  );
}