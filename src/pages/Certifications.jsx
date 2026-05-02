import { IDS } from "@/config/constants";
import HeadingLevelProvider from "@/contexts/HeadingLevelContext";
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
  <SimpleLayout
    sectionTitle={
      <SectionTitle sectionId={IDS.certifications}>
        All Certifications
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

    <SectionBtns />
  </SimpleLayout>
);

const CertificationsView = () => (
  <HeadingLevelProvider>
    <CertificationsSection certificates={certificates} />
  </HeadingLevelProvider>
);

export default CertificationsView;
