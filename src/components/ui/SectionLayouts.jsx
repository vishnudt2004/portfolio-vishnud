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

const SectionTitle = ({
  as: As = "h2", // eslint-disable-line no-unused-vars
  children,
  sectionId,
  className,
  ...props
}) => {
  return (
    <As
      id={sectionTitleId(sectionId)}
      className={twMerge("section-title relative self-center", className)}
      {...props}
    >
      {children}
    </As>
  );
};

const SimpleLayout = ({
  sectionTitle = "Section Title",
  sectionId,
  children = (
    <span className="block text-center text-sm opacity-50">Content</span>
  ),
  className,
  titleProps,
}) => {
  return (
    <div
      className={twMerge(
        "m-auto flex flex-col justify-center gap-5 px-5 py-10",
        className,
      )}
    >
      {sectionTitle && (
        <SectionTitle sectionId={sectionId} {...titleProps}>
          {sectionTitle}
        </SectionTitle>
      )}
      <div className="section-body">{children}</div>
    </div>
  );
};

const TwoColumnsLayout = ({
  sectionTitle = "Section Title",
  sectionId,
  left = <>Column&nbsp;1</>,
  right = <>Column&nbsp;2</>,
  titleProps,
}) => {
  return (
    <div className="m-auto flex flex-col items-center justify-center gap-10 px-5 py-10">
      {sectionTitle && (
        <SectionTitle sectionId={sectionId} {...titleProps}>
          {sectionTitle}
        </SectionTitle>
      )}

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
    <div className="xs:flex-row xs:justify-center mt-6 flex flex-col items-center gap-2 *:min-w-50">
      <Button asChild icon={showPrimaryLink ? icons.primary : icons.home}>
        {showPrimaryLink ? primaryLink : homeLink}
      </Button>
      {showSecondary && (
        <Button asChild variant="secondary" icon={icons.secondary}>
          {secondaryLink}
        </Button>
      )}
    </div>
  );
};

export { SimpleLayout, TwoColumnsLayout, SectionBtns };
