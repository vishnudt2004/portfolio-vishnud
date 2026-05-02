import { createElement } from "react";
import { RiFileCodeFill, RiGlobalFill } from "@remixicon/react";

import Anchor from "@/components/ui/Anchor";
import Img from "@/components/ui/Img";
import Heading from "@/components/ui/Heading";

const LinkItem = ({ id, titleId, type, href, index }) => {
  const actionId = id ? `${id}-action-${index}` : undefined;

  const linkProps = {
    color: {
      repo: "var(--color-blue-500)",
      demo: "var(--color-yellow-500)",
      live: "var(--color-green-500)",
      docs: "var(--color-red-500)",
    },
    icon: {
      repo: RiFileCodeFill,
      demo: RiGlobalFill,
      live: RiGlobalFill,
      docs: RiGlobalFill,
    },
    label: {
      repo: "Source Code",
      demo: "Live Demo",
      live: "Live Site",
      docs: "Documentation",
    },
  };

  return (
    <Anchor
      id={actionId}
      color={linkProps.color[type]}
      href={href}
      aria-labelledby={titleId && `${actionId} ${titleId}`}
    >
      <span className="inline-flex! items-center justify-center gap-1.5">
        {createElement(linkProps.icon[type], {
          "aria-hidden": true,
          className: "inline-block size-4",
        })}
        {linkProps.label[type] ||
          type.charAt(0).toUpperCase() + type.substring(1)}
      </span>
    </Anchor>
  );
};

const ProjectItem = ({ id, title, description, thumb, techStack, links }) => {
  const titleId = `${id}-title`;

  return (
    <div
      style={{ "--accent-color": "var(--color-purple-500)" }}
      className="group flex w-full max-w-lg flex-col gap-3 overflow-hidden bg-(--bg-color-g) transition"
    >
      <Img
        src={thumb}
        alt={`${title} Screenshot`}
        className="aspect-video border border-(--border-color-g)/50 object-cover"
      />

      <div className="flex grow flex-col gap-2 p-2 pt-0">
        <Heading id={titleId} className="font-semibold">
          {title}
        </Heading>
        <p className="overflow-y-auto text-sm text-(--text-secondary-color-g)">
          {description}
        </p>

        <ul className="mt-3 mb-2 flex flex-wrap gap-1.5 text-sm">
          <li className="pt-1 leading-2 *:font-medium">
            <strong>Tech stack:</strong>
          </li>
          {techStack.map((tech, i) => (
            <li
              key={`tech-${i}`}
              className="rounded-full bg-(--highlight-secondary-color-g)/50 px-1.5 py-1 text-xs leading-2 text-(--text-color-g)"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div
          aria-label="Project links"
          className="mt-auto flex flex-wrap items-center gap-3 text-sm"
        >
          {Object.entries(links).map(([type, href], i) => (
            <LinkItem
              key={type}
              id={id}
              titleId={titleId}
              type={type}
              href={href}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
