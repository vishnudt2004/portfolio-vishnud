import { twMerge } from "tailwind-merge";

const DropdownBox = ({ children, className = "" }) => (
  <div
    className={`secondary-scrollbar flex max-h-50 flex-col gap-1 overflow-y-auto border border-(--global-border-color) bg-(--global-background-color) p-1 ${className}`}
  >
    {children}
  </div>
);

const DropdownMenuItem = ({
  active = false,
  children,
  onClick = () => {},
  className,
}) => (
  <button
    onClick={onClick}
    className={twMerge(
      `cursor-pointer bg-(--global-background-color) px-4 py-1 text-(--global-text-color) ${active ? "ring-2 ring-(--accent-color-1)" : "hover:bg-(--global-text-color)/5"}`,
      className,
    )}
  >
    {children}
  </button>
);

export { DropdownBox, DropdownMenuItem };
