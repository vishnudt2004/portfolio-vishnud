import { createElement, useState } from "react";
import { twMerge } from "tailwind-merge";
import { RiMoreFill } from "@remixicon/react";

import Img from "./Img";
import Button, { IconBtn } from "./Button";
import Heading from "./Heading";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";

const getTitleId = (id) => (id ? `${id}-title` : undefined); // sync

const Card = ({
  id,
  header: {
    title,
    subtitle,
    date,
    logo, // { src, alt }
    leadingIcon,
  }, // header
  description, // body
  actions, // footer
  visual: { overlay, accentColor = "var(--accent-color-g)" },
  className,
}) => {
  const titleId = getTitleId(id);

  return (
    <article
      className={twMerge(
        "relative flex min-h-[340px] w-full max-w-lg flex-col gap-1 rounded-2xl border border-(--border-color-g)/50 p-5 transition focus-within:border-(--accent-color) hover:border-(--accent-color)",
        className,
      )}
      style={{
        "--accent-color": accentColor,
      }}
    >
      {overlay && (
        <div
          aria-hidden
          className="fancy-bg-1 pointer-events-none absolute inset-0 -z-1 grid place-items-center rounded-[inherit] bg-(--bg-color-g)"
        >
          {overlay}
        </div>
      )}

      <header className="mb-2 flex items-start gap-3 [&>*:first-child]:shrink-0">
        {logo ? (
          <Img
            src={logo.src}
            alt={logo.alt}
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
          <Heading id={titleId} className="text-lg font-semibold">
            {title}
          </Heading>

          <p className="text-sm font-semibold text-(--text-secondary-color-g)">
            <span className="mr-1">{subtitle}</span>{" "}
            <span className="mt-1 inline-block rounded-full bg-[color-mix(in_srgb,var(--accent-color),var(--bg-color-g)_50%)] px-2 py-0.5 text-xs font-medium text-[color-mix(in_srgb,var(--accent-color),var(--text-color-g)_70%)]">
              {date}
            </span>
          </p>
        </div>
      </header>

      <p className="mb-4 text-sm text-(--text-secondary-color-g)">
        {description}
      </p>

      {actions}
    </article>
  );
};

const CardActions = ({
  itemId,
  actions,
  fallbackLabel,
  children,
  variant = "collapsed", // or "expanded"
  primaryPredicate,
}) => {
  const [containerRef, setContainerRef] = useState(null);

  if (!actions?.length) return null;

  const titleId = getTitleId(itemId);

  // EXPANDED MODE

  if (variant === "expanded") {
    return (
      <footer className="mt-auto flex flex-wrap gap-2">
        {actions.map(({ label, href }, i) => {
          const actionId = `${itemId}-action-${i}`;
          const finalLabel = label || fallbackLabel;

          return children({
            actionId,
            id: actionId,
            titleId,
            label: finalLabel,
            href,
            ariaLabelledby: `${actionId} ${titleId}`,
            key: actionId,
          });
        })}
      </footer>
    );
  }

  // COLLAPSED MODE

  const primary =
    actions.find(primaryPredicate ?? ((a) => a.primary === true)) ?? actions[0];

  const secondary = actions.filter((a) => a !== primary);

  const renderAction = (action, i, prefix) => {
    const actionId = `${itemId}-${prefix}-${i}`;
    const finalLabel = action.label || fallbackLabel;

    return children({
      actionId,
      id: actionId,
      titleId,
      label: finalLabel,
      href: action.href,
      ariaLabelledby: `${actionId} ${titleId}`,
      key: actionId,
    });
  };

  return (
    <footer
      ref={setContainerRef}
      className="mt-auto flex items-center justify-between gap-2"
    >
      {/* PRIMARY ACTION */}
      {primary && renderAction(primary, 0, "primary")}

      {/* OVERFLOW ACTION */}
      {secondary.length > 0 && (
        <div>
          <OverflowActions
            actions={secondary}
            titleId={titleId}
            containerRef={containerRef}
          />
        </div>
      )}
    </footer>
  );
};

const OverflowActions = ({ actions, titleId, containerRef }) => {
  if (!actions?.length) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        title="More actions"
        aria-label="More actions"
        type="button"
        asChild
      >
        <IconBtn className="rounded-full bg-(--accent-color)/90 p-1.25 text-white hover:bg-(--accent-color) focus-visible:bg-(--accent-color)">
          <RiMoreFill aria-hidden className="size-4" />
        </IconBtn>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={8}
        className="w-fit max-w-47 space-y-1"
        containerRef={containerRef}
      >
        {actions.map((a) => (
          <DropdownMenuItem
            key={a.href}
            asChild
            className="inline-flex w-full bg-(--accent-color)/80 text-white hover:bg-(--accent-color) focus-visible:bg-(--accent-color)"
          >
            <a
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby={titleId}
            >
              {a.label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const CardButton = ({ children, icon, href, className, ...attr }) => (
  <Button
    asChild
    color="var(--accent-color)"
    fgColor="white"
    icon={icon}
    className="rounded-full py-1"
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge("mt-auto w-fit", className)}
      {...attr}
    >
      {children}
      <span className="sr-only">(opens in new tab)</span>
    </a>
  </Button>
);

export default Card;
export { CardActions, CardButton };
