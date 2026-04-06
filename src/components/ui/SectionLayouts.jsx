import { Link, useLocation } from "react-router";
import { twMerge } from "tailwind-merge";
import {
  RiArrowLeftLongLine,
  RiExternalLinkLine,
  RiLoginCircleLine,
} from "@remixicon/react";

import { sectionTitleId } from "@/utils/siteUtils";
import Button from "./Button";

// Layout naming is based on desktop structure; mobile adapts as needed.

const Line = ({ className }) => (
  <hr
    aria-hidden
    style={{
      "--w": "95%",
      "--h": "3px",
      "--color": "var(--border-color-g)",
    }}
    className={"mx-auto h-(--h) w-(--w) border-0 bg-(--color) " + className}
  />
);

const SectionTitle = ({
  as: As = "h2", // eslint-disable-line no-unused-vars
  children,
  sectionId,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "relative mb-5 flex w-full items-center justify-center px-2.5",
        className,
      )}
    >
      <As
        id={sectionTitleId(sectionId)}
        className="bg-(--bg-color-g) px-10 text-2xl font-semibold tracking-wide transition-colors"
        // "mb-5 w-full p-5 py-4 text-nowrap text-2xl font-semibold tracking-wide border-y border-y-(--border-color-g) bg-(--text-color-g)/2"
        {...props}
      >
        {children}
      </As>

      <Line className="absolute inset-y-0 -z-1 my-auto" />
    </div>
  );
};

const SimpleLayout = ({
  sectionTitle = "Section Title",
  children = (
    <span className="block text-center text-sm opacity-50">Content</span>
  ),
  className,
}) => {
  return (
    <div
      className={twMerge(
        "m-auto flex flex-col justify-center gap-5 px-5 py-10",
        className,
      )}
    >
      {sectionTitle}
      <div className="section-body">{children}</div>
    </div>
  );
};

const TwoColumnsLayout = ({
  sectionTitle = "Section Title",
  left = <>Column&nbsp;1</>,
  right = <>Column&nbsp;2</>,
}) => {
  return (
    <div className="m-auto flex flex-col items-center justify-center gap-10 px-5 py-10">
      {sectionTitle}

      <div className="mx-auto flex min-h-[50vh] w-full flex-col gap-4 md:flex-row">
        {[left, right].map((comp, i) => (
          <div
            key={`col$*-${i}`}
            className="flex max-w-full justify-center md:w-1/2"
          >
            {comp}
          </div>
        ))}
      </div>
    </div>
  );
};

const SectionBtns = ({ primary = { label: "", href: "" }, secondary }) => {
  const { pathname } = useLocation();

  const showPrimaryLink = primary?.href && pathname !== primary.href;
  const showSecondary = secondary?.href && secondary?.label;

  const icons = {
    home: <RiArrowLeftLongLine aria-hidden className="order-0 size-4" />,
    primary: primary.icon || (
      <RiLoginCircleLine aria-hidden className="order-1 size-4 -rotate-35" />
    ),
    secondary: secondary?.icon || (
      <RiExternalLinkLine aria-hidden className="order-1 size-4" />
    ),
  };

  const primaryLink = (
    <Link to={primary.href} {...(primary?.props || {})}>
      {primary.label}
    </Link>
  );
  const homeLink = <Link to="/">Back to Homepage</Link>;
  const secondaryLink = showSecondary && (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={secondary.href}
      {...(secondary?.props || {})}
    >
      {secondary.label} <span className="sr-only">(opens in new tab)</span>
    </a>
  );

  return (
    <div className="xs:flex-row xs:justify-center mt-6 flex flex-col items-center gap-3 *:min-w-50">
      <Button asChild icon={showPrimaryLink ? icons.primary : icons.home}>
        {showPrimaryLink ? primaryLink : homeLink}
      </Button>
      {showSecondary && (
        <Button asChild variant="soft" icon={icons.secondary}>
          {secondaryLink}
        </Button>
      )}
    </div>
  );
};

export { SectionTitle, SimpleLayout, TwoColumnsLayout, SectionBtns };
