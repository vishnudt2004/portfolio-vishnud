import { twMerge } from "tailwind-merge";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const AnchorIcon = () => (
  <span className="relative inline-flex shrink-0 overflow-hidden *:group-[a:hover,a:focus-visible]:duration-300">
    <ArrowUpRightIcon className="inline size-4 rounded-full group-[a:hover,a:focus-visible]:translate-x-4 group-[a:hover,a:focus-visible]:-translate-y-4" />
    <ArrowUpRightIcon className="absolute right-4 -bottom-4 inline size-4 rounded-full group-[a:hover,a:focus-visible]:right-0 group-[a:hover,a:focus-visible]:bottom-0" />
  </span>
);

const Anchor = ({
  children,
  color = "var(--anchor-color-g)",
  icon = <AnchorIcon />,
  target,
  ...attr
}) => {
  const style = {
    "--anchor-color": color,
    "--anchor-decoration-color": `color-mix(in srgb, ${color}, transparent 80%)`,
    "--anchor-decoration-color_hover": color,
  };

  return (
    <a
      target={target || "_blank"}
      rel="noopener noreferrer"
      {...attr}
      className={twMerge("group anchor", attr?.className)}
      style={style}
    >
      {children}
      {target === "_blank" && (
        <span className="sr-only">(opens in new tab)</span>
      )}
      &nbsp;
      {icon && (
        <span aria-hidden className="inline-flex">
          {icon}
        </span>
      )}
    </a>
  );
};

export default Anchor;
