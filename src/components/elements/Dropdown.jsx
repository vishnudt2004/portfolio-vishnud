const DropdownBox = ({ children, className = "" }) => (
  <div
    className={`secondary-scrollbar flex max-h-50 flex-col gap-1 overflow-y-auto rounded-lg border border-(--global-border-color) bg-(--global-background-color) p-1 ${className}`}
  >
    {children}
  </div>
);

const DropdownMenuItem = ({
  active = false,
  children,
  onClick = () => {},
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`rounded-md bg-(--global-background-color) px-4 py-1 text-(--global-text-color) ${active ? "ring-2 ring-(--accent-color-1)" : ""} ${className}`}
  >
    {children}
  </button>
);

export { DropdownBox, DropdownMenuItem };
