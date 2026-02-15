import { isValidElement, useState } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import * as RadixPopover from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

import { useIsMobile } from "@/hooks/useIsMobile";

const DesktopTooltip = ({ content, children, className, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <RadixTooltip.Root
      open={open}
      onOpenChange={(next) => {
        if (next === false) return;
        setOpen(true);
      }}
    >
      <RadixTooltip.Trigger
        asChild
        onMouseOver={() => {
          setOpen(true);
        }}
        onMouseOut={() => {
          setOpen(false);
        }}
        onFocus={() => {
          setOpen(true);
        }}
        onBlur={() => {
          setOpen(false);
        }}
      >
        {isValidElement(children) ? (
          children
        ) : (
          <span tabIndex={0}>{children}</span>
        )}
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          onEscapeKeyDown={(e) => {
            e.preventDefault(), setOpen(false);
          }}
          side="bottom"
          align="center"
          sideOffset={5}
          avoidCollisions
          collisionPadding={5}
          className={twMerge(
            "data-[state=instant-open]:animate-fadeIn data-[state=delayed-open]:animate-fadeIn data-[state=closed]:animate-fadeOut rounded bg-(--background-color-g) px-1 py-0.5 text-sm leading-3.5 whitespace-nowrap text-(--text-color-g) transition-opacity duration-200",
            className,
          )}
          {...props}
        >
          {content}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};

const MobileTooltip = ({ content, children, className, ...props }) => {
  const isMobile = useIsMobile();

  if (!isMobile) return children;

  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        {isValidElement(children) ? (
          children
        ) : (
          <span tabIndex={0}>{children}</span>
        )}
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side="bottom"
          align="center"
          sideOffset={5}
          avoidCollisions
          collisionPadding={5}
          className={twMerge(
            "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut rounded bg-(--background-color-g) px-2 py-0.5 text-sm whitespace-nowrap text-(--text-color-g) outline-0 transition-opacity duration-200",
            className,
          )}
          {...props}
        >
          {content}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};

const HybridTooltip = (props) => {
  const isMobile = useIsMobile();

  // Mobile: Popover (tap to open)
  if (isMobile) return <MobileTooltip {...props} />;

  // Desktop: Tooltip (hover/focus to open)
  return <DesktopTooltip {...props} />;
};

// Shortened alias
const Tip = ({ children, tip, ...props }) => (
  <HybridTooltip content={tip} {...props}>
    {children}
  </HybridTooltip>
);

export default HybridTooltip;
export { DesktopTooltip, MobileTooltip, Tip };
