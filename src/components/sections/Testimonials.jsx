// Module reserved for future use.

import config from "@config/config";
import { SimpleLayout } from "@components/elements/SectionLayouts";

const Testimonials = () => (
  <SimpleLayout
    id={config.SECTION_IDS.TESTIMONIALS}
    sectionTitle="_Testimonials_"
  />
);

export default Testimonials;
