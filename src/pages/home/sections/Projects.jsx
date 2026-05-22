import { Link } from "react-router";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiLinkedinFill,
} from "@remixicon/react";

import { SectionActions } from "@/components/ui/FeatureLayout";
import ProjectsSection from "@/features/projects/ProjectsSection";

const Projects = () => (
  <ProjectsSection
    featuredCount={3}
    actions={
      <SectionActions
        primary={
          <Link to="/projects">
            View all projects
            <RiArrowRightLine aria-hidden />
          </Link>
        }
        secondary={
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vishnudt2004?tab=repositories"
          >
            <RiLinkedinFill aria-hidden /> See more on GitHub
            <RiArrowRightUpLine aria-hidden />
          </a>
        }
      />
    }
  />
);

export default Projects;
