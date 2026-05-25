import { IDS } from "@/config/constants";
import { sectionTitleId } from "@/utils/siteUtils";
import HeadingScope from "@/components/helpers/HeadingScope";
import ErrorBoundary from "@/components/helpers/ErrorBoundary";
import { SectionRevealMotion } from "@/components/ui/Animations";
import About from "./sections/About";
import Proficiencies from "./sections/Proficiencies";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import Activities from "./sections/Activities";

const belowFoldSections = [
  { id: IDS.about, component: About },
  { id: IDS.proficiencies, component: Proficiencies },
  { id: IDS.projects, component: Projects },
  { id: IDS.achievements, component: Achievements },
  { id: IDS.certifications, component: Certifications },
  { id: IDS.activities, component: Activities },
];

const BelowFold = () =>
  belowFoldSections.map(({ id, component: C }) => (
    <ErrorBoundary
      key={id}
      message="Something went wrong in this section."
      height="70svh"
    >
      <SectionRevealMotion>
        <section id={id} aria-labelledby={sectionTitleId(id)}>
          <HeadingScope>
            <C />
          </HeadingScope>
        </section>
      </SectionRevealMotion>
    </ErrorBoundary>
  ));

export default BelowFold;
