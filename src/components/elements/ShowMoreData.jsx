import { useState } from "react";

function ShowMoreData({
  children,
  items = [],
  initialCount = 2,
  noResultElement,
  endMessageElement,
  loadCount = 2,
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
    <div
      {...props}
      className={"flex flex-col items-center gap-4 " + (props?.className ?? "")}
    >
      {items.length > 0 ? children(visibleItems) : noResultElement}

      {!loadAll && hasMore ? (
        <button
          onClick={handleShowMore}
          className="mt-2 cursor-pointer rounded-sm bg-(--global-text-color) px-5 py-1 text-sm text-(--global-background-color) transition-opacity hover:opacity-90"
        >
          More...
        </button>
      ) : (
        !loadAll && items.length > 0 && <span>{endMessageElement}</span>
      )}
    </div>
  );
}

export default ShowMoreData;
