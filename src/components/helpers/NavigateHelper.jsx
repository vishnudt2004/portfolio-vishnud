import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import { scrollToSection } from "@/utils/jsUtils";

const NavigateHelper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state;
    if (!state?.scrollTo) return;

    scrollToSection(state.scrollTo, state?.offset);
    navigate("/", { replace: true, state: null });
  }, [location.state]);

  return null;
};

export default NavigateHelper;
