// Module reserved for future use.

import { IDS } from "@/config/constants";
import { SectionTitle, SimpleLayout } from "@/components/ui/SectionLayouts";

const Testimonials = () => (
  <SimpleLayout
    sectionTitle={
      <SectionTitle sectionId={IDS.testimonials}>Testimonials</SectionTitle>
    }
  />
);

export default Testimonials;
