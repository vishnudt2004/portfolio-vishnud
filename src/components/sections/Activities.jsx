import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

import config from "@config/config";
import Anchor from "@components/elements/Anchor";
import { SimpleLayout } from "@components/elements/SectionLayouts";
import ShowcaseItem from "@components/elements/ShowcaseItem";
import ShowMoreData from "@components/elements/ShowMoreData";
import { LinkedinIcon } from "@components/elements/CustomIcons";

import linkedInIcon from "@assets/images/icons/linkedin.svg";

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
          {links.map(({ name, link, color }) => (
            <Anchor key={name} href={link} color={color} className="w-fit">
              {name}
            </Anchor>
          ))}
        </div>
      ) : (
        <Anchor href={links} className="mt-auto w-fit">
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

const ActivitiesCreator = ({ activities, linkedinActivities }) => (
  <SimpleLayout id={config.SECTION_IDS.ACTIVITIES} sectionTitle="Activities">
    <ShowMoreData items={activities}>
      {(visibleItems) =>
        visibleItems.map((certificate, ind) => (
          <ActivityItem key={ind} {...certificate} />
        ))
      }
    </ShowMoreData>

    <p className="mt-5 text-center">
      Explore more activities on my LinkedIn:{" "}
      <a
        color="var(--global-text-color)"
        href={linkedinActivities}
        target="_blank"
        className="highlight-primary before: mt-2 ml-2 inline-flex! items-center rounded-full"
      >
        <span className="inline-flex items-center gap-2">
          <LinkedinIcon className="size-4.5" /> vishnu-dt
        </span>
      </a>
    </p>
  </SimpleLayout>
);

const Activities = () => {
  const activities = [
    //     {
    //   title: "Portfolio Redesign & Feedback Request",
    //   platform: "LinkedIn",
    //   date: "27 Sep 2025",
    //   description:
    //     "Shared my recent portfolio redesign featuring a clean UI, new sections like Certifications and Activities, the ShowcaseItem component, and multiple themes. Humbly requested feedback from the community to improve further.",
    //   links: "",
    //   logo: linkedInIcon,
    // },
    {
      title: "Terminology Series: React/Next.js (5 Parts)",
      platform: "LinkedIn",
      date: "23 Sep 2025",
      description:
        "Launched a multi-part series breaking down React & Next.js concepts into simple terms for beginners. Each part covers 10 key terms, published daily. Part 2 started gaining engagement from new viewers, including reactions and comments.",
      links: [
        {
          name: "Part 1",
          link: "https://www.linkedin.com/posts/vishnu-dt_reactjs-nextjs-webdevelopment-activity-7375823574340841473-_nG0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
          color: "var(--color-blue-500)",
        },
        {
          name: "Part 2",
          link: "https://www.linkedin.com/posts/vishnu-dt_reactjs-nextjs-webdevelopment-activity-7376139789680435200-MfMm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
          color: "var(--color-green-500)",
        },
        {
          name: "Part 3",
          link: "https://www.linkedin.com/posts/vishnu-dt_reactjs-nextjs-webdevelopment-activity-7376499679506862082-Yg8s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEsLsUsBfZc9gFzsMKzBoCpNd0R3kL9RBFw",
          color: "var(--color-blue-500)",
        },
        {
          name: "Part 4 (upcoming)",
          // link: "#",
          color: "var(--color-green-500)",
        },
        {
          name: "Part 5 (upcoming)",
          // link: "#",
          color: "var(--color-blue-500)",
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
          color: "var(--color-green-500)",
        },
      ],
      logo: linkedInIcon,
    },
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
    <ActivitiesCreator
      activities={activities}
      linkedinActivities="https://www.linkedin.com/in/vishnu-dt/recent-activity/all/"
    />
  );
};

export default Activities;
