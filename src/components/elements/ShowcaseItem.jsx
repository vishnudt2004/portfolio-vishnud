import { createElement } from "react";

import Img from "@components/elements/Img";

const ShowcaseItem = ({
  title,
  subtitle,
  date,
  description,
  credentials,
  defaultLogo,
  logo,
  bgOverlay,
  style,
}) => {
  return (
    <div
      className="fancy-bg-1 relative flex w-full max-w-lg flex-col gap-1 border border-(--global-border-color)/50 p-5 transition-all hover:border-(--accent-color)"
      style={{ "--accent-color": "var(--accent-color-1)", ...style }}
    >
      <div className="absolute inset-0 -z-10 m-auto h-fit w-fit">
        {bgOverlay}
      </div>
      <div className="mb-2 flex items-start gap-3 [&>*:first-child]:shrink-0">
        {logo ? (
          <Img
            src={logo}
            alt="showcase logo"
            className="inline size-12 rounded-full"
            fallback={createElement(defaultLogo, {
              className:
                "size-12 rounded-full bg-white p-3 text-(--accent-color) shrink-0",
            })}
          />
        ) : (
          createElement(defaultLogo, {
            className:
              "size-12 rounded-full bg-white p-3 text-(--accent-color) shrink-0",
          })
        )}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm font-semibold text-(--global-secondary-text-color)">
            <span className="mr-2">{subtitle}</span>
            <span className="mt-1 inline-block rounded-full border border-(--global-background-color) bg-(--global-border-color) px-2 py-0.5 text-xs font-medium text-[color-mix(in_srgb,var(--accent-color),var(--global-text-color)_30%)]">
              {date}
            </span>
          </p>
        </div>
      </div>

      <p className="mb-4 text-sm text-(--global-secondary-text-color)">
        {description}
      </p>

      {credentials}
    </div>
  );
};

export default ShowcaseItem;
