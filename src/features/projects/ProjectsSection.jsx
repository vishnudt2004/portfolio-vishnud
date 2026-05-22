import { IDS } from "@/config/constants";
import FeatureLayout from "@/components/ui/FeatureLayout";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";

const ProjectsSection = ({ title = "Projects", featuredCount, actions }) => (
  <FeatureLayout
    ids={{ sectionId: IDS.projects, gridId: "projects-grid" }}
    title={title}
    featuredCount={featuredCount}
    actions={actions}
    cardComponent={ProjectCard}
    data={projects}
  />
);

export default ProjectsSection;
