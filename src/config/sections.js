export const LAYOUTS = [
  { name: "Header", id: "header" },
  { name: "Footer", id: "footer" },
];

export const SECTIONS = [
  { name: "Hero", id: "hero", enabled: true },
  { name: "About", id: "about", enabled: true },
  { name: "Proficiencies", id: "proficiencies", enabled: true },
  { name: "Experience", id: "experience", enabled: false, note: "reserved for future" },
  { name: "Projects", id: "projects", enabled: true },
  { name: "Achievements", id: "achievements", enabled: true },
  { name: "Certifications", id: "certifications", enabled: true },
  { name: "Activities", id: "activities", enabled: true },
  { name: "Testimonials", id: "testimonials", enabled: false, note: "reserved for future" },
  { name: "ContactForm", id: "contact-form", enabled: false, note: "reserved for future" },
];

export const ENABLED_SECTIONS = SECTIONS.filter((s) => s.enabled).map(
  (s) => s.name
);

export const FOOTER_QUICK_LINKS = SECTIONS.filter(
  (s) => s.enabled && s.id !== "hero"
).map((s) => ({ id: s.id, name: s.name }));

export const LAYOUT_IDS = LAYOUTS.reduce((acc, { name, id }) => {
  acc[name.toUpperCase()] = id;
  return acc;
}, {});

export const SECTION_IDS = SECTIONS.reduce((acc, { name, id }) => {
  acc[name.toUpperCase()] = id;
  return acc;
}, {});
