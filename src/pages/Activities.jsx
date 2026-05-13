import { RiArticleFill, RiArticleLine, RiLinkedinFill } from "@remixicon/react";

import { IDS } from "@/config/constants";
import HeadingLevelProvider from "@/contexts/HeadingLevelContext";
import HeadingScope from "@/components/helpers/HeadingScope";
import Anchor from "@/components/ui/Anchor";
import {
  SectionBtns,
  SectionTitle,
  SimpleLayout,
} from "@/components/ui/SectionLayouts";
import Card, { CardActions } from "@/components/ui/Card";
import LoadMoreGrid from "@/components/ui/LoadMoreGrid";
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
  <SimpleLayout
    sectionTitle={
      <SectionTitle sectionId={IDS.activities}>All Activities</SectionTitle>
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
      secondary={{
        label: "See more on LinkedIn",
        href: linkedinActivities,
        icon: <RiLinkedinFill aria-hidden className="order-1 size-4.5" />,
      }}
    />
  </SimpleLayout>
);

const ActivitiesView = () => (
  <HeadingLevelProvider>
    <ActivitiesSection
      activities={activities}
      linkedinActivities="https://www.linkedin.com/in/vishnu-dt/recent-activity/all/"
    />
  </HeadingLevelProvider>
);

export default ActivitiesView;
