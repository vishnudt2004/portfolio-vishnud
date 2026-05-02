import { IDS } from "@/config/constants";
import { take } from "@/utils/jsUtils";
import HeadingScope from "@/components/helpers/HeadingScope";
import {
  SectionBtns,
  SectionTitle,
  SimpleLayout,
} from "@/components/ui/SectionLayouts";
import LoadMoreGrid from "@/components/ui/LoadMoreGrid";
import { certificates } from "@/features/certifications/certifications.data";
import CertificateItem from "@/features/certifications/CertificateItem";

const CertificationsSection = ({ certificates }) => (
  <HeadingScope>
    <SimpleLayout
      sectionTitle={
        <SectionTitle sectionId={IDS.certifications}>
          Certifications
        </SectionTitle>
      }
    >
      <HeadingScope>
        <LoadMoreGrid gridId="certifications-grid" items={certificates}>
          {(visibleItems) =>
            visibleItems.map((certificate) => (
              <CertificateItem key={certificate.id} {...certificate} />
            ))
          }
        </LoadMoreGrid>
      </HeadingScope>
      <SectionBtns
        primary={{ label: "View all certifications", href: "/certifications" }}
      />
    </SimpleLayout>
  </HeadingScope>
);

const CertificationsView = () => {
  const FEATURED_COUNT = 3;

  return (
    <CertificationsSection certificates={take(certificates, FEATURED_COUNT)} />
  );
};

export default CertificationsView;
