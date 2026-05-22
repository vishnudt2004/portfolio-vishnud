import { IDS } from "@/config/constants";
import FeatureLayout from "@/components/ui/FeatureLayout";
import CertificateCard from "./CertificateCard";
import { certificates } from "./certifications.data";

const CertificationsSection = ({
  title = "Certifications",
  featuredCount,
  actions,
}) => (
  <FeatureLayout
    ids={{ sectionId: IDS.certifications, gridId: "certifications-grid" }}
    title={title}
    featuredCount={featuredCount}
    actions={actions}
    cardComponent={CertificateCard}
    data={certificates}
  />
);

export default CertificationsSection;
