import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

import config from "@/config";
import Anchor from "@/components/elements/Anchor";
import { SimpleLayout } from "@/components/elements/SectionLayouts";
import ShowcaseItem from "@/components/elements/ShowcaseItem";
import ShowMoreData, {
  ExploreMoreLink,
} from "@/components/elements/ShowMoreData";
import { LinkedinIcon } from "@/components/elements/CustomIcons";

import linkedInIcon from "@/assets/images/icons/linkedin.svg";

const ActivityItem = ({ title, platform, date, description, links, logo }) => (
  <ShowcaseItem
    title={title}
    subtitle={platform}
    date={date}
    description={description}
    credentials={
      links &&
      (Array.isArray(links) ? (
        <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1">
          {links.map(({ name, link }) => (
            <Anchor
              key={name}
              href={link}
              color="var(--accent-color)"
              className="text-sm"
            >
              {name}
            </Anchor>
          ))}
        </div>
      ) : (
        <Anchor
          href={links}
          color="var(--accent-color)"
          className="mt-auto w-fit text-sm"
        >
          Read Post
        </Anchor>
      ))
    }
    logo={logo}
    defaultLogo={GlobeAltIcon}
    bgOverlay={<ChatBubbleLeftRightIcon className="w-[120px] opacity-5" />}
    style={{
      "--accent-color": "var(--color-blue-500)",
    }}
  />
);

const ActivitiesSection = ({ activities, linkedinActivities }) => (
  <SimpleLayout id={config.SECTION_IDS.ACTIVITIES} sectionTitle="Activities">
    <ShowMoreData items={activities}>
      {(visibleItems) =>
        visibleItems.map((certificate, ind) => (
          <ActivityItem key={ind} {...certificate} />
        ))
      }
    </ShowMoreData>

    <ExploreMoreLink
      text="Explore more activities on my LinkedIn"
      linkText={
        <span className="inline-flex items-center gap-1">
          <LinkedinIcon className="size-4.5" /> vishnu-dt
        </span>
      }
      href={linkedinActivities}
    />
  </SimpleLayout>
);

const ActivitiesView = () => {
  const activities = [
    {
      title: "SDLC Explained Creatively",
      platform: "LinkedIn",
      date: "25 Sep 2025",
      description:
        "At a college event, a guest speaker explained the Software Development Life Cycle (SDLC) by comparing it to making Idly 🍛 — a fun and creative way to understand core concepts. I shared this on LinkedIn to spread the idea and help others learn in a similar engaging way.",
      links:
        "https://www.linkedin.com/posts/vishnu-dt_sdlc-softwaredevelopmentlifecycle-activity-7376627958553247744-5di0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
      logo: linkedInIcon,
    },
    {
      title: "Terminology Series: React/Next.js (9 Parts)",
      platform: "LinkedIn",
      date: "23 Sep 2025",
      description: (
        <>
          Launched a multi-part series breaking down React & Next.js concepts
          into simple terms for beginners. Each part covers 10 key terms,
          published daily. Part 2 started gaining engagement from new viewers,
          including reactions and comments.
          <br />
          <br />
          <span className="italic">
            This is a 9-part LinkedIn series. You can find the rest of the parts
            in my LinkedIn profile.
          </span>
        </>
      ),
      links: [
        {
          name: "Part 1",
          link: "https://www.linkedin.com/posts/vishnu-dt_reactjs-nextjs-webdevelopment-activity-7375823574340841473-_nG0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
        },
        {
          name: "View Series on LinkedIn",
          link: "https://www.linkedin.com/in/vishnu-dt/recent-activity/all/",
        },
      ],
      logo: linkedInIcon,
    },
    {
      title: "10 Reasons Why I Love Next.js 💙",
      platform: "LinkedIn",
      date: "19 Sep 2025",
      description:
        "A personal post highlighting what makes Next.js my favorite framework, sharing insights and experiences from React & Next.js development.",
      links: [
        {
          name: "Post (Short)",
          link: "https://www.linkedin.com/posts/vishnu-dt_%F0%9D%9F%AD%F0%9D%9F%AC-%F0%9D%97%BF%F0%9D%97%B2%F0%9D%97%AE%F0%9D%98%80%F0%9D%97%BC%F0%9D%97%BB%F0%9D%98%80-%F0%9D%98%84%F0%9D%97%B5%F0%9D%98%86-%F0%9D%97%9C-%F0%9D%97%B9%F0%9D%97%BC%F0%9D%98%83%F0%9D%97%B2-activity-7374818532204871680-SJPR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
        },
        {
          name: "Article (Extended)",
          link: "https://www.linkedin.com/posts/vishnu-dt_10-reasons-why-i-love-nextjs-so-much-activity-7374824566302572544-pG3s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
        },
      ],
      logo: linkedInIcon,
    },
    {
      title: "How I Learned Next.js Fundamentals",
      platform: "LinkedIn",
      date: "20 May 2025",
      description:
        "Shared my project-based journey learning Next.js App Router. Documented each step with GitHub commits and markdown tables. Included practical guidance on TypeScript, NextAuth, and routing, aimed to help beginners replicate the learning process.",
      links:
        "https://www.linkedin.com/pulse/how-i-learned-fundamentals-nextjs-app-router-project-based-vishnu-d-ifxdc",
      logo: linkedInIcon,
    },
    {
      title: "🎓 From Curious Kid to Web Dev",
      platform: "LinkedIn",
      date: "19 Apr 2025",
      description:
        "My first LinkedIn post documenting my self-taught journey from a curious kid to a web developer. Highlighted challenges, learning milestones, and the process of becoming a fresher in the tech world.",
      links:
        "https://www.linkedin.com/posts/vishnu-dt_sharing-my-journey-so-far-as-a-computer-science-activity-7319366449842597888-yenx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
      logo: linkedInIcon,
    },
  ];

  return (
    <ActivitiesSection
      activities={activities}
      linkedinActivities="https://www.linkedin.com/in/vishnu-dt/recent-activity/all/"
    />
  );
};

export default ActivitiesView;
