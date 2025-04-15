import {
  CheckBadgeIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";

import config from "@config/config";
import { Divider } from "@components/elements/Divider";
import { SimpleLayout } from "@components/elements/SectionLayouts";
import { MedalStarBadgeIcon as CustomMedalStarBadgeIcon } from "@components/elements/CustomIcons";

import achievementImage_1 from "@assets/images/achievements-certificate/achievement-1.webp";
import achievementImage_2 from "@assets/images/achievements-certificate/achievement-2.webp";

const AchievementCard = ({
  title = (
    <span className="flex items-center justify-center gap-2">
      <CustomMedalStarBadgeIcon className="inline-block h-15 w-15 fill-yellow-500" />{" "}
      Achievement Unlocked
    </span>
  ),
  descr,
  event,
  location,
  fullDescr,
  cert,
}) => (
  <div className="relative z-0 mx-auto min-h-80 w-3xl rounded-2xl border border-yellow-400 p-6 shadow-md">
    <AcademicCapIcon className="absolute top-0 left-0 -z-1 h-full opacity-10 max-sm:w-full" />
    <CheckBadgeIcon className="absolute -top-3 -right-3 h-10 w-10 rounded-full border border-yellow-500 bg-(--global-background-color) text-yellow-500" />

    <div className="mb-4 flex items-center gap-3">
      <h2 className="flex items-center justify-center gap-2 text-xl font-semibold text-yellow-500 sm:text-2xl">
        {title}
      </h2>
    </div>

    <h3 className="mb-1 text-lg font-bold">{descr}</h3>

    <p className="mb-3 text-sm font-bold text-(--global-secondary-text-color)">
      {event} {location && "@"}{" "}
      {location && <span className="italic">{location}</span>}
    </p>

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
    {cert && (
      <a
        href={cert}
        target="_blank"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-3 py-2 text-sm text-white"
      >
        <DocumentCheckIcon className="h-5 w-5" /> View Certificate
      </a>
    )}
  </div>
);

const AchievementsCreator = ({ title = "Achievements", achievements }) => (
  <SimpleLayout id={config.SECTION_IDS.ACHIEVEMENTS} sectionTitle={title}>
    <div className="flex flex-wrap gap-5">
      {achievements.map((achievement, ind) => (
        <AchievementCard key={ind} {...achievement} />
      ))}
    </div>
  </SimpleLayout>
);

const Achievements = () => {
  const achievements = [
    {
      descr: "1st Place – Web Development Contest",
      event: "Mirror 2K24, Intercollegiate Event",
      location: "Erode Arts and Science College, Erode – 2024",
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
      location:
        "Govt. Arts & Science College – Komarapalayam, Namakkal (Dt.) – 2022",
      fullDescr:
        "Received the book 'Yevuganai Manithan: Abdul Kalam Vazhkai Varalarum, Kavithaigalum' as a prize during the 75th Independence Day Celebration, 2022",
      cert: achievementImage_2,
    },
  ];

  return <AchievementsCreator achievements={achievements} />;
};

export default Achievements;
