// Module reserved for future use.

import { IDS } from "@/config/constants";
import HeadingScope from "@/components/helpers/HeadingScope";
import { SectionTitle, SimpleLayout } from "@/components/ui/SectionLayouts";

const Testimonials = () => (
  <SimpleLayout
    sectionTitle={
      <SectionTitle sectionId={IDS.testimonials}>Testimonials</SectionTitle>
    }
  />
);

export default Testimonials;
