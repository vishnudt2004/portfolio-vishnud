import { IDS } from "@/config/constants";

import {
  SectionBtns,
  SectionTitle,
  SimpleLayout,
} from "@/components/ui/SectionLayouts";

import { take } from "@/utils/jsUtils";
import LoadMoreGrid from "@/components/ui/LoadMoreGrid";
import AchievementItem from "@/features/achievements/AchievementItem";
import { achievements } from "@/features/achievements/achievements.data";
import HeadingScope from "@/components/helpers/HeadingScope";

const AchievementsSection = ({ achievements }) => (
  <HeadingScope>
    <SimpleLayout
      sectionTitle={
        <SectionTitle sectionId={IDS.achievements}>Achievements</SectionTitle>
      }
    >
      <HeadingScope>
        <LoadMoreGrid gridId="achievements-grid" items={achievements}>
          {(visibleItems) =>
            visibleItems.map((achievement) => (
              <AchievementItem key={achievement.id} {...achievement} />
            ))
          }
        </LoadMoreGrid>
      </HeadingScope>
      <SectionBtns
        primary={{ label: "View all achievements", href: "/achievements" }}
      />
    </SimpleLayout>
  </HeadingScope>
);

const AchievementsView = () => {
  const FEATURED_COUNT = 3;

  return (
    <AchievementsSection achievements={take(achievements, FEATURED_COUNT)} />
  );
};

export default AchievementsView;
