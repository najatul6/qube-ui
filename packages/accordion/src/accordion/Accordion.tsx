import { useCallback, useRef } from "react";
import { useControllableState } from "@qube-ui/core";
import { AccordionContext } from "./AccordionContext";
import type { AccordionProps } from "./Accordion.types";

export function Accordion({
  children,
  type = "single",
  value: controlledValue,
  defaultValue,
  onValueChange,
}: AccordionProps) {
  const [value, setValue] = useControllableState<string | string[]>({
    value: controlledValue,
    defaultValue: defaultValue ?? (type === "single" ? "" : []),
    onChange: onValueChange,
  });

  const triggers = useRef<
    Map<
      string,
      {
        ref: HTMLButtonElement | null;
        disabled: boolean;
      }
    >
  >(new Map());

  const registerTrigger = useCallback(
    (
      value: string,
      ref: HTMLButtonElement | null,
      disabled: boolean,
    ) => {
      if (!ref) {
        triggers.current.delete(value);
        return;
      }

      triggers.current.set(value, {
        ref,
        disabled,
      });
    },
    [],
  );

  const getEnabled = () =>
    [...triggers.current.entries()].filter(
      ([, item]) => !item.disabled,
    );

  const focusNext = useCallback((current: string) => {
    const items = getEnabled();

    const index = items.findIndex(
      ([value]) => value === current,
    );

    if (index === -1) return;

    items[(index + 1) % items.length][1].ref?.focus();
  }, []);

  const focusPrevious = useCallback(
    (current: string) => {
      const items = getEnabled();

      const index = items.findIndex(
        ([value]) => value === current,
      );

      if (index === -1) return;

      items[
        (index - 1 + items.length) % items.length
      ][1].ref?.focus();
    },
    [],
  );

  const focusFirst = useCallback(() => {
    getEnabled()[0]?.[1].ref?.focus();
  }, []);

  const focusLast = useCallback(() => {
    const items = getEnabled();

    items[items.length - 1]?.[1].ref?.focus();
  }, []);

  const toggleItem = useCallback(
    (itemValue: string) => {
      if (type === "single") {
        setValue(value === itemValue ? "" : itemValue);
        return;
      }

      const values = Array.isArray(value) ? value : [];

      setValue(
        values.includes(itemValue)
          ? values.filter((v) => v !== itemValue)
          : [...values, itemValue],
      );
    },
    [type, value, setValue],
  );

  return (
    <AccordionContext.Provider
      value={{
        type,
        value,
        toggleItem,
        registerTrigger,
        focusNext,
        focusPrevious,
        focusFirst,
        focusLast,
      }}
    >
      <div className="qube-accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

Accordion.displayName = "Accordion";