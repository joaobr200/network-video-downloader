import { MutableRefObject } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export function useScrollIntoView<T extends HTMLElement | null>(
  ref: MutableRefObject<T>
) {
  useIsomorphicLayoutEffect(() => {
    ref.current?.scrollIntoView(true);
  }, [ref]);

  return;
}
