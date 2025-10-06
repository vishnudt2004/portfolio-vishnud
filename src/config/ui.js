// Note:
// - Additional UI configurations are defined in /src/styles/config.css
// - Themes must exist in src/styles/themes.css (names without prefix)
// - THEME_CLASSNAME_PREFIX defines the CSS class pattern (e.g. "theme-light", "theme-aurora")

export const UI = {
  DEFAULT_THEME: "light",
  THEME_CLASSNAME_PREFIX: "theme",

  THEMES: [
    {
      category: "Base Modes",
      themes: ["light", "dark", "pitch-black"],
    },
    {
      category: "Soft & Neutral",
      themes: [
        "paper",
        "sepia",
        "minty",
        "lavender",
        "aqua-zen",
        "sunrise",
        "arctic-sky",
      ],
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
      themes: ["dark-matter", "forest-essence", "cyber", "synthwave", "ocean-glow", "aurora"],
    },
  ],
  INITIAL_THEMES: ["light", "dark", "one-dark-pro"],
};
