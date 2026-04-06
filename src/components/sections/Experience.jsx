// Module reserved for future use.

import { IDS } from "@/config/constants";
import { SectionTitle, SimpleLayout } from "@/components/ui/SectionLayouts";

const Experience = () => (
  <SimpleLayout
    sectionTitle={
      <SectionTitle sectionId={IDS.experience}>Experience</SectionTitle>
    }
  />
);

export default Experience;
