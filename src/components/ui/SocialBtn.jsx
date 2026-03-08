const SocialBtn = ({
  label,
  link,
  icon,
  labelWidth, // optional visual-balance override
  ...props
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-effect-subtle group inline-flex flex-col items-center gap-1.5"
    {...props}
  >
    <span
      aria-hidden
      className="inline-flex size-11 items-center justify-center rounded-full bg-(--bg-color-g) p-2.5 text-(--text-color-g) duration-200 group-hover:bg-(--text-color-g)/15 group-focus:bg-(--text-color-g)/15"
    >
      {icon}
    </span>

    <span
      className="text-center text-xs font-medium tracking-wide opacity-70 group-hover:opacity-100"
      style={{ width: labelWidth }}
    >
      {label}
    </span>

    <span className="sr-only">(opens in new tab)</span>
  </a>
);

export default SocialBtn;
