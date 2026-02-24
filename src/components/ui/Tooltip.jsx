import { isValidElement, useState } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import * as RadixPopover from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

const DesktopTooltip = ({
  content,
  tip, // alias
  children,
  className,
  open = true,
  ...props
}) => {
  const isTouch = useIsTouchDevice();
  const [isOpen, setIsOpen] = useState(false);

  if (isTouch) return children;

  const openTip = () => setIsOpen(true);
  const closeTip = () => setIsOpen(false);

  return (
    <RadixTooltip.Root
      open={open && isOpen}
      onOpenChange={(next) => {
        if (next === false) return;
        setIsOpen(true);
      }}
    >
      <RadixTooltip.Trigger
        asChild
        onMouseOver={openTip}
        onMouseOut={closeTip}
        onFocus={openTip}
        onBlur={closeTip}
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
            e.preventDefault(), setIsOpen(false);
          }}
          side="bottom"
          align="center"
          sideOffset={5}
          avoidCollisions
          collisionPadding={5}
          className={twMerge(
            "data-[state=instant-open]:animate-fadeIn data-[state=delayed-open]:animate-fadeIn data-[state=closed]:animate-fadeOut z-(--z-tooltip) rounded bg-(--bg-color-g) px-1 py-0.5 text-sm leading-3.5 whitespace-nowrap text-(--text-color-g) transition-opacity duration-200",
            className,
          )}
          {...props}
        >
          {content || tip}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};

const MobileTooltip = ({
  content,
  tip, //alias
  children,
  className,
  ...props
}) => {
  const isTouch = useIsTouchDevice();

  if (!isTouch) return children;

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
            "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut z-(--z-tooltip) rounded bg-(--bg-color-g) px-2 py-0.5 text-sm whitespace-nowrap text-(--text-color-g) outline-0 transition-opacity duration-200",
            className,
          )}
          {...props}
        >
          {content || tip}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};

const HybridTooltip = (props) => {
  const isTouch = useIsTouchDevice();

  // Mobile: Popover (tap to open)
  if (isTouch) return <MobileTooltip {...props} />;

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
