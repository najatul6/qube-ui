import { useContext } from "react";
import { TapeMenuContext } from "./TapeMenuContext";

export function useTapeMenu() {
  const context = useContext(TapeMenuContext);

  if (!context) {
    throw new Error(
      "TapeMenu.Item must be used inside <TapeMenu>"
    );
  }

  return context;
}