import { useEffect, useId, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { RiArrowDownLine } from "@remixicon/react";

import Button from "./Button";

const LoadMoreGrid = ({
  gridId,
  children,
  items = [],
  initialCount = 3,
  noResultElement,
  endMessageElement = <EndMessage>All caught up!</EndMessage>,
  loadCount = 3,
  loadAll = false,
  ...props
}) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const undGridId = useId();

  const hasMore = visibleCount < items.length;
  const visibleItems = items.slice(0, visibleCount);

  const prevCountRef = useRef(initialCount);
  const containerRef = useRef(null);

  const getFocusable = (el) =>
    el.querySelector(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

  useEffect(() => {
    if (!containerRef.current) return;

    const childrenEls = Array.from(containerRef.current.children);
    const firstNewItem = childrenEls[prevCountRef.current];

    const focusTarget = firstNewItem && getFocusable(firstNewItem);
    focusTarget?.focus();

    prevCountRef.current = visibleCount;
  }, [visibleCount]);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      loadAll ? items.length : Math.min(prev + loadCount, items.length),
    );
  };

  return (
    <>
      {items.length > 0 ? (
        <div
          ref={containerRef}
          id={gridId ?? undGridId}
          aria-live="polite"
          className={twMerge(
            "cursor-effect-subtle group/smd grid grid-cols-1 justify-items-center gap-5 *:group-hover/smd:not-hover:not-focus-within:opacity-75 md:grid-cols-2 lg:grid-cols-3",
            props?.className ?? "",
          )}
          {...props}
        >
          {children(visibleItems)}
        </div>
      ) : (
        noResultElement
      )}

      <div className="mt-5 flex justify-center">
        {hasMore ? (
          <Button
            icon={<RiArrowDownLine aria-hidden className="w-3.75" />}
            aria-controls={gridId ?? undGridId}
            onClick={handleShowMore}
          >
            More...
          </Button>
        ) : (
          !loadAll &&
          items.length > 0 &&
          !(items.length <= initialCount) && <span>{endMessageElement}</span>
        )}
      </div>
    </>
  );
};

const EndMessage = ({ children }) => (
  <span className="text-sm opacity-50">{children}</span>
);

export default LoadMoreGrid;
export { EndMessage };
