import { MutableRefObject, useCallback, useEffect } from "react";

export function useScrollIntoView<T extends HTMLElement | null>(
  ref: MutableRefObject<T>
) {
  useEffect(() => {
    ref.current?.scrollIntoView(true);
  }, []);

  return;
}
