import { lazy } from "react";

const CertificationsView = lazy(
  () => import("@/components/sections/Certifications"),
);

const Certifications = () => <CertificationsView all />;

export default Certifications;
