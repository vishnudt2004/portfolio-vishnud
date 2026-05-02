import { RiArticleFill, RiArticleLine } from "@remixicon/react";

import Anchor from "@/components/ui/Anchor";
import Card, { CardActions } from "@/components/ui/Card";

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

export default ActivityItem;
