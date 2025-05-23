// Module reserved for future use.

import config from "@config/config";
import { SimpleLayout } from "@components/elements/SectionLayouts";

const Activities = () => (
  <SimpleLayout
    id={config.SECTION_IDS.ACTIVITIES}
    sectionTitle="Activities"
  />
);

export default Activities;
