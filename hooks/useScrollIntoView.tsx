import { MutableRefObject, useCallback } from "react";

export function useScrollIntoView<T extends HTMLElement | null>(
  ref: MutableRefObject<T>
) {
  const element = ref.current;

  const scrollToElement = useCallback(() => {
    element?.scrollIntoView(true);
  }, []);

  scrollToElement();

  return;
}
