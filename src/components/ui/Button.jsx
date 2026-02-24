import * as Slot from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  asChild,
  color,
  fgColor,
  icon,
  className,
  variant,
  ...props
}) => {
  const isSecondary = variant === "secondary";

  const style = {
    "--btn-color": color,
    "--btn-fg-color": fgColor,
    "--btn-secondary-color": color,
  };

  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      type={Comp === "button" ? "button" : undefined}
      className={twMerge("btn", isSecondary && "btn-secondary", className)}
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
