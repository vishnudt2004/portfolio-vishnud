import { RiArticleFill, RiArticleLine } from "@remixicon/react";

import Anchor from "@/components/ui/Anchor";
import Card, { CardActions } from "@/components/ui/Card";

const ActivityCard = ({
  id,
  content: { title, description },
  meta: { platform, date, logo },
  links,
}) => (
  <Card
    id={id}
    header={{
      title,
      subtitle: platform,
      date,
      logo,
      leadingIcon: RiArticleLine,
    }}
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
    visual={{
      overlay: <RiArticleFill className="size-[120px] opacity-5" />,
      accentColor: "var(--color-blue-500)",
    }}
  />
);

export default ActivityCard;
