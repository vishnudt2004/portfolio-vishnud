import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";

import { DropdownMotion } from "./Animations";

const DropdownMenu = (props) => (
  <RadixDropdownMenu.Root modal={false} {...props} />
);
const DropdownMenuTrigger = RadixDropdownMenu.Trigger;

const DropdownMenuArrow = RadixDropdownMenu.Arrow;

const DropdownMenuContent = ({
  isOpen,
  children,
  ref: forwardedRef,
  containerRef,
  ...props
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <RadixDropdownMenu.Portal
          container={containerRef ? containerRef : document.body}
          forceMount
        >
          <RadixDropdownMenu.Content {...props} ref={forwardedRef} loop asChild>
            <DropdownMotion isOpen={isOpen}>
              <div className="secondary-scrollbar z-(--z-dropdown) max-h-50 w-40 gap-1 overflow-y-auto border border-(--border-color-g) bg-(--background-color-g) p-1">
                {children}
              </div>
            </DropdownMotion>
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      )}
    </AnimatePresence>
  );
};

const DropdownMenuLabel = (props) => (
  <RadixDropdownMenu.Label
    className="my-1 text-center text-xs italic opacity-50"
    {...props}
  />
);
const DropdownMenuItem = ({ active, ...props }) => (
  <RadixDropdownMenu.Item
    className={twMerge(
      "cursor-pointer bg-(--background-color-g) px-4 py-1 text-center text-sm text-(--text-color-g) focus-visible:m-1",
      active
        ? "border-2 border-(--accent-color-g)"
        : "hover:bg-(--text-color-g)/5",
    )}
    {...props}
    disabled={active}
    onPointerMove={(event) => event.preventDefault()}
    onPointerLeave={(event) => event.preventDefault()}
  />
);
const DropdownMenuGroup = RadixDropdownMenu.Group;

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

const DropdownMenuSeparator = () => (
  <RadixDropdownMenu.Separator className="m-1 h-px bg-(--border-color-g)/25" />
);

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
};
