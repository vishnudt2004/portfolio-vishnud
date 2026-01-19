import { createElement } from "react";
import { CloudIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { SiGithub } from "@icons-pack/react-simple-icons";

import Anchor from "@/components/elements/Anchor";
import Img from "@/components/elements/Img";
import ShowMoreData, {
  ExploreMoreLink,
} from "@/components/elements/ShowMoreData";
import { SimpleLayout } from "@/components/elements/SectionLayouts";

import projectImage_globblog from "@/assets/images/projects-screenshot/globblog_(welcome-page).png";
import projectImage_portfolio from "@/assets/images/projects-screenshot/portfolio-vishnu-d_(hero-section).png";
import projectImage_suic from "@/assets/images/projects-screenshot/suic_(home-page).png";

const ProjectCard = ({ title, descr, thumb, techStack, links }) => {
  const linkProps = {
    color: {
      repo: "var(--color-blue-400)",
      demo: "var(--color-yellow-400)",
      live: "var(--color-green-400)",
      docs: "var(--color-red-400)",
    },
    icon: {
      repo: CloudIcon,
      demo: GlobeAltIcon,
      live: GlobeAltIcon,
      docs: GlobeAltIcon,
    },
  };

  return (
    <div
      style={{ "--accent-color": "var(--color-purple-500)" }}
      className="fancy-bg-2 group flex min-h-[470px] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-(--border-color-g)/50 bg-(--background-color-g) transition focus-within:border-(--accent-color) hover:border-(--accent-color)"
    >
      <Img
        src={thumb}
        alt={`${title} Screenshot`}
        className="aspect-video object-cover opacity-80 grayscale-60 duration-150 group-focus-within:opacity-100 group-focus-within:grayscale-0 group-hover:opacity-100 group-hover:grayscale-0"
      />
      <div className="flex grow flex-col gap-2 p-4 sm:p-5">
        <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
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
          {Object.entries(links).map(([type, link]) => (
            <Anchor key={type} color={linkProps.color[type]} href={link}>
              <span className="inline-flex! items-center justify-center gap-2">
                {createElement(linkProps.icon[type], {
                  "aria-hidden": true,
                  className: "inline-block size-4",
                })}
                {type.charAt(0).toUpperCase() + type.substring(1)}
              </span>
            </Anchor>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = ({ projects, githubRepos }) => (
  <SimpleLayout sectionTitle="Projects">
    <ShowMoreData
      gridId="projects-grid"
      items={projects}
      style={{ "--cursor-accent-scoped": "var(--color-purple-500)" }}
    >
      {(visibleItems) =>
        visibleItems.map((project, i) => (
          <ProjectCard key={`projItem$*-${i}`} {...project} />
        ))
      }
    </ShowMoreData>

    <ExploreMoreLink
      aria-label="GitHub profile: vishnudt2004"
      text="Explore more projects on my GitHub"
      linkText={
        <span className="inline-flex items-center gap-1">
          <SiGithub aria-hidden className="size-4.5" /> vishnudt2004
        </span>
      }
      href={githubRepos}
    />
  </SimpleLayout>
);

const ProjectsView = () => {
  const projects = [
    {
      title: "Globblog",
      descr:
        "Globblog is a full-featured blog application built with the MERN stack allowing users to create, manage post and user profile.",
      thumb: projectImage_globblog,
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "QuillJs",
        "JWT",
        "Google OAuth2.0",
        "Mongoose",
        "React Router DOM",
        "Styled Components",
      ],
      links: {
        demo: "https://globblog.vercel.app/",
        repo: "https://github.com/vishnudt2004/globblog",
      },
    },
    {
      title: "Personal Portfolio (This Website)",
      descr:
        "A personal portfolio website showcasing my skills, projects, and more about my journey.",
      thumb: projectImage_portfolio,
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Motion (framer-motion)",
      ],
      links: {
        live: "https://portfolio-vishnud.vercel.app/",
        repo: "https://github.com/vishnudt2004/portfolio-vishnud",
      },
    },
    {
      title: "Simple UI Components",
      descr:
        "A personal, local-first collection of reusable UI and frontend utility components — installable via CLI.",
      thumb: projectImage_suic,
      techStack: [
        "Next.js",
        "TypeScript",
        "MDX",
        "Tailwind CSS",
        "React",
        "Motion (framer-motion)",
        "Node.js",
        "etc..",
      ],
      links: {
        docs: "https://suic-docs.vercel.app/",
        repo: "https://github.com/vishnudt2004/suic-core",
      },
    },
  ];

  return (
    <ProjectsSection
      projects={projects}
      githubRepos="https://github.com/vishnudt2004?tab=repositories"
    />
  );
};

export default ProjectsView;
