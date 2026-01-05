import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for a 'coarse' pointer, which indicates a touch device
    const check = () => {
      if (typeof window === "undefined") return false;
      return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    };

    setIsMobile(check());

    const handleResize = () => setIsMobile(check());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
