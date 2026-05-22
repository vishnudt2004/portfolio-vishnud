import projectImage_globblog from "@/assets/images/projects/globblog-hero.png";
import projectImage_portfolio from "@/assets/images/projects/portfolio-hero.webp";
import projectImage_suic from "@/assets/images/projects/suic-hero.png";

export const projects = [
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
    title: "Personal Portfolio (This Website)",
    description:
      "A modern developer portfolio showcasing projects, UI experiments, and reusable components with performance-focused design and smooth UI animations.",
    thumb: projectImage_portfolio,
    techStack: ["React", "Tailwind CSS", "Radix UI Primitives"],
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
