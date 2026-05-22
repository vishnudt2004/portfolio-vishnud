import { RiFileInfoFill, RiTrophyFill, RiTrophyLine } from "@remixicon/react";

import Card, { CardActions, CardButton } from "@/components/ui/Card";

const AchievementCard = ({
  id,
  content: { title, description },
  meta: { event, location, date, logo },
  credentials,
}) => (
  <Card
    id={id}
    header={{
      title,
      subtitle: (event || location) && (
        <span className="mb-2 inline text-sm font-semibold text-(--text-secondary-color-g)">
          {event} {location && "@"}{" "}
          {location && <span className="italic">{location}</span>}
        </span>
      ),
      date,
      logo,
      leadingIcon: RiTrophyLine,
    }}
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
    visual={{
      overlay: <RiTrophyFill className="size-[120px] opacity-5" />,
      accentColor: "var(--color-yellow-500)",
    }}
  />
);

export default AchievementCard;
