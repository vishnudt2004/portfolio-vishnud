import { createElement } from "react";
import { RiFileCodeFill, RiGlobalFill } from "@remixicon/react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import { take } from "@/utils/jsUtils";
import Anchor from "@/components/elements/Anchor";
import Img from "@/components/elements/Img";
import LoadMoreGrid from "@/components/elements/LoadMoreGrid";
import {
  SectionBtns,
  SimpleLayout,
} from "@/components/elements/SectionLayouts";

import projectImage_globblog from "@/assets/images/projects-screenshot/globblog_(welcome-page).png";
import projectImage_portfolio from "@/assets/images/projects-screenshot/portfolio-vishnu-d_(hero-section).png";
import projectImage_suic from "@/assets/images/projects-screenshot/suic_(home-page).png";

const ProjectCard = ({ title, descr, thumb, techStack, links, id }) => {
  const titleId = `${id}-title`;

  const LinkItem = ({ type, href, index }) => {
    const actionId = `${id}-action-${index}`;

    const linkProps = {
      color: {
        repo: "var(--color-blue-400)",
        demo: "var(--color-yellow-400)",
        live: "var(--color-green-400)",
        docs: "var(--color-red-400)",
      },
      icon: {
        repo: RiFileCodeFill,
        demo: RiGlobalFill,
        live: RiGlobalFill,
        docs: RiGlobalFill,
      },
    };

    return (
      <Anchor
        id={actionId}
        color={linkProps.color[type]}
        href={href}
        aria-labelledby={`${actionId} ${titleId}`}
      >
        <span className="inline-flex! items-center justify-center gap-1.5">
          {createElement(linkProps.icon[type], {
            "aria-hidden": true,
            className: "inline-block size-4",
          })}
          {type.charAt(0).toUpperCase() + type.substring(1)}
        </span>
      </Anchor>
    );
  };

  return (
    <div
      style={{ "--accent-color": "var(--color-purple-500)" }}
      className="fancy-bg-2 group flex min-h-[470px] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-(--border-color-g)/50 bg-(--background-color-g) transition focus-within:border-(--accent-color) hover:border-(--accent-color)"
    >
      <Img
        src={thumb}
        alt={`${title} Screenshot`}
        className={
          "aspect-video object-cover grayscale-60 duration-150 group-focus-within:opacity-100 group-focus-within:grayscale-0 group-hover:opacity-100 group-hover:grayscale-0"
          // "mx-auto mt-0.75 w-[98%] rounded-[20px]"
        }
      />
      <div className="flex grow flex-col gap-2 p-4">
        <h3 id={titleId} className="text-lg font-semibold sm:text-xl">
          {title}
        </h3>
        <p className="any-pointer-fine:secondary-scrollbar h-20 overflow-y-auto text-sm text-(--text-secondary-color-g)">
          {descr}
        </p>
        <ul className="mb-2 flex flex-wrap gap-1.5 text-sm">
          <li className="pt-1 leading-2 *:font-medium">
            <strong>Tech stack:</strong>
          </li>
          {techStack.map((tech, i) => (
            <li
              key={`tech-${i}`}
              className="rounded-full bg-(--highlight-secondary-color-g) px-1.5 py-1 text-xs leading-2 text-(--text-color-g)"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div
          aria-label="Project links"
          className="mt-auto flex flex-wrap items-center gap-3 text-sm"
        >
          <span className="font-medium">Links:</span>
          {Object.entries(links).map(([type, href], i) => (
            <LinkItem key={type} type={type} href={href} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ projects, githubRepos }) => (
  <SimpleLayout sectionId={IDS.projects} sectionTitle="Projects">
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
    descr:
      "Globblog is a full-featured blog application built with the MERN stack allowing users to create, manage post and user profile.",
    thumb: projectImage_globblog,
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Quill.js",
      "JWT",
      "Google OAuth",
      "Mongoose",
      "React Router",
      "Styled Components",
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
    descr:
      "A personal portfolio website showcasing my skills, projects, and more about my journey.",
    thumb: projectImage_portfolio,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: {
      live: "https://portfolio-vishnud.vercel.app/",
      repo: "https://github.com/vishnudt2004/portfolio-vishnud",
    },
  },
  {
    id: "project-3",
    title: "Simple UI Components",
    descr:
      "A personal, local-first collection of reusable UI and frontend utility components — installable via CLI.",
    thumb: projectImage_suic,
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "MDX",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "etc..",
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
