import { isValidElement } from "react";
import * as RTt from "@radix-ui/react-tooltip";
import * as RPo from "@radix-ui/react-popover";
import { twMerge } from "tailwind-merge";

import { useIsMobile } from "@/hooks/useIsMobile";

const HybridTooltip = ({ content, children, className, ...props }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    // Mobile: Popover (tap to open)
    return (
      <RPo.Root>
        <RPo.Trigger asChild>
          {isValidElement(children) ? (
            children
          ) : (
            <span role="button">{children}</span>
          )}
        </RPo.Trigger>
        <RPo.Portal>
          <RPo.Content
            side="bottom"
            align="center"
            sideOffset={5}
            avoidCollisions
            collisionPadding={5}
            className={twMerge(
              "data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut rounded bg-(--global-background-color) px-2 py-0.5 text-sm whitespace-nowrap text-(--global-text-color) outline-0 transition-opacity duration-200",
              className,
            )}
            {...props}
          >
            {content}
          </RPo.Content>
        </RPo.Portal>
      </RPo.Root>
    );
  }

  // Desktop: Tooltip (hover/focus to open)
  return (
    <RTt.Root>
      <RTt.Trigger asChild>
        <span>{children}</span>
      </RTt.Trigger>
      <RTt.Portal>
        <RTt.Content
          side="bottom"
          align="center"
          sideOffset={5}
          avoidCollisions
          collisionPadding={5}
          className={twMerge(
            "data-[state=instant-open]:animate-fadeIn data-[state=delayed-open]:animate-fadeIn data-[state=closed]:animate-fadeOut rounded bg-(--global-background-color) px-2 py-0.5 text-sm whitespace-nowrap text-(--global-text-color) transition-opacity duration-200",
            className,
          )}
          {...props}
        >
          {content}
        </RTt.Content>
      </RTt.Portal>
    </RTt.Root>
  );
};

export default HybridTooltip;
