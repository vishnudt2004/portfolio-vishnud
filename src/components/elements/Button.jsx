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

export default Button;
