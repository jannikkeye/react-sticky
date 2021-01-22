import React, {
  CSSProperties,
  FC,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { getElementPaddings, useEvent } from "./helpers";

export type StickyProps = {
  startOffsetTop?: number;
  stopOffsetBottom?: number;
};

export const Sticky: FC<StickyProps> = ({
  children,
  startOffsetTop = 0,
  stopOffsetBottom = 0,
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLElement | null>(null);
  const [elementBounds, setElementBounds] = useState<DOMRect>();
  const [styles, setStyles] = useState<CSSProperties>();

  const updateStyles = useCallback((elementBounds: DOMRect) => {
    if (parentRef.current) {
      const parentPaddings = getElementPaddings(parentRef.current);
      const parentBounds = parentRef.current.getBoundingClientRect();

      const topModifier =
        parentBounds.top +
        parentBounds.height -
        startOffsetTop -
        elementBounds.height -
        stopOffsetBottom -
        parentPaddings.paddingBottom * 2;

      if (parentBounds.y - startOffsetTop <= 0) {
        setStyles({
          position: "fixed",
          width:
            parentBounds.width -
            parentPaddings.paddingLeft -
            parentPaddings.paddingRight +
            "px",
          top: startOffsetTop + parentPaddings.paddingTop + "px",
          transform: `translateY(${topModifier < 0 ? topModifier : 0}px)`,
          willChange: "transform",
        });
      } else {
        setStyles({});
      }
    }
  }, []);

  const handleUpdate = useCallback(() => {
    requestAnimationFrame(() => {
      if (elementBounds) {
        updateStyles(elementBounds);
      }
    });
  }, [elementBounds]);

  useLayoutEffect(() => {
    if (elementRef.current) {
      const bounds = elementRef.current.getBoundingClientRect();

      setElementBounds(bounds);

      parentRef.current = elementRef.current.parentElement;

      updateStyles(bounds);
    }
  }, []);

  useEvent("scroll", handleUpdate);
  useEvent("resize", handleUpdate);

  return (
    <div ref={elementRef} style={styles}>
      {children}
    </div>
  );
};
