const Divider = ({
  type = "x",
  width = type === "x" ? "90%" : "1px",
  height = type === "y" ? "80%" : "1px",
  color = "var(--border-color-g)",
  gap = "10px",
  ...rest
}) => (
  <hr
    style={{
      width,
      height,
      backgroundColor: color,
      marginBlock: gap,
      ...rest?.style,
    }}
    className="mx-auto border-0"
  />
);

export default Divider;
