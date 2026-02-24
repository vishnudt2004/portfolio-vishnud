import { cloneElement, Fragment, isValidElement } from "react";
import { motion } from "motion/react";

const Motion = ({ asChild = false, as, children, ...motionProps }) => {
  if (!children) {
    throw new Error("Motion requires children.");
  }

  // asChild MODE

  if (asChild) {
    if (as) {
      throw new Error("Motion: `asChild` and `as` cannot be used together.");
    }

    if (!isValidElement(children)) {
      throw new Error("Motion asChild requires a single React element.");
    }

    if (children.type === Fragment) {
      throw new Error("Motion cannot animate React.Fragment.");
    }

    return cloneElement(children, {
      ...motionProps,
      ...children.props,
    });
  }

  // as PROP MODE

  if (as) {
    if (typeof as !== "string") {
      throw new Error("Motion `as` must be a valid HTML tag.");
    }

    const MotionElement = motion[as];

    return <MotionElement {...motionProps}>{children}</MotionElement>;
  }

  // DEFAULT / WRAPPER MODE

  if (!isValidElement(children)) {
    // Must be exactly ONE valid HTML element
    throw new Error(
      "Motion default mode requires a single HTML element child.",
    );
  }

  if (children.type === Fragment) {
    throw new Error("Motion cannot animate React.Fragment.");
  }

  if (typeof children.type !== "string") {
    throw new Error(
      "Motion default mode only supports native HTML elements. Use `asChild` for custom components.",
    );
  }

  const MotionElement = motion[children.type];

  return (
    <MotionElement {...motionProps} {...children.props}>
      {children.props.children}
    </MotionElement>
  );
};

export default Motion;
