import { useMedia } from "react-use";

export const useIsTouchDevice = () =>
  useMedia("(hover: none) and (pointer: coarse)");
