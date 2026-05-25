import { useEffect, useId, useRef, useState } from "react";
import { RiArrowDownLine } from "@remixicon/react";

import Button from "./Button";

const LoadMoreGrid = ({
  gridId,
  children,
  items = [],
  initialCount = 6,
  noResultElement,
  endMessageElement = <EndMessage>All caught up!</EndMessage>,
  loadCount = 3, // number | "all"
  ...props
}) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const undGridId = useId();

  const isLoadAll = loadCount === "all";
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
      isLoadAll ? items.length : Math.min(prev + loadCount, items.length),
    );
  };

  return (
    <>
      {items.length > 0 ? (
        <div
          ref={containerRef}
          id={gridId ?? undGridId}
          aria-live="polite"
          className="cursor-effect-subtle group/smd grid grid-cols-1 justify-items-center gap-5 *:group-hover/smd:not-hover:not-focus-within:opacity-75 md:grid-cols-2 lg:grid-cols-3"
          {...props}
        >
          {children(visibleItems)}
        </div>
      ) : (
        noResultElement
      )}

      <div className="mt-10 flex justify-center">
        {hasMore ? (
          <Button
            icon={<RiArrowDownLine aria-hidden className="w-3.75" />}
            aria-controls={gridId ?? undGridId}
            onClick={handleShowMore}
            className="px-4 py-1"
          >
            Load More
          </Button>
        ) : (
          !isLoadAll &&
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
