import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  ArrowDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

import Anchor from "@components/elements/Anchor";

const ShowMoreData = ({
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

  const hasMore = !loadAll && visibleCount < items.length;
  const visibleItems = loadAll ? items : items.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadCount, items.length));
  };

  return (
    <div>
      {items.length > 0 ? (
        <div
          className={twMerge(
            "grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3",
            props?.className ?? "",
          )}
          {...props}
        >
          {children(visibleItems)}
        </div>
      ) : (
        noResultElement
      )}

      {!loadAll && hasMore ? (
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleShowMore}
            className="flex cursor-pointer items-center gap-1 bg-(--global-text-color) px-2.5 py-1 text-sm tracking-wide text-(--global-background-color) transition-opacity hover:opacity-80"
          >
            <ArrowDownIcon className="w-3.5 shrink-0" /> More...
          </button>
        </div>
      ) : (
        !loadAll &&
        items.length > 0 && (
          <div className="mt-5 flex justify-center">
            {!(items.length <= initialCount) && (
              <span>{endMessageElement}</span>
            )}
          </div>
        )
      )}
    </div>
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
    <span className="text-(--global-secondary-text-color)">{text}:</span>
    <Anchor color="var(--global-text-color)" href={href} {...props}>
      {linkText}
    </Anchor>
  </div>
);

export default ShowMoreData;
export { EndMessage, ExploreMoreLink };
