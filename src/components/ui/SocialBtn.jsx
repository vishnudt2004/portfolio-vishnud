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
    className="cursor-effect-subtle group inline-flex flex-col items-center gap-1.5 rounded"
    {...props}
  >
    <span
      aria-hidden
      className="inline-flex size-11 items-center justify-center rounded-full border border-(--border-color-g) bg-(--bg-color-g) p-2.5 text-(--text-color-g) duration-200 group-hover:border-(--text-color-g) group-focus:border-(--text-color-g)"
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
