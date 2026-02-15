import { useLocation, useNavigate } from "react-router";

import { scrollToSection } from "@/utils/jsUtils";

export const useNavigateToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (sectionId, offset) => {
    if (location.pathname === "/") {
      scrollToSection(sectionId, offset);
    } else {
      navigate("/", {
        state: { scrollTo: sectionId, offset },
      });
    }
  };
};
