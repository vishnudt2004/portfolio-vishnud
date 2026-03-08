import { createElement, Suspense, lazy } from "react";

import { IDS } from "@/config/constants";
import { filterActiveSections, sectionTitleId } from "@/utils/siteUtils";
import { SectionRevealMotion } from "@/components/ui/Animations";
import Divider from "@/components/ui/Divider";
import Hero from "@/components/sections/Hero";

const Section = ({ children, sectionId, divide = true, lazy = false }) => {
  return (
    <>
      <SectionRevealMotion isHero={sectionId === IDS.hero}>
        <section id={sectionId} aria-labelledby={sectionTitleId(sectionId)}>
          {lazy ? (
            <Suspense
              fallback={
                <div
                  className="min-h-dvh"
                  role="status"
                  aria-live="polite"
                  aria-busy="true"
                />
              }
            >
              {children}
            </Suspense>
          ) : (
            children
          )}
        </section>
      </SectionRevealMotion>

      {divide && <Divider />}
    </>
  );
};

const sections = filterActiveSections([
  { id: IDS.hero, component: Hero },
  {
    id: IDS.about,
    component: lazy(() => import("@/components/sections/About")),
  },
  {
    id: IDS.proficiencies,
    component: lazy(() => import("@/components/sections/Proficiencies")),
  },
  {
    id: IDS.experience,
    component: lazy(() => import("@/components/sections/Experience")),
  },
  {
    id: IDS.projects,
    component: lazy(() => import("@/components/sections/Projects")),
  },
  {
    id: IDS.achievements,
    component: lazy(() => import("@/components/sections/Achievements")),
  },
  {
    id: IDS.certifications,
    component: lazy(() => import("@/components/sections/Certifications")),
  },
  {
    id: IDS.activities,
    component: lazy(() => import("@/components/sections/Activities")),
  },
  {
    id: IDS.testimonials,
    component: lazy(() => import("@/components/sections/Testimonials")),
  },
  {
    id: IDS.contactForm,
    component: lazy(() => import("@/components/sections/ContactForm")),
  },
]);

const Home = () => {
  return sections.map(({ id, component }, index) => (
    <Section
      key={id}
      sectionId={id}
      divide={index > 0 && index !== sections.length - 1} // first & last
      lazy={index > 0}
    >
      {createElement(component)}
    </Section>
  ));
};

export default Home;
