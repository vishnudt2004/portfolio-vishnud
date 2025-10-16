import {
  TrophyIcon as TrophySolidIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { TrophyIcon } from "@heroicons/react/24/outline";

import config from "@/config";
import { SimpleLayout } from "@/components/elements/SectionLayouts";
import ShowcaseItem, {
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
  className,
}) => (
  <ShowcaseItem
    title={title}
    subtitle={
      (event || location) && (
        <span className="mb-2 inline text-sm font-semibold text-(--global-secondary-text-color)">
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
              href={credential}
              aria-label="View Achievement Details"
            >
              <InformationCircleIcon className="size-4" /> {name}
            </ShowcaseItemBtn>
          ))}
        </div>
      ) : (
        <ShowcaseItemBtn
          href={credentials}
          icon={<InformationCircleIcon className="size-4" />}
          aria-label="View Achievement Details"
        >
          See Details
        </ShowcaseItemBtn>
      ))
    }
    logo={logo}
    defaultLogo={TrophyIcon}
    bgOverlay={<TrophySolidIcon className="w-[120px] opacity-5" />}
    style={{
      "--accent-color": "var(--color-yellow-500)",
    }}
    className={className}
  />
);

const AchievementsSection = ({ achievements }) => (
  <SimpleLayout
    id={config.SECTION_IDS.ACHIEVEMENTS}
    sectionTitle="Achievements"
  >
    <ShowMoreData items={achievements}>
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
      title: "1st Place – Web Development Contest",
      event: "Mirror 2K25, Intercollegiate Event",
      location: "Erode Arts and Science College, Erode",
      date: "Oct 2025",
      description: (
        <>
          Developed a webpage in 1 hour using only{" "}
          <span className="underline">HTML, CSS, and JavaScript</span>, with
          internet access allowed only for images. Topic was chosen by drawing
          lots, and I built it as part of a team of two. Competed among multiple
          teams, secured 1st place, and won{" "}
          <span className="highlight-primary rounded-md">₹ 1000</span> and a
          medal.
          <br />
          <br />
          <span className="italic">Topic was: Digital Literacy for all.</span>
        </>
      ),
      credentials: [{ name: "Credential (Coming soon)" }],
    },
    {
      title: "Portfolio Redesign",
      event: "Portfolio Update",
      date: "Sep 2025",
      description:
        "Completely revamped personal portfolio with a cleaner, more consistent UI and improved UX, including smooth transitions multiple new themes, added sections (Certifications, Activities) with a consistent showcase design across sections and updated content. Refactored code for better maintainability and enhanced overall user experience.",
      credentials: [
        {
          name: "Explore this site",
          credential: "https://portfolio-vishnud.vercel.app",
        },
      ],
    },
    {
      title: "Open Source – Simple UI Components",
      event: "Open Source, NPM",
      date: "Sep 2025",
      description:
        "Built SUIC, an open-source, local-first collection of reusable UI and frontend utility components. published with an NPM CLI (npx suic-cli) for seamless installation as editable source code with documentation support.",
      credentials: "https://npmjs.com/package/suic-cli/",
    },
    {
      title: "1st Place – Web Development Contest",
      event: "Mirror 2K24, Intercollegiate Event",
      location: "Erode Arts and Science College, Erode",
      date: "Oct 2024",
      description: (
        <>
          Developed a webpage in 45 minutes using only the provided images, no
          internet access. Chose one of two given sets of images and built it
          using <span className="underline">HTML, CSS, and JavaScript</span> as
          a team of two. Competed among multiple teams, secured 1st place, and
          won <span className="highlight-primary rounded-md">₹ 1000</span> and a
          medal.
          <br />
          <br />
          <span className="italic">Titled: Green Nature (Organization).</span>
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
        "Received the book 'Yevuganai Manithan: Abdul Kalam Vazhkai Varalarum, Kavithaigalum' as a prize during the 75th Independence Day Celebration, 2022",
      credentials: achievement2,
    },
  ];

  return <AchievementsSection achievements={achievements} />;
};

export default AchievementsView;
