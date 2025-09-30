import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for a 'coarse' pointer, which indicates a touch device
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        return window.matchMedia("(pointer: coarse)").matches;
      }
      return false;
    };

    setIsMobile(checkMobile());

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
