import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";

import { DropdownMotion } from "./Animations";

const DropdownMenu = (props) => (
  <RadixDropdownMenu.Root modal={false} {...props} />
);
const DropdownMenuTrigger = (props) => (
  <RadixDropdownMenu.Trigger
    onKeyDown={(e) => {
      if (e.key === "ArrowDown") e.preventDefault(); // Prevent opening via ArrowDown
    }}
    {...props}
  />
);

const DropdownMenuArrow = RadixDropdownMenu.Arrow;

const DropdownMenuContent = ({
  children,
  ref: forwardedRef,
  containerRef,
  className,
  ...props
}) => {
  return (
    <RadixDropdownMenu.Portal container={containerRef ?? document.body}>
      <RadixDropdownMenu.Content
        ref={forwardedRef}
        avoidCollisions // repositions if it would overflow viewport
        collisionPadding={8} // 8px breathing room from viewport edges
        sideOffset={10}
        loop
        asChild
        className="z-(--z-dropdown)"
        {...props}
      >
        <DropdownMotion>
          <div className="overflow-hidden rounded-2xl border border-(--border-color-g) bg-(--bg-color-g)">
            <div
              className={twMerge(
                "secondary-scrollbar max-h-50 w-40 scroll-py-1 overflow-y-auto p-1 [&::-webkit-scrollbar-track]:my-2.5",
                className,
              )}
            >
              {children}
            </div>
          </div>
        </DropdownMotion>
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  );
};

const DropdownMenuLabel = (props) => (
  <RadixDropdownMenu.Label
    className="my-1 text-center text-xs italic opacity-50"
    {...props}
  />
);

const DropdownMenuItem = ({ className, ...props }) => (
  <RadixDropdownMenu.Item
    className={twMerge(
      "cursor-pointer rounded-[11px] bg-(--bg-color-g) px-4 py-1 text-center text-sm text-(--text-color-g)",
      "focus-reset hover:bg-(--text-color-g)/25 focus-visible:bg-(--text-color-g)/25 focus-visible:outline-0",
      className,
    )}
    {...props}
    onPointerMove={(event) => event.preventDefault()}
    onPointerLeave={(event) => event.preventDefault()}
  />
);

const DropdownMenuGroup = RadixDropdownMenu.Group;

const DropdownMenuSeparator = () => (
  <RadixDropdownMenu.Separator className="m-1 h-px bg-(--border-color-g)/25" />
);

/*
// Commented out as unused. Kept to prevent potential tree-shaking issues caused by chunking logic.

const DropdownMenuCheckboxItem = ({
  children,
  ref: forwardedRef,
  ...props
}) => {
  return (
    <RadixDropdownMenu.CheckboxItem {...props} ref={forwardedRef}>
      {children}
      <RadixDropdownMenu.ItemIndicator>
        {props.checked === "indeterminate" && (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
        {props.checked === true && (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </RadixDropdownMenu.ItemIndicator>
    </RadixDropdownMenu.CheckboxItem>
  );
};

const DropdownMenuRadioGroup = RadixDropdownMenu.RadioGroup;

const DropdownMenuRadioItem = ({ children, ref: forwardedRef, ...props }) => {
  return (
    <RadixDropdownMenu.RadioItem {...props} ref={forwardedRef}>
      {children}
      <RadixDropdownMenu.ItemIndicator>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </RadixDropdownMenu.ItemIndicator>
    </RadixDropdownMenu.RadioItem>
  );
};
*/

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
};
