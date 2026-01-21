import { twMerge } from "tailwind-merge";

import { getSectionTitleId } from "@/utils/siteUtils";

// Layout naming is based on desktop structure; mobile adapts as needed.

const SectionTitle = ({ children, sectionId, className, ...props }) => (
  <h2
    id={sectionId ? getSectionTitleId(sectionId) : undefined}
    className={twMerge("section-title relative self-center", className)}
    {...props}
  >
    {children}
    <span
      aria-hidden="true"
      className="zig-zag-line absolute inset-x-0 -bottom-2 mx-auto w-[85%] [--color:var(--accent-color)]"
    />
  </h2>
);

const SimpleLayout = ({
  sectionTitle = "Section Title",
  sectionId,
  children = (
    <span className="block text-center text-sm opacity-50">Content</span>
  ),
  className,
  titleProps,
}) => (
  <div
    className={twMerge(
      "m-auto flex max-w-6xl flex-col justify-center gap-5 px-5 py-10",
      className,
    )}
  >
    {sectionTitle && (
      <SectionTitle sectionId={sectionId} {...titleProps}>
        {sectionTitle}
      </SectionTitle>
    )}
    <div className="section-body">{children}</div>
  </div>
);

const TwoColumnsLayout = ({
  sectionTitle = "Section Title",
  sectionId,
  left = <>Column&nbsp;1</>,
  right = <>Column&nbsp;2</>,
  titleProps,
}) => (
  <div className="m-auto flex max-w-6xl flex-col items-center justify-center gap-10 px-5 py-10">
    {sectionTitle && (
      <SectionTitle sectionId={sectionId} {...titleProps}>
        {sectionTitle}
      </SectionTitle>
    )}

    <div className="mx-auto flex min-h-[50vh] w-full max-w-6xl flex-col gap-4 md:flex-row">
      {[left, right].map((comp, i) => (
        <div
          key={`col$*-${i}`}
          className="flex max-w-full justify-center md:w-1/2"
        >
          {comp}
        </div>
      ))}
    </div>
  </div>
);

export { SimpleLayout, TwoColumnsLayout };
