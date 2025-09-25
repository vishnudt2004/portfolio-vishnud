// * Note: Additional UI configurations are defined in /src/styles/config.css

const config = {
  UI: {
    DEFAULT_THEME_MODE: "light",
    THEME_MODE_CLASS_NAME_PREFIX: "theme_mode", // Must match theme variant class names in config.css
    THEME_MODES: [
      {
        category: "Base Modes",
        themes: ["light", "dark", "pitch-black"],
      },
      {
        category: "Clean & Minimal",
        themes: ["minimal-light", "minimal-dark"],
      },
      {
        category: "Soft & Neutral",
        themes: ["paper", "sepia", "minty", "lavender", "aqua-zen", "sunrise"],
      },
      {
        category: "Pastel & Romantic",
        themes: [
          "pastel",
          "cotton-candy",
          "vintage-rose",
          "red-harmony",
          "red-rose",
        ],
      },
      {
        category: "Dev Favorites",
        themes: ["one-dark-pro", "dracula", "postman"],
      },
      {
        category: "Tech & Futuristic",
        themes: ["dark-matter", "forest-essence", "cyber", "synthwave"],
      },
      {
        category: "Aurora Glow",
        themes: ["aurora-light", "aurora-dark"],
      },
    ], // Add or remove themes in src/styles/themes.css
    ACTIVE_THEME_MODES: [
      {
        category: "Base Modes",
        themes: ["light", "dark", "pitch-black"],
      },
    ],
  },
  VISIBLE_SECTIONS: [
    "Hero",
    "About",
    "Proficiency",
    // "Experience",
    "Projects",
    "Achievements",
    "Certifications",
    "Activities",
    // "Testimonials",
    // "ContactForm",
  ], // sections to visible
  //   NAVIGATION_MENUS: [
  //     "About",
  //     "Projects",
  //     "Contact", // Footer: contact links
  //   ],
  FOOTER_QUICK_LINKS: ["about", "proficiency", "projects", "achievements"], // Footer: quick links to sections
  SECTION_IDS: {
    // layouts
    HEADER: "header",
    FOOTER: "footer",

    // sections
    HERO: "hero",
    ABOUT: "about",
    PROFICIENCY: "proficiency",
    EXPERIENCE: "experience",
    PROJECTS: "projects",
    ACHIEVEMENTS: "achievements",
    CERTIFICATIONS: "certifications",
    ACTIVITIES: "activities",
    TESTIMONIALS: "testimonials",
    CONTACT_FORM: "contact-form",
  }, // Unique section IDs for navigation and anchor linking (including layout IDS)
};

const derivedConfig = {
  ACTIVE_THEME_MODES_ARRAY: config.UI.ACTIVE_THEME_MODES.flatMap(
    (group) => group.themes,
  ),
};

export default config;
export { derivedConfig };
