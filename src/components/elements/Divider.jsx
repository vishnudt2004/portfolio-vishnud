const Divider = ({
  type = "x",
  width = type === "x" ? "80%" : "1px",
  height = type === "y" ? "80%" : "1px",
  color = "var(--global-border-color)",
  gap = "10px",
  ...rest
}) => (
  <div className="flex justify-center">
    <span
      style={{
        width,
        height,
        background: color,
        marginBlock: gap,
        ...rest?.style,
      }}
    />
  </div>
);

const TextDivider = ({ children }) => (
  <div className="my-2 flex items-center text-(--global-secondary-text-color)">
    <div className="h-[1px] flex-grow bg-(--global-border-color)"></div>
    <span className="px-1 text-center text-sm">{children}</span>
    <div className="h-[1px] flex-grow bg-(--global-border-color)"></div>
  </div>
);

export { Divider, TextDivider };
