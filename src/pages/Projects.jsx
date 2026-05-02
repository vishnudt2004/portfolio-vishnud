import { SiGithub } from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import HeadingLevelProvider from "@/contexts/HeadingLevelContext";
import HeadingScope from "@/components/helpers/HeadingScope";
import LoadMoreGrid from "@/components/ui/LoadMoreGrid";
import {
  SectionBtns,
  SectionTitle,
  SimpleLayout,
} from "@/components/ui/SectionLayouts";
import { projects } from "@/features/projects/projects.data";
import ProjectItem from "@/features/projects/ProjectItem";

const ProjectsSection = ({ projects, githubRepos }) => (
  <SimpleLayout
    sectionTitle={
      <SectionTitle sectionId={IDS.projects}>All Projects</SectionTitle>
    }
  >
    <HeadingScope>
      <LoadMoreGrid gridId="projects-grid" items={projects}>
        {(visibleItems) =>
          visibleItems.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))
        }
      </LoadMoreGrid>
    </HeadingScope>

    <SectionBtns
      secondary={{
        label: "See more on GitHub",
        href: githubRepos,
        icon: <SiGithub aria-hidden className="order-1 size-4" />,
      }}
    />
  </SimpleLayout>
);

const ProjectsView = () => (
  <HeadingLevelProvider>
    <ProjectsSection
      projects={projects}
      githubRepos="https://github.com/vishnudt2004?tab=repositories"
    />
  </HeadingLevelProvider>
);

export default ProjectsView;
