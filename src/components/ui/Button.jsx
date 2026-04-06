import * as Slot from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  asChild,
  color,
  fgColor,
  icon,
  className,
  variant = "solid", // solid, soft, outline
  ...props
}) => {
  const isVariant = (v) => variant === v;

  const style = {
    "--btn-color": color || "var(--text-color-g)",
    "--btn-fg-color": fgColor || "var(--bg-color-g)",
    "--btn-secondary-color": color || "var(--text-color-g)",
  };

  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      type={Comp === "button" ? "button" : undefined}
      className={twMerge(
        "inline-flex items-center justify-center gap-1 rounded-full px-2.5 py-1 text-sm tracking-wide transition-colors duration-300",
        isVariant("soft") &&
          "bg-(--btn-secondary-color)/15 text-(--btn-secondary-color) hover:bg-(--btn-secondary-color)/30 focus:bg-(--btn-secondary-color)/30",
        isVariant("solid") &&
          "bg-(--btn-color)/90 text-(--btn-fg-color) hover:bg-(--btn-color) focus:bg-(--btn-color)",
        isVariant("outline") &&
          "bg-transparent text-(--btn-secondary-color)/85 ring ring-(--btn-secondary-color)/50 ring-inset hover:text-(--btn-secondary-color) hover:ring-(--btn-secondary-color) focus:text-(--btn-secondary-color) focus:ring-(--btn-secondary-color)",
        className,
      )}
      style={style}
      {...props}
    >
      {icon} <Slot.Slottable>{children}</Slot.Slottable>
    </Comp>
  );
};

const IconBtn = ({
  color = "var(--menus-color-g)",
  children,
  className,
  ...props
}) => {
  const style = {
    "--color": color,
  };

  return (
    <button
      type="button"
      {...props}
      style={style}
      className={twMerge(
        "focus-reset grid place-items-center rounded-full p-2 text-(--color) transition-transform *:size-4.5 hover:bg-(--color)/25 focus-visible:bg-(--color)/25 focus-visible:outline-0 active:scale-90",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
export { IconBtn };
