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
  color = "var(--anchor-color-g)",
  icon = <AnchorIcon />,
  target = "_blank",
  ...attr
}) => {
  const style = {
    "--anchor-color": color,
    "--anchor-decoration-color": `color-mix(in srgb, ${color}, transparent 80%)`,
    "--anchor-decoration-color_hover": color,
  };

  return (
    <a
      target={target}
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
        <span aria-hidden className="-ml-px inline-flex">
          {icon}
        </span>
      )}
    </a>
  );
};

export default Anchor;
export { AnchorIcon };
