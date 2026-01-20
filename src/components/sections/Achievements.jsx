import {
  TrophyIcon as TrophySolidIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { TrophyIcon } from "@heroicons/react/24/outline";

import config from "@/config";
import { SimpleLayout } from "@/components/elements/SectionLayouts";
import ShowcaseItem, {
  Br,
  List,
  ShowcaseItemBtn,
} from "@/components/elements/ShowcaseItem";
import ShowMoreData from "@/components/elements/ShowMoreData";

import achievement1 from "@/assets/images/achievements-certificate/achievement-1.webp";
import achievement2 from "@/assets/images/achievements-certificate/achievement-2.webp";

const AchievementItem = ({
  title,
  event,
  location,
  date,
  description,
  credentials,
  logo,
  logoAlt,
  className,
}) => (
  <ShowcaseItem
    title={title}
    subtitle={
      (event || location) && (
        <span className="mb-2 inline text-sm font-semibold text-(--text-secondary-color-g)">
          {event} {location && "@"}{" "}
          {location && <span className="italic">{location}</span>}
        </span>
      )
    }
    date={date}
    description={description}
    credentials={
      credentials &&
      (Array.isArray(credentials) ? (
        <div className="mt-auto flex flex-wrap gap-2">
          {credentials.map(({ name, credential }) => (
            <ShowcaseItemBtn
              key={name}
              aria-label="View Achievement Details"
              href={credential}
              icon={<InformationCircleIcon aria-hidden className="size-4" />}
            >
              {name}
            </ShowcaseItemBtn>
          ))}
        </div>
      ) : (
        <ShowcaseItemBtn
          aria-label="View Achievement Details"
          href={credentials}
          icon={<InformationCircleIcon aria-hidden className="size-4" />}
        >
          See Details
        </ShowcaseItemBtn>
      ))
    }
    logo={logo}
    logoAlt={logoAlt}
    leadingIcon={TrophyIcon}
    bgOverlay={<TrophySolidIcon className="w-[120px] opacity-5" />}
    style={{
      "--accent-color": "var(--color-yellow-500)",
    }}
    className={className}
  />
);

const AchievementsSection = ({ achievements }) => (
  <SimpleLayout
    sectionId={config.IDS_MAP.ACHIEVEMENTS}
    sectionTitle="Achievements"
  >
    <ShowMoreData
      gridId="achievements-grid"
      items={achievements}
      style={{ "--cursor-accent-scoped": "var(--color-yellow-500)" }}
    >
      {(visibleItems) =>
        visibleItems.map((achievement, ind) => (
          <AchievementItem key={ind} {...achievement} />
        ))
      }
    </ShowMoreData>
  </SimpleLayout>
);

const AchievementsView = () => {
  const achievements = [
    {
      title: "Portfolio Redesign & Iterative Improvements",
      event: "Portfolio Update",
      date: "Sep 2025 – Jan 2026",
      description: (
        <>
          <List
            items={[
              <>
                <strong>[Sep 2025]</strong> Complete redesign with cleaner UI
                and improved UX; added smooth transitions, multiple themes, new
                sections (Certifications, Activities), and a unified showcase
                layout
              </>,
              <>
                <strong>[Jan 2026]</strong> Major semantic and accessibility
                (a11y) improvements, UI refinements, and deeper refactors to
                improve correctness and code quality; released v1.6.1
              </>,
            ]}
          />
        </>
      ),
      credentials: [
        {
          name: "Explore this site",
          credential: "https://portfolio-vishnud.vercel.app",
        },
      ],
    },

    {
      title: "1st Place – Web Development Contest",
      event: "Mirror 2K25, Intercollegiate Event",
      location: "Erode Arts and Science College, Erode",
      date: "Oct 2025",
      description: (
        <>
          <List
            items={[
              <>
                Built a webpage in 1 hour using{" "}
                <span className="underline">HTML, CSS, and JavaScript</span>{" "}
                (images-only internet)
              </>,
              <>Topic assigned by draw; worked as a 2-member team</>,
              <>
                Secured 1st place among multiple teams; won{" "}
                <span className="highlight-primary rounded-md">₹1000</span> and
                a medal
              </>,
            ]}
          />
          <Br />
          <span className="italic">Topic: Digital Literacy for All</span>
        </>
      ),
      credentials: [{ name: "Credential (Coming soon)" }],
    },

    {
      title: "Open Source – Simple UI Components",
      event: "Open Source, NPM",
      date: "Sep 2025",
      description:
        "Built SUIC, an open-source, local-first collection of reusable UI and frontend utility components. Published with an NPM CLI (npx suic-cli) for installing editable source code with documentation support.",
      credentials: "https://npmjs.com/package/suic-cli/",
    },

    {
      title: "1st Place – Web Development Contest",
      event: "Mirror 2K24, Intercollegiate Event",
      location: "Erode Arts and Science College, Erode",
      date: "Oct 2024",
      description: (
        <>
          <List
            items={[
              <>
                Built a webpage in 45 minutes using provided images only (no
                internet)
              </>,
              <>
                Selected one of two image sets; developed using{" "}
                <span className="underline">HTML, CSS, and JavaScript</span> as
                a 2-member team
              </>,
              <>
                Secured 1st place among multiple teams; won{" "}
                <span className="highlight-primary rounded-md">₹1000</span> and
                a medal
              </>,
            ]}
          />
          <Br />
          <span className="italic">Theme: Green Nature (Organization)</span>
        </>
      ),
      credentials: achievement1,
    },

    {
      title: "1st Place – Logo Design Competition",
      event: "CS Department Function",
      location: "Govt. Arts & Science College – Komarapalayam, Namakkal (Dt.)",
      date: "May 2022",
      description:
        "Won 1st place in a logo design competition conducted by the CS Department during the 75th Independence Day Celebration (2022). Awarded a commemorative book as the prize.",
      credentials: achievement2,
    },
  ];

  return <AchievementsSection achievements={achievements} />;
};

export default AchievementsView;
