import { Link } from "react-router";
import { RiArrowRightLine } from "@remixicon/react";

import { SectionActions } from "@/components/ui/FeatureLayout";

import CertificationsSection from "@/features/certifications/CertificationsSection";

const Certifications = () => (
  <CertificationsSection
    featuredCount={3}
    actions={
      <SectionActions
        primary={
          <Link to="/certifications">
            View all certifications
            <RiArrowRightLine aria-hidden />
          </Link>
        }
      />
    }
  />
);

export default Certifications;
