import { RiFileInfoFill, RiTrophyFill, RiTrophyLine } from "@remixicon/react";

import { IDS } from "@/config/constants";
import { take } from "@/utils/jsUtils";
import { SectionBtns, SimpleLayout } from "@/components/ui/SectionLayouts";
import Card, { Br, List, CardActions, CardButton } from "@/components/ui/Card";
import LoadMoreGrid from "@/components/ui/LoadMoreGrid";

import achievement1 from "@/assets/images/achievements/achievement-1.webp";
import achievement2 from "@/assets/images/achievements/achievement-2.webp";

const AchievementItem = ({
  id,
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
  <Card
    id={id}
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
    actions={
      <CardActions
        actions={credentials}
        fallbackLabel="View Details"
        itemId={id}
      >
        {({ key, id, label, ariaLabelledby, href }) => (
          <CardButton
            key={key}
            id={id}
            href={href}
            icon={<RiFileInfoFill aria-hidden className="size-4" />}
            aria-labelledby={ariaLabelledby}
          >
            {label}
          </CardButton>
        )}
      </CardActions>
    }
    logo={logo}
    logoAlt={logoAlt}
    leadingIcon={RiTrophyLine}
    bgOverlay={<RiTrophyFill className="size-[120px] opacity-5" />}
    style={{
      "--accent-color": "var(--color-yellow-500)",
    }}
    className={className}
  />
);

const AchievementsSection = ({ achievements }) => (
  <SimpleLayout sectionId={IDS.achievements} sectionTitle="Achievements">
    <LoadMoreGrid
      gridId="achievements-grid"
      items={achievements}
      style={{ "--cursor-accent-scoped": "var(--color-yellow-500)" }}
    >
      {(visibleItems) =>
        visibleItems.map((achievement) => (
          <AchievementItem key={achievement.id} {...achievement} />
        ))
      }
    </LoadMoreGrid>

    <SectionBtns
      primary={{ label: "View all achievements", href: "/achievements" }}
    />
  </SimpleLayout>
);

const Hl = (props) => (
  <span className="highlight-primary rounded-md px-1.25 leading-4" {...props} />
); // Highlight

const achievements = [
  {
    id: "achievement-1",
    title: "1st Place – Web Development Contest",
    event: "CS Department Function",
    location: "Govt. Arts & Science College – Komarapalayam",
    date: "Jan 2026",
    description: (
      <>
        <List
          items={[
            <>
              Cleared a technical MCQ round (20/20) and built a two-page
              e-commerce website (landing + products page) in 40 minutes using
              HTML, CSS, and Tailwind CSS based on a single provided topic
            </>,
            <>
              Secured <Hl>1st place</Hl> as a solo participant and won a{" "}
              <Hl>certificate</Hl> and a <Hl>book</Hl>
            </>,
          ]}
        />
        <Br />
        <span className="italic">Theme: E-commerce</span>
      </>
    ),
    credentials: [{ label: "Credential (Coming soon)", href: "#" }],
  },

  {
    id: "achievement-2",
    title: "Open Source – Simple UI Components",
    event: "Open Source, NPM",
    date: "Sep 2025",
    description: (
      <>
        Built <Hl>SUIC</Hl>, an open-source, local-first collection of reusable
        UI and frontend utility components. Published with an <Hl>NPM CLI</Hl>{" "}
        (npx suic-cli) for installing editable source code with documentation
        support.
      </>
    ),
    credentials: [{ href: "https://npmjs.com/package/suic-cli/" }],
  },

  {
    id: "achievement-3",
    title: "1st Place – Web Development Contest",
    event: "Mirror 2K25, Intercollegiate Event",
    location: "Erode Arts and Science College, Erode",
    date: "Oct 2025",
    description: (
      <>
        <List
          items={[
            <>
              Cleared a technical MCQ round and Built a webpage in 1 hour using{" "}
              <span className="underline">HTML, CSS, and JavaScript</span>{" "}
              (images-only internet)
            </>,
            <>Topic assigned by draw; worked as a 2-member team</>,
            <>
              Secured <Hl>1st place</Hl> among multiple teams; won{" "}
              <Hl>₹1000</Hl> and a medal
            </>,
          ]}
        />
        <Br />
        <span className="italic">Topic: Digital Literacy for All</span>
      </>
    ),
    credentials: [{ label: "Credential (Coming soon)", href: "#" }],
  },

  {
    id: "achievement-4",
    title: "Portfolio Redesign & Iterative Improvements",
    event: "Portfolio Update",
    date: "Sep 2025 – Jan 2026",
    description: (
      <>
        <List
          items={[
            <>
              <strong>[Sep 2025]</strong> Complete redesign with cleaner UI and
              improved UX; added smooth transitions, multiple themes, new
              sections (Certifications, Activities), and a unified showcase
              layout
            </>,
            <>
              <strong>[Jan 2026]</strong> Major semantic and accessibility
              (a11y) improvements, UI refinements, and deeper refactors to
              improve correctness and code quality; released <Hl>v1.6.1</Hl>
            </>,
          ]}
        />
      </>
    ),
    credentials: [
      {
        label: "Explore this site",
        credential: "https://portfolio-vishnud.vercel.app",
      },
    ],
  },

  {
    id: "achievement-5",
    title: "1st Place – Web Development Contest",
    event: "Mirror 2K24, Intercollegiate Event",
    location: "Erode Arts and Science College, Erode",
    date: "Oct 2024",
    description: (
      <>
        <List
          items={[
            <>
              Cleared a technical MCQ round and Built a webpage in 45 minutes
              using provided images only (no internet)
            </>,
            <>
              Selected one of two image sets; developed using{" "}
              <span className="underline">HTML, CSS, and JavaScript</span> as a
              2-member team
            </>,
            <>
              Secured <Hl>1st place</Hl> among multiple teams; won{" "}
              <Hl>₹1000</Hl> and a medal
            </>,
          ]}
        />
        <Br />
        <span className="italic">Theme: Green Nature (Organization)</span>
      </>
    ),
    credentials: [{ href: achievement1 }],
  },

  {
    id: "achievement-6",
    title: "1st Place – Logo Design Competition",
    event: "CS Department Function",
    location: "Govt. Arts & Science College – Komarapalayam",
    date: "May 2022",
    description: (
      <>
        Won 1st place in a logo design competition conducted by the CS
        Department during the 75th Independence Day Celebration (2022). Awarded
        a commemorative <Hl>book</Hl> as the prize.
      </>
    ),
    credentials: [{ href: achievement2 }],
  },
];

const AchievementsView = ({ all }) => {
  const FEATURED_COUNT = 3;

  return (
    <AchievementsSection
      achievements={all ? achievements : take(achievements, FEATURED_COUNT)}
    />
  );
};

export default AchievementsView;
