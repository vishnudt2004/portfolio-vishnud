import { twMerge } from "tailwind-merge";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

import { addArtificialDelay } from "@/utils/jsUtils";

const AnchorIcon = () => (
  <span className="relative inline-flex shrink-0 overflow-hidden">
    <ArrowUpRightIcon className="inline size-4 rounded-full group-[a:hover]:translate-x-4 group-[a:hover]:-translate-y-4 group-[a:hover]:duration-300" />
    <ArrowUpRightIcon className="absolute right-4 -bottom-4 inline size-4 rounded-full group-[a:hover]:right-0 group-[a:hover]:bottom-0 group-[a:hover]:duration-300" />
  </span>
);

const Anchor = ({
  children,
  color = "var(--global-anchor-color)",
  icon = <AnchorIcon />,
  ...attr
}) => {
  const style = {
    "--anchor-color": color,
    "--anchor-decoration-color": `color-mix(in srgb, ${color}, transparent 80%)`,
    "--anchor-decoration-color_hover": color,
  };

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (href) addArtificialDelay(() => window.open(href, "_blank"));
      }}
      {...attr}
      className={twMerge("group anchor", attr?.className)}
      style={style}
    >
      {children}&nbsp;{icon && icon}
    </a>
  );
};

export default Anchor;
