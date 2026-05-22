import { SectionActions } from "@/components/ui/FeatureLayout";
import HeadingLevelProvider from "@/contexts/HeadingLevelContext";
import CertificationsSection from "@/features/certifications/CertificationsSection";

const Certifications = () => (
  <HeadingLevelProvider>
    <CertificationsSection
      title="All Certifications"
      actions={<SectionActions goBack />}
    />
  </HeadingLevelProvider>
);

export default Certifications;
