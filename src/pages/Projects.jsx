import { lazy } from "react";

const ProjectsView = lazy(() => import("@/components/sections/Projects"));

const Projects = () => <ProjectsView all />;

export default Projects;
