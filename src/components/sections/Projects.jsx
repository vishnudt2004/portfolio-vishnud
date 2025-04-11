import { CloudIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

import config from "@config/config";
import Anchor from "@components/elements/Anchor";
import Img from "@components/elements/Img";
import { SimpleLayout } from "@components/elements/SectionLayouts";

import projectImage_globblog from "@assets/images/projects-screenshot/globblog_(welcome-page).png";
import projectImage_portfolio from "@assets/images/projects-screenshot/portfolio-vishnu-d_(hero-section).png";

const ProjectCard = ({ title, descr, thumb, techStack, category, links }) => {
  const linkProps = {
    color: {
      repo: "var(--color-blue-400)",
      live: "var(--color-green-400)",
    },
    icon: {
      repo: <CloudIcon className="inline-block h-4 w-4" />,
      live: <GlobeAltIcon className="inline-block h-4 w-4" />,
    },
  };

  return (
    <div className="fancy-bg-2 group relative min-h-[470px] overflow-hidden rounded-md border border-(--global-border-color) bg-(--global-background-color) shadow-lg transition hover:-translate-y-1 hover:shadow-xl max-md:max-w-[400px] sm:h-auto md:w-[calc(50%-12px)] lg:w-[calc(33.33%-12px)]">
      <span className="absolute top-0 left-0 rounded-br-md border-r border-b border-(--global-border-color) bg-(--global-background-color) px-3 py-1 text-xs text-(--global-secondary-text-color) transition-opacity group-hover:opacity-0">
        {category}
      </span>

      <Img
        src={thumb}
        alt={`${title} image`}
        className="aspect-video w-full object-cover"
        fallback="default"
      />
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
        <p className="any-pointer-fine:secondary-scrollbar mt-2 h-20 overflow-y-auto text-sm text-(--global-secondary-text-color)">
          {descr}
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <span className="font-medium">Tech stack:</span>
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="rounded-full bg-(--global-secondary-highlight-color) px-2 py-1 text-xs text-(--global-text-color)"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="font-medium">Links:</span>
          {Object.entries(links).map(([type, link]) => (
            <Anchor
              key={type}
              color={linkProps.color[type]}
              href={link}
              className="inline-flex! items-center"
            >
              <span className="inline-flex! items-center justify-center gap-2">
                {linkProps.icon[type]}
                {type.charAt(0).toUpperCase() + type.substring(1)}
              </span>
            </Anchor>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsCreator = ({ title = "Projects", projects }) => (
  <SimpleLayout id={config.SECTION_IDS.PROJECTS} sectionTitle={title}>
    <div className="flex flex-wrap gap-3 max-lg:justify-center">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </SimpleLayout>
);

const Projects = () => {
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
      ],
      category: "Personal Project",
      links: {
        repo: "",
        live: "",
      },
    },
    {
      title: "My Portfolio (This Website)",
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
      category: "Personal Website",
      links: {
        repo: "",
        live: "",
      },
    },
  ];

  return <ProjectsCreator projects={projects} />;
};

export default Projects;
