import { useMediaQuery } from "@uidotdev/usehooks";

export const useIsTouchDevice = () =>
  useMediaQuery("(hover: none) and (pointer: coarse)");
