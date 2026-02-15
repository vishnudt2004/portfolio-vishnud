import { ACTIVE_SECTIONS } from "@/config/constants";

// arr = {id: string}[]
const filterActiveSections = (arr) =>
  !Array.isArray(arr)
    ? arr
    : arr.filter(({ id }) => ACTIVE_SECTIONS.includes(id));

const sectionTitleId = (sectionId) =>
  sectionId ? `${sectionId}-title` : undefined;

export { filterActiveSections, sectionTitleId };
