import { useEffect, useRef } from "react";
import { useTapeMenu } from "./useTapeMenu";
import type { TapeMenuItemProps } from "./TapeMenu.types";

export function TapeMenuItem({
  children,
  value,
  disabled = false,
}: TapeMenuItemProps) {
  const menu = useTapeMenu();

  const ref = useRef<HTMLButtonElement>(null);

  const active = menu.value === value;

  useEffect(() => {
    menu.registerItem({
      value,
      disabled,
      ref,
    });

    return () => {
      menu.unregisterItem(value);
    };
  }, [menu, value, disabled]);

  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      disabled={disabled}
      className="qube-tape-menu-item"
      data-active={active}
      onClick={() => menu.setValue(value)}
    >
      {children}
    </button>
  );
}
