import {
  RiCertificateLine,
  RiCertificateFill,
  RiFileCheckFill,
} from "@remixicon/react";

import Card, { CardActions, CardButton } from "@/components/ui/Card";

const CertificateItem = ({
  id,
  title,
  issuer,
  date,
  description,
  credentials,
  logo,
  logoAlt,
}) => (
  <Card
    id={id}
    title={title}
    subtitle={issuer}
    date={date}
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
    logo={logo}
    logoAlt={logoAlt}
    leadingIcon={RiCertificateLine}
    bgOverlay={<RiCertificateFill className="size-[120px] opacity-5" />}
    style={{ "--accent-color": "var(--color-green-500)" }}
  />
);

export default CertificateItem;
