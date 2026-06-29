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

  const triggerRefs = useRef(
    new Map<
      string,
      {
        ref: HTMLButtonElement;
        disabled: boolean;
      }
    >(),
  );

  const toggleItem = useCallback(
    (itemValue: string) => {
      if (type === "single") {
        setValue(value === itemValue ? "" : itemValue);

        return;
      }

      const values = Array.isArray(value) ? value : [];

      if (values.includes(itemValue)) {
        setValue(values.filter((v) => v !== itemValue));
      } else {
        setValue([...values, itemValue]);
      }
    },
    [type, value, setValue],
  );

  const registerTrigger = useCallback(
    (value: string, ref: HTMLButtonElement | null, disabled: boolean) => {
      if (ref) {
        triggerRefs.current.set(value, {
          ref,
          disabled,
        });
      } else {
        triggerRefs.current.delete(value);
      }
    },
    [],
  );

  const getValues = () =>
    Array.from(triggerRefs.current.entries())
      .filter(([, item]) => !item.disabled)
      .map(([value]) => value);

  const focusNext = useCallback((current: string) => {
    const values = getValues();

    const index = values.indexOf(current);

    if (index === -1) return;

    const next = values[(index + 1) % values.length];

    triggerRefs.current.get(next)?.ref.focus();
  }, []);

  const focusPrevious = useCallback((current: string) => {
    const values = getValues();

    const index = values.indexOf(current);

    if (index === -1) return;

    const prev = values[(index - 1 + values.length) % values.length];

    triggerRefs.current.get(prev)?.ref.focus();
  }, []);

  const focusFirst = useCallback(() => {
    getValues().length && triggerRefs.current.get(getValues()[0])?.ref.focus();
  }, []);

  const focusLast = useCallback(() => {
    const values = getValues();

    if (!values.length) return;

    triggerRefs.current.get(values[values.length - 1])?.ref.focus();
  }, []);

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
