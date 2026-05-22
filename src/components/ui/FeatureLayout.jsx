import { useLocation, useNavigate } from "react-router";
import { RiArrowLeftLongLine } from "@remixicon/react";

import { take } from "@/utils/jsUtils";
import HeadingScope from "../helpers/HeadingScope";
import { SectionTitle, SimpleLayout } from "./SectionLayouts";
import LoadMoreGrid from "./LoadMoreGrid";
import Button from "./Button";

const SectionActions = ({
  // use <Link> / <a>
  primary: p,
  secondary: s,
  goBack,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const canGoBack = goBack || pathname !== "/";

  return (
    <>
      <hr
        aria-hidden
        className="mx-auto mt-10 mb-5 h-px w-full border-0 bg-(--border-color-g)"
      />

      <div className="grid grid-cols-1 gap-3 px-2 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div
          aria-hidden={!canGoBack}
          className="order-2 mt-5 justify-self-center text-nowrap sm:order-0 sm:mt-0 sm:justify-self-start"
        >
          {canGoBack && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 *:size-4.5"
            >
              <RiArrowLeftLongLine aria-hidden /> Go Back
            </button>
          )}
        </div>

        {(p || s) && (
          <div className="mx-auto flex flex-wrap justify-center gap-3 max-sm:grid max-sm:w-fit">
            {p && (
              <Button
                className={
                  "gap-1.5 *:size-4.5 max-sm:w-full " + "pl-3" // temp
                }
                variant="solid"
                asChild
              >
                {p}
              </Button>
            )}
            {s && (
              <Button
                className="gap-1.5 *:size-4.5 max-sm:w-full"
                variant="outline"
                asChild
              >
                {s}
              </Button>
            )}
          </div>
        )}

        <div aria-hidden className="hidden sm:block" />
      </div>
    </>
  );
};

const FeatureLayout = ({
  ids: { sectionId, gridId },
  title,
  featuredCount,
  cardComponent: Card,
  data,
  actions,
}) => {
  const items = featuredCount ? take(data, featuredCount) : data;

  return (
    <SimpleLayout
      sectionTitle={<SectionTitle sectionId={sectionId}>{title}</SectionTitle>}
    >
      <HeadingScope>
        <LoadMoreGrid gridId={gridId} items={items}>
          {(visibleItems) =>
            visibleItems.map((item) => <Card key={item.id} {...item} />)
          }
        </LoadMoreGrid>
      </HeadingScope>

      {actions}
    </SimpleLayout>
  );
};

export default FeatureLayout;
export { SectionActions };
