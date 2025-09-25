import { useState } from "react";
import { twMerge } from "tailwind-merge";

function ShowMoreData({
  children,
  items = [],
  initialCount = 3,
  noResultElement,
  endMessageElement = "All caught up!",
  loadCount = 3,
  loadAll = false,
  ...props
}) {
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
            className="cursor-pointer bg-(--global-text-color) px-5 py-1 text-sm text-(--global-background-color) transition-opacity hover:opacity-90"
          >
            More...
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
}

export default ShowMoreData;
