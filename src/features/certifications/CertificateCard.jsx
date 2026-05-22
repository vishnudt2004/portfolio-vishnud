import {
  RiCertificateLine,
  RiCertificateFill,
  RiFileCheckFill,
} from "@remixicon/react";

import Card, { CardActions, CardButton } from "@/components/ui/Card";

const CertificateCard = ({
  id,
  content: { title, description },
  meta: { issuer, date, logo },
  credentials,
}) => (
  <Card
    id={id}
    header={{
      title,
      subtitle: issuer,
      date,
      logo,
      leadingIcon: RiCertificateLine,
    }}
    description={description}
    actions={
      <CardActions
        actions={credentials}
        fallbackLabel="View Credential"
        itemId={id}
      >
        {({ key, id, label, ariaLabelledby, href }) => (
          <CardButton
            key={key}
            id={id}
            href={href}
            icon={<RiFileCheckFill aria-hidden className="size-4" />}
            aria-labelledby={ariaLabelledby}
          >
            {label}
          </CardButton>
        )}
      </CardActions>
    }
    visual={{
      overlay: <RiCertificateFill className="size-[120px] opacity-5" />,
      accentColor: "var(--color-green-500)",
    }}
  />
);

export default CertificateCard;
