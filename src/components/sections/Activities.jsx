import { RiArticleFill, RiArticleLine } from "@remixicon/react";

import { IDS } from "@/config/constants";
import { take } from "@/utils/jsUtils";
import Anchor from "@/components/ui/Anchor";
import {
  SectionBtns,
  SimpleLayout,
} from "@/components/ui/SectionLayouts";
import Card, { Br, CardActions } from "@/components/ui/Card";
import LoadMoreGrid from "@/components/ui/LoadMoreGrid";
import { LinkedinIcon } from "@/components/ui/CustomIcons";

import linkedInIcon from "@/assets/images/icons/linkedin.svg";

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
  <SimpleLayout sectionId={IDS.activities} sectionTitle="Activities">
    <LoadMoreGrid
      gridId="activities-grid"
      items={activities}
      style={{ "--cursor-accent-scoped": "var(--color-blue-500)" }}
    >
      {(visibleItems) =>
        visibleItems.map((activity) => (
          <ActivityItem key={activity.id} {...activity} />
        ))
      }
    </LoadMoreGrid>

    <SectionBtns
      primary={{ label: "View all activities", href: "/activities" }}
      secondary={{
        label: "See more on LinkedIn",
        href: linkedinActivities,
        icon: <LinkedinIcon aria-hidden className="order-1 size-4.5" />,
      }}
    />
  </SimpleLayout>
);

const activities = [
  {
    id: "activity-1",
    title: "SDLC Explained Creatively",
    platform: "LinkedIn",
    date: "25 Sep 2025",
    description:
      "At a college event, a guest speaker explained the Software Development Life Cycle (SDLC) by comparing it to making Idly 🍛 — a fun and memorable way to understand core concepts. Shared this on LinkedIn to help others learn creatively.",
    links: [
      {
        label: "Read Post",
        href: "https://www.linkedin.com/posts/vishnu-dt_sdlc-softwaredevelopmentlifecycle-activity-7376627958553247744-5di0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
      },
    ],
    logo: linkedInIcon,
    logoAlt: "LinkedIn Logo",
  },

  {
    id: "activity-2",
    title: "Terminology Series: React/Next.js (9 Parts)",
    platform: "LinkedIn",
    date: "23 Sep 2025",
    description: (
      <>
        Launched a 9-part series breaking down React & Next.js concepts into
        simple terms for beginners. Each part covers 10 key terms, published
        daily. Part 2 gained engagement from new viewers, including reactions
        and comments.
        <Br />
        <span className="italic">See all 9 parts on my LinkedIn profile.</span>
      </>
    ),
    links: [
      {
        label: "Part 1",
        href: "https://www.linkedin.com/posts/vishnu-dt_reactjs-nextjs-webdevelopment-activity-7375823574340841473-_nG0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
      },
      {
        label: "View Series on LinkedIn",
        href: "https://www.linkedin.com/in/vishnu-dt/recent-activity/all/",
      },
    ],
    logo: linkedInIcon,
    logoAlt: "LinkedIn Logo",
  },

  {
    id: "activity-3",
    title: "10 Reasons Why I Love Next.js 💙",
    platform: "LinkedIn",
    date: "19 Sep 2025",
    description:
      "Shared a personal post highlighting why Next.js is my favorite framework, with insights and experiences from React & Next.js development.",
    links: [
      {
        label: "Post (Short)",
        href: "https://www.linkedin.com/posts/vishnu-dt_%F0%9D%9F%AD%F0%9D%9F%AC-%F0%9D%97%BF%F0%9D%97%B2%F0%9D%97%AE%F0%9D%98%80%F0%9D%97%BC%F0%9D%97%BB%F0%9D%98%80-%F0%9D%98%84%F0%9D%97%B5%F0%9D%98%86-%F0%9D%97%9C-%F0%9D%97%B9%F0%9D%97%BC%F0%9D%98%83%F0%9D%97%B2-activity-7374818532204871680-SJPR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
      },
      {
        label: "Article (Extended)",
        href: "https://www.linkedin.com/posts/vishnu-dt_10-reasons-why-i-love-nextjs-so-much-activity-7374824566302572544-pG3s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
      },
    ],
    logo: linkedInIcon,
    logoAlt: "LinkedIn Logo",
  },

  {
    id: "activity-4",
    title: "How I Learned Next.js Fundamentals",
    platform: "LinkedIn",
    date: "20 May 2025",
    description:
      "Documented my project-based journey learning Next.js App Router, step by step with GitHub commits and markdown tables. Included practical guidance on TypeScript, NextAuth, and routing for beginners to replicate the learning process.",
    links: [
      {
        label: "Read Post",
        href: "https://www.linkedin.com/pulse/how-i-learned-fundamentals-nextjs-app-router-project-based-vishnu-d-ifxdc",
      },
    ],
    logo: linkedInIcon,
    logoAlt: "LinkedIn Logo",
  },

  {
    id: "activity-5",
    title: "🎓 From Curious Kid to Web Dev",
    platform: "LinkedIn",
    date: "19 Apr 2025",
    description:
      "My first LinkedIn post documenting my self-taught journey from a curious kid to a web developer. Highlighted challenges, learning milestones, and the process of becoming a fresher in tech.",
    links: [
      {
        label: "Read Post",
        href: "https://www.linkedin.com/posts/vishnu-dt_sharing-my-journey-so-far-as-a-computer-science-activity-7319366449842597888-yenx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
      },
    ],
    logo: linkedInIcon,
    logoAlt: "LinkedIn Logo",
  },
];

const ActivitiesView = ({ all }) => {
  const FEATURED_COUNT = 3;

  return (
    <ActivitiesSection
      activities={all ? activities : take(activities, FEATURED_COUNT)}
      linkedinActivities="https://www.linkedin.com/in/vishnu-dt/recent-activity/all/"
    />
  );
};

export default ActivitiesView;
