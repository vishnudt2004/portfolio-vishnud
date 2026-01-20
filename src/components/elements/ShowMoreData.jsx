import { useEffect, useId, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  ArrowDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import Anchor from "./Anchor";

const ShowMoreData = ({
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
          <button
            aria-controls={gridId ?? undGridId}
            onClick={handleShowMore}
            className="flex cursor-pointer items-center gap-1 rounded-full bg-(--text-color-g)/90 px-2.5 py-1 text-sm tracking-wide text-(--background-color-g) transition-colors hover:bg-(--text-color-g) focus:bg-(--text-color-g)"
          >
            <ArrowDownIcon aria-hidden className="w-3.5 shrink-0" /> More...
          </button>
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

const ExploreMoreLink = ({
  text = "Explore more on here",
  href,
  linkText = (
    <span className="inline-flex items-center gap-2">
      <InformationCircleIcon className="size-4.5" /> Link
    </span>
  ),
  ...props
}) => (
  <div className="mt-5 flex flex-wrap justify-center gap-2 text-center text-sm">
    <span className="text-(--text-secondary-color-g)">{text}:</span>
    <Anchor color="var(--text-color-g)" href={href} {...props}>
      {linkText}
    </Anchor>
  </div>
);

export default ShowMoreData;
export { EndMessage, ExploreMoreLink };
