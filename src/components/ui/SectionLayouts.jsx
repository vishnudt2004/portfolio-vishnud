import { twMerge } from "tailwind-merge";

import { sectionTitleId } from "@/utils/siteUtils";
import Heading from "./Heading";

// Layout naming is based on desktop structure; mobile adapts as needed.

const SectionTitle = ({ children, sectionId, className, ...props }) => {
  return (
    <div
      className={twMerge(
        "relative mb-10 flex w-full items-center justify-center px-2.5",
        className,
      )}
    >
      <Heading
        id={sectionTitleId(sectionId)}
        className="bg-(--bg-color-g) px-5 text-2xl font-semibold tracking-wide transition-colors sm:px-10"
        {...props}
      >
        {children}
      </Heading>

      <hr
        aria-hidden
        className="absolute inset-y-0 -z-1 mx-auto my-auto h-[3px] w-[95%] border-0 bg-(--border-color-g)/50"
      />
    </div>
  );
};

const SimpleLayout = ({
  sectionTitle = "Section Title",
  children = (
    <span className="block text-center text-sm opacity-50">Content</span>
  ),
  className,
}) => {
  return (
    <div
      className={twMerge(
        "m-auto flex flex-col justify-center gap-5 px-5 py-8",
        className,
      )}
    >
      {sectionTitle}
      <div className="section-body">{children}</div>
    </div>
  );
};

const TwoColumnsLayout = ({
  sectionTitle = "Section Title",
  left = <>Column&nbsp;1</>,
  right = <>Column&nbsp;2</>,
}) => {
  return (
    <div className="m-auto flex flex-col items-center justify-center gap-10 px-5 py-10">
      {sectionTitle}

      <div className="mx-auto flex min-h-[50vh] w-full flex-col gap-4 md:flex-row">
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
};

export { SectionTitle, SimpleLayout, TwoColumnsLayout };
