import { RiArrowRightUpLine, RiLinkedinFill } from "@remixicon/react";

import { SectionActions } from "@/components/ui/FeatureLayout";
import HeadingLevelProvider from "@/contexts/HeadingLevelContext";
import ProjectsSection from "@/features/projects/ProjectsSection";

const Projects = () => (
  <HeadingLevelProvider>
    <ProjectsSection
      title="All Projects"
      actions={
        <SectionActions
          primary={
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
  </HeadingLevelProvider>
);

export default Projects;
