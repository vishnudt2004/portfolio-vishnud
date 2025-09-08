import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Anchor = ({
  children,
  color = "var(--global-anchor-color)",
  icon = (
    <ArrowUpRightIcon
      className="inline size-4 hover:bg-(--anchor-decoration-color)"
      title="Link"
    />
  ),
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
      {...attr}
      className={`anchor ${attr?.className ? attr.className : ""}`}
      style={style}
    >
      {children}&nbsp;{icon && icon}
    </a>
  );
};

export default Anchor;
