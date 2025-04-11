import { createElement } from "react";

// Layout component names reflect their design on larger screens (desktop, tablet), but they may appear differently on smaller screens.

const SimpleLayout = ({
  sectionTitle = "Section Title",
  main,
  children = <div className="text-center">Main Content</div>,
  id, // Unique identifier for navigation
}) => (
  <div
    id={id}
    className="m-auto flex max-w-6xl flex-col justify-center gap-5 px-5 py-10"
  >
    {sectionTitle && (
      <h1 className="section-title self-center">{sectionTitle}</h1>
    )}
    <div>{main || children}</div>
  </div>
);

const TwoColumnsLayout = ({
  sectionTitle = "Section Title",
  cols = { col1: () => <>Column&nbsp;1</>, col2: () => <>Column&nbsp;2</> },
  id, // Unique identifier for navigation
}) => (
  <div
    id={id}
    className="flex flex-col items-center justify-center gap-10 px-5 py-10"
  >
    {sectionTitle && <h1 className="section-title">{sectionTitle}</h1>}

    <div className="mx-auto flex min-h-[50vh] w-full max-w-6xl flex-col gap-4 md:flex-row">
      {Object.values(cols).map((comp, ind) => (
        <div key={ind} className="flex max-w-full justify-center md:w-1/2">
          {createElement(comp)}
        </div>
      ))}
    </div>
  </div>
);

export { SimpleLayout, TwoColumnsLayout };
