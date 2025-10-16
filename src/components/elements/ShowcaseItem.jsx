import { createElement } from "react";
import { twMerge } from "tailwind-merge";

import Img from "./Img";

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
  className,
}) => {
  return (
    <div
      className={twMerge(
        "fancy-bg-1 relative flex w-full max-w-lg flex-col gap-1 border border-(--global-border-color)/50 p-5 transition-all hover:border-(--accent-color)",
        className,
      )}
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
          <span className="text-lg font-semibold">{title}</span>
          <p className="text-sm font-semibold text-(--global-secondary-text-color)">
            <span className="mr-2">{subtitle}</span>
            <span className="mt-1 inline-block rounded-full bg-[color-mix(in_srgb,var(--accent-color),var(--global-background-color)_50%)] px-2 py-0.5 text-xs font-medium text-[color-mix(in_srgb,var(--accent-color),var(--global-text-color)_70%)]">
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

const ShowcaseItemBtn = ({ children, icon, href, className }) => (
  <a
    href={href}
    target="_blank"
    className={twMerge(
      "mt-auto inline-flex w-fit items-center justify-center gap-1 bg-(--accent-color) px-2 py-1 text-sm text-white transition-opacity hover:opacity-80",
      className,
    )}
  >
    {icon} {children}
  </a>
);

export default ShowcaseItem;
export { ShowcaseItemBtn };
