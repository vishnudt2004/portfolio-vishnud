import {
  CheckBadgeIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";

import config from "@config/config";
import { Divider } from "@components/elements/Divider";
import { SimpleLayout } from "@components/elements/SectionLayouts";
import ShowMoreData from "@components/elements/ShowMoreData";
import { MedalStarBadgeIcon as CustomMedalStarBadgeIcon } from "@components/elements/CustomIcons";

import achievementImage_1 from "@assets/images/achievements-certificate/achievement-1.webp";
import achievementImage_2 from "@assets/images/achievements-certificate/achievement-2.webp";
import achievementImage_3_react from "@assets/images/achievements-certificate/achievement-3/react_basic-certificate.webp";
import achievementImage_3_js from "@assets/images/achievements-certificate/achievement-3/javascript_basic-certificate.webp";
import achievementImage_3_css from "@assets/images/achievements-certificate/achievement-3/css-certificate.webp";

const AchievementCard = ({
  title = (
    <span className="flex items-center justify-center gap-2">
      <CustomMedalStarBadgeIcon className="inline-block h-15 w-15 fill-yellow-500" />{" "}
      Achievement Unlocked
    </span>
  ),
  descr,
  event,
  location_date,
  fullDescr,
  cert,
}) => (
  <div className="relative z-0 mx-auto min-h-80 w-full rounded-lg border p-6 shadow-md min-[800px]:w-3xl">
    <AcademicCapIcon className="absolute top-0 left-0 -z-1 h-full opacity-5 max-sm:w-full" />
    <CheckBadgeIcon className="absolute -top-3 -right-3 h-10 w-10 rounded-full border bg-(--global-background-color)" />

    <div className="mb-4 flex items-center gap-3">
      <h2 className="flex items-center justify-center gap-2 text-xl font-semibold sm:text-2xl">
        {title}
      </h2>
    </div>

    <h3 className="mb-1 text-lg font-bold">{descr}</h3>

    {(event || location_date) && (
      <p className="mb-3 text-sm font-bold text-(--global-secondary-text-color)">
        {event} {location_date && "@"}{" "}
        {location_date && <span className="italic">{location_date}</span>}
      </p>
    )}

    <Divider
      color="var(--color-yellow-400)"
      height="1px"
      width="100%"
      style={{ opacity: 0.5 }}
    />

    <p className="any-pointer-fine:secondary-scrollbar text-(--global-secondary-text-color) max-sm:max-h-50 max-sm:overflow-y-auto">
      {fullDescr}
    </p>

    {/* Optional CTA / Certificate Link */}
    {cert &&
      (typeof cert === "object" ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {cert.map(({ name, cert }) => (
            <a
              key={name}
              href={cert}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-3 py-2 text-sm text-black"
            >
              <DocumentCheckIcon className="size-5" /> {name}
            </a>
          ))}
        </div>
      ) : (
        <a
          href={cert}
          target="_blank"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-3 py-2 text-sm text-black"
        >
          <DocumentCheckIcon className="size-5" /> View Certificate
        </a>
      ))}
  </div>
);

const AchievementsCreator = ({
  achievements,
  endMessage = <p>🎉 That’s all for now!</p>,
}) => (
  <SimpleLayout
    id={config.SECTION_IDS.ACHIEVEMENTS}
    sectionTitle="Achievements"
  >
    <ShowMoreData
      items={achievements}
      initialCount={2}
      endMessageElement={endMessage}
    >
      {(visibleItems) =>
        visibleItems.map((achievement, ind) => (
          <AchievementCard key={ind} {...achievement} />
        ))
      }
    </ShowMoreData>
  </SimpleLayout>
);

const Achievements = () => {
  const achievements = [
    {
      descr: "1st Place – Web Development Contest",
      event: "Mirror 2K24, Intercollegiate Event",
      location_date: "Erode Arts and Science College, Erode – 2024",
      fullDescr: (
        <>
          Developed a webpage in 45 minutes using only the provided images, no
          internet access. Chose one of two given topics and built it with{" "}
          <span className="underline">HTML, CSS, and JavaScript</span> as a team
          of two. Competed against ~25 teams, secured 1st place, and won{" "}
          <span className="highlight-primary rounded-md">₹ 1000</span>.
        </>
      ),
      cert: achievementImage_1,
    },
    {
      descr: "1st Place – Logo Design Competition",
      event: "CS Department Function",
      location_date:
        "Govt. Arts & Science College – Komarapalayam, Namakkal (Dt.) – 2022",
      fullDescr:
        "Received the book 'Yevuganai Manithan: Abdul Kalam Vazhkai Varalarum, Kavithaigalum' as a prize during the 75th Independence Day Celebration, 2022",
      cert: achievementImage_2,
    },
    {
      descr: "HackerRank Certifications",
      event: "",
      location_date: "Online – 2025",
      fullDescr: (
        <>
          <span>⭐&nbsp;React (Basic)</span>
          <span> ⭐&nbsp;JavaScript (Basic)</span>
          <span> ⭐&nbsp;CSS (Basic)</span>
        </>
      ),
      cert: [
        { name: "React Certificate", cert: achievementImage_3_react },
        { name: "JavaScript Certificate", cert: achievementImage_3_js },
        { name: "CSS Certificate", cert: achievementImage_3_css },
      ],
    },
  ];

  return <AchievementsCreator achievements={achievements} />;
};

export default Achievements;
