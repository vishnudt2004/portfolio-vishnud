import { createElement } from "react";
import { twMerge } from "tailwind-merge";

import Img from "./Img";

const ShowcaseItem = ({
  title,
  subtitle,
  date,
  description,
  credentials,
  leadingIcon,
  logo,
  logoAlt,
  bgOverlay,
  style,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "fancy-bg-1 relative z-0 flex w-full max-w-lg flex-col gap-1 rounded-3xl border border-(--border-color-g)/50 bg-(--background-color-g) p-5 transition focus-within:border-(--accent-color) hover:border-(--accent-color)",
        className,
      )}
      style={{
        "--accent-color": "var(--accent-color-g)",
        ...style,
      }}
    >
      <div aria-hidden className="absolute inset-0 -z-1 m-auto h-fit w-fit">
        {bgOverlay}
      </div>
      <div className="mb-2 flex items-start gap-3 [&>*:first-child]:shrink-0">
        {logo ? (
          <Img
            src={logo}
            alt={logoAlt}
            className="inline size-12 rounded-full"
            fallback={createElement(leadingIcon, {
              "aria-hidden": true,
              className:
                "size-12 rounded-full bg-white p-3 text-(--accent-color) shrink-0",
            })}
          />
        ) : (
          createElement(leadingIcon, {
            "aria-hidden": true,
            className:
              "size-12 rounded-full bg-white p-3 text-(--accent-color) shrink-0",
          })
        )}
        <div>
          <span className="text-lg font-semibold">{title}</span>
          <p className="text-sm font-semibold text-(--text-secondary-color-g)">
            <span className="mr-2">{subtitle}</span>
            <span className="mt-1 inline-block rounded-full bg-[color-mix(in_srgb,var(--accent-color),var(--background-color-g)_50%)] px-2 py-0.5 text-xs font-medium text-[color-mix(in_srgb,var(--accent-color),var(--text-color-g)_70%)]">
              {date}
            </span>
          </p>
        </div>
      </div>

      <p className="mb-4 text-sm text-(--text-secondary-color-g)">
        {description}
      </p>

      {credentials}
    </div>
  );
};

const ShowcaseItemBtn = ({ children, icon, href, className }) => (
  <a
    aria-label={`${children} (opens in new tab)`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={twMerge(
      "mt-auto inline-flex w-fit items-center justify-center gap-1 rounded-full bg-(--accent-color)/90 px-2 py-1 text-sm text-white transition-colors hover:bg-(--accent-color) focus:bg-(--accent-color)",
      className,
    )}
  >
    {icon} {children}
  </a>
);

export default ShowcaseItem;
export { ShowcaseItemBtn };
