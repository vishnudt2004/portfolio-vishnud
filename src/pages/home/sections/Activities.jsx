import { RiArticleFill, RiArticleLine } from "@remixicon/react";

import { IDS } from "@/config/constants";
import { take } from "@/utils/jsUtils";
import HeadingScope from "@/components/helpers/HeadingScope";
import Anchor from "@/components/ui/Anchor";
import {
  SectionBtns,
  SectionTitle,
  SimpleLayout,
} from "@/components/ui/SectionLayouts";
import Card, { CardActions } from "@/components/ui/Card";
import LoadMoreGrid from "@/components/ui/LoadMoreGrid";
import { LinkedinIcon } from "@/components/ui/Icons";
import { activities } from "@/features/activities/activities.data";

const ActivityItem = ({
  id,
  title,
  platform,
  date,
  description,
  links,
  logo,
  logoAlt,
}) => (
  <Card
    id={id}
    title={title}
    subtitle={platform}
    date={date}
    description={description}
    actions={
      <CardActions actions={links} fallbackLabel="View Details" itemId={id}>
        {({ key, id, label, ariaLabelledby, href }) => (
          <Anchor
            key={key}
            id={id}
            href={href}
            color="var(--accent-color)"
            className="text-sm"
            aria-labelledby={ariaLabelledby}
          >
            {label}
          </Anchor>
        )}
      </CardActions>
    }
    logo={logo}
    logoAlt={logoAlt}
    leadingIcon={RiArticleLine}
    bgOverlay={<RiArticleFill className="size-[120px] opacity-5" />}
    style={{
      "--accent-color": "var(--color-blue-500)",
    }}
  />
);

const ActivitiesSection = ({ activities, linkedinActivities }) => (
  <HeadingScope>
    <SimpleLayout
      sectionTitle={
        <SectionTitle sectionId={IDS.activities}>Activities</SectionTitle>
      }
    >
      <HeadingScope>
        <LoadMoreGrid gridId="activities-grid" items={activities}>
          {(visibleItems) =>
            visibleItems.map((activity) => (
              <ActivityItem key={activity.id} {...activity} />
            ))
          }
        </LoadMoreGrid>
      </HeadingScope>
      <SectionBtns
        primary={{ label: "View all activities", href: "/activities" }}
        secondary={{
          label: "See more on LinkedIn",
          href: linkedinActivities,
          icon: <LinkedinIcon aria-hidden className="order-1 size-4.5" />,
        }}
      />
    </SimpleLayout>
  </HeadingScope>
);

const ActivitiesView = () => {
  const FEATURED_COUNT = 3;

  return (
    <ActivitiesSection
      activities={take(activities, FEATURED_COUNT)}
      linkedinActivities="https://www.linkedin.com/in/vishnu-dt/recent-activity/all/"
    />
  );
};

export default ActivitiesView;
