import { useEffect, useMemo } from "react";

export const parsePxValue = (v: string) => parseFloat(v.replace("px", ""));

export const getElementPaddings = (element: HTMLElement) => {
  const computedStyles = window.getComputedStyle(element);

  return {
    paddingTop: parsePxValue(computedStyles.paddingTop),
    paddingRight: parsePxValue(computedStyles.paddingRight),
    paddingBottom: parsePxValue(computedStyles.paddingBottom),
    paddingLeft: parsePxValue(computedStyles.paddingLeft),
  };
};

export const useEvent = (event: string, callback: (event: Event) => void) => {
  const memoizedCallback = useMemo(() => callback, [callback]);

  useEffect(() => {
    window.addEventListener(event, memoizedCallback);
    return () => {
      window.removeEventListener(event, memoizedCallback);
    };
  }, [event, memoizedCallback]);
};
