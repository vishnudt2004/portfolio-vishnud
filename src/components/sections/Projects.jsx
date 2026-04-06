import { createElement } from "react";
import { RiFileCodeFill, RiGlobalFill } from "@remixicon/react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import { take } from "@/utils/jsUtils";
import Anchor from "@/components/ui/Anchor";
import Img from "@/components/ui/Img";
import LoadMoreGrid from "@/components/ui/LoadMoreGrid";
import {
  SectionBtns,
  SectionTitle,
  SimpleLayout,
} from "@/components/ui/SectionLayouts";

import projectImage_globblog from "@/assets/images/projects/globblog-hero.png";
import projectImage_portfolio from "@/assets/images/projects/portfolio-hero.png";
import projectImage_suic from "@/assets/images/projects/suic-hero.png";

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

const ProjectCard = ({ id, title, description, thumb, techStack, links }) => {
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
        <h3 id={titleId} className="font-semibold">
          {title}
        </h3>
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

const ProjectsSection = ({ projects, githubRepos }) => (
  <SimpleLayout
    sectionTitle={
      <SectionTitle sectionId={IDS.projects}>Projects</SectionTitle>
    }
  >
    <LoadMoreGrid
      gridId="projects-grid"
      items={projects}
      style={{ "--cursor-accent-scoped": "var(--color-purple-500)" }}
    >
      {(visibleItems) =>
        visibleItems.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))
      }
    </LoadMoreGrid>

    <SectionBtns
      primary={{ label: "View all projects", href: "/projects" }}
      secondary={{
        label: "See more on GitHub",
        href: githubRepos,
        icon: <SiGithub aria-hidden className="order-1 size-4" />,
      }}
    />
  </SimpleLayout>
);

const projects = [
  {
    id: "project-1",
    title: "Globblog",
    description:
      "A MERN stack blogging platform where users can create, edit, and manage posts with rich text formatting and secure authentication.",
    thumb: projectImage_globblog,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Quill.js",
      "JWT, OAuth",
      "React Router",
    ],
    links: {
      demo: "https://globblog.vercel.app/",
      repo: "https://github.com/vishnudt2004/globblog",
    },
  },
  {
    id: "project-2",
    title: (
      <>
        Personal Portfolio <span className="text-sm">(This Website)</span>
      </>
    ),
    description:
      "A modern developer portfolio showcasing projects, UI experiments, and reusable components with performance-focused design and smooth UI animations.",
    thumb: projectImage_portfolio,
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI Primitives",
    ],
    links: {
      live: "https://portfolio-vishnud.vercel.app/",
      repo: "https://github.com/vishnudt2004/portfolio-vishnud",
    },
  },
  {
    id: "project-3",
    title: "Simple UI Components",
    description:
      "A local-first collection of reusable React UI components and frontend utilities with documentation and CLI-based installation.",
    thumb: projectImage_suic,
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "MDX",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: {
      docs: "https://suic-docs.vercel.app/",
      repo: "https://github.com/vishnudt2004/suic-core",
    },
  },
];

const ProjectsView = ({ all }) => {
  const FEATURED_COUNT = 4;

  return (
    <ProjectsSection
      projects={all ? projects : take(projects, FEATURED_COUNT)}
      githubRepos="https://github.com/vishnudt2004?tab=repositories"
    />
  );
};

export default ProjectsView;
