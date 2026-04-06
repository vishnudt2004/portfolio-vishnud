import { twMerge } from "tailwind-merge";
import { RiArrowRightUpLongLine } from "@remixicon/react";

const AnchorIcon = ({ icon = <RiArrowRightUpLongLine />, className }) => (
  <span
    className={twMerge(
      "relative inline-flex shrink-0 overflow-hidden",
      "*:inline *:size-4.5 *:rounded-full *:group-[a:hover,a:focus-visible]:duration-300",
      "*:first:group-[a:hover,a:focus-visible]:translate-x-4 *:first:group-[a:hover,a:focus-visible]:-translate-y-4",
      "*:last:absolute *:last:right-4 *:last:-bottom-4 *:last:group-[a:hover,a:focus-visible]:right-0 *:last:group-[a:hover,a:focus-visible]:bottom-0",
      className,
    )}
  >
    {icon}
    {icon}
  </span>
);

const Anchor = ({
  children,
  color,
  icon = <AnchorIcon />,
  target = "_blank",
  className,
  ...attr
}) => {
  const style = {
    "--anchor-color": color || "var(--color-blue-500)",
    "--anchor-decoration-color": `color-mix(in srgb, var(--anchor-color), transparent 80%)`,
  };

  return (
    <a
      target={target}
      rel="noopener noreferrer"
      {...attr}
      className={twMerge(
        "group relative inline-flex items-center text-(--anchor-color) before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-(--anchor-decoration-color) after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-(--anchor-color) after:duration-150 hover:after:w-full focus:after:w-full focus-visible:px-1",
        className,
      )}
      style={style}
    >
      {children}
      {target === "_blank" && (
        <span className="sr-only">(opens in new tab)</span>
      )}
      &nbsp;
      {icon && (
        <span aria-hidden className="-ml-px inline-flex">
          {icon}
        </span>
      )}
    </a>
  );
};

export default Anchor;
export { AnchorIcon };
