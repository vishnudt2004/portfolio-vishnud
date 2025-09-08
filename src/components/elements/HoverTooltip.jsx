import { twMerge } from "tailwind-merge";

const HoverTooltip = ({ label, children, className }) => {
  return (
    <span className="group relative inline-block">
      {children}
      <span
        className={twMerge(
          "pointer-events-none absolute left-1/2 z-10 mt-1 -translate-x-1/2 rounded bg-(--global-background-color) px-2 py-0.5 text-sm whitespace-nowrap text-(--global-text-color) opacity-0 transition-opacity group-hover:opacity-100",
          className,
        )}
      >
        {label}
      </span>
    </span>
  );
};

export default HoverTooltip;
