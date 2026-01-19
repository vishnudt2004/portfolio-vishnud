export const LAYOUTS = [
  { name: "Header", id: "header" },
  { name: "Footer", id: "footer" },
];

export const SECTIONS = [
  { name: "Hero", id: "hero", enabled: true },
  { name: "About", id: "about", enabled: true },
  { name: "Proficiencies", id: "proficiencies", enabled: true },
  {
    name: "Experience",
    id: "experience",
    enabled: false,
    note: "reserved for future",
  },
  { name: "Projects", id: "projects", enabled: true },
  { name: "Achievements", id: "achievements", enabled: true },
  { name: "Certifications", id: "certifications", enabled: true },
  { name: "Activities", id: "activities", enabled: true },
  {
    name: "Testimonials",
    id: "testimonials",
    enabled: false,
    note: "reserved for future",
  },
  {
    name: "ContactForm",
    id: "contact-form",
    enabled: false,
    note: "reserved for future",
  },
];

export const ACTIVE_SECTIONS = SECTIONS.filter((s) => s.enabled);

export const IDS_MAP = {
  ...Object.fromEntries(
    LAYOUTS.map(({ name, id }) => [name.toUpperCase(), id]),
  ),
  ...Object.fromEntries(
    SECTIONS.map(({ name, id }) => [name.toUpperCase(), id]),
  ),
};
