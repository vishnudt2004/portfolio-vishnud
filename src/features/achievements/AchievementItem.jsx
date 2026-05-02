import { RiFileInfoFill, RiTrophyFill, RiTrophyLine } from "@remixicon/react";

import Card, { CardActions, CardButton } from "@/components/ui/Card";

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

export default AchievementItem;
