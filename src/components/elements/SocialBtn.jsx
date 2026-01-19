const SocialBtn = ({
  name,
  link,
  icon,
  labelWidth, // optional visual-balance override
  ...props
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${name} (opens in new tab)`}
    className="cursor-effect-subtle group inline-flex flex-col items-center gap-1.5 focus-visible:outline-2"
    {...props}
  >
    <span
      aria-hidden
      className="inline-flex size-11 items-center justify-center rounded-full border border-(--border-color-g) bg-(--background-color-g) p-2.5 text-(--text-color-g) duration-200 group-hover:-translate-0.5 group-hover:border-(--text-color-g)"
    >
      {icon}
    </span>

    <span
      className="text-center text-xs font-medium tracking-wide opacity-70 group-hover:opacity-100"
      style={{ width: labelWidth }}
    >
      {name}
    </span>
  </a>
);

export default SocialBtn;
