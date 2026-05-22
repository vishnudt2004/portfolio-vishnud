import { IDS } from "@/config/constants";
import FeatureLayout from "@/components/ui/FeatureLayout";
import ActivityCard from "./ActivityCard";
import { activities } from "./activities.data";

const ActivitiesSection = ({
  title = "Activities",
  featuredCount,
  actions,
}) => (
  <FeatureLayout
    ids={{ sectionId: IDS.activities, gridId: "activities-grid" }}
    title={title}
    featuredCount={featuredCount}
    actions={actions}
    cardComponent={ActivityCard}
    data={activities}
  />
);

export default ActivitiesSection;
