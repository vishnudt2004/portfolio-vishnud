import { SiGithub } from "@icons-pack/react-simple-icons";

import { IDS } from "@/config/constants";
import { take } from "@/utils/jsUtils";
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
  <HeadingScope>
    <SimpleLayout
      sectionTitle={
        <SectionTitle sectionId={IDS.projects}>Projects</SectionTitle>
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
        primary={{ label: "View all projects", href: "/projects" }}
        secondary={{
          label: "See more on GitHub",
          href: githubRepos,
          icon: <SiGithub aria-hidden className="order-1 size-4" />,
        }}
      />
    </SimpleLayout>
  </HeadingScope>
);

const ProjectsView = () => {
  const FEATURED_COUNT = 4;

  return (
    <ProjectsSection
      projects={take(projects, FEATURED_COUNT)}
      githubRepos="https://github.com/vishnudt2004?tab=repositories"
    />
  );
};

export default ProjectsView;
