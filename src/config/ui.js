// Note:
// - Additional UI configurations are defined in /src/styles/config.css
// - Themes must exist in src/styles/themes.css (names without prefix)
// - THEME_CLASSNAME_PREFIX defines the CSS class pattern (e.g. "theme-light", "theme-aurora")

const DISABLED_THEMES = [
  { category: "Core", themes: ["pitch-black"] },
  { category: "Soft Tones", themes: ["minty", "aqua-zen", "sunrise"] },
  {
    category: "Warm & Pastel",
    themes: ["pastel", "crimson-bloom"],
  },
  { category: "Developer", themes: ["postman"] },
  { category: "Neon & Futuristic", themes: ["dark-matter", "forest-essence"] },
];

export const UI = {
  DEFAULT_THEME: "light",
  THEME_CLASSNAME_PREFIX: "theme",

  THEMES: [
    {
      category: "Core",
      themes: ["light", "dark"],
    },
    {
      category: "Soft Tones",
      themes: ["lavender"],
    },
    {
      category: "Developer",
      themes: ["one-dark-pro", "dracula", "nord"],
    },
    {
      category: "Neon & Futuristic",
      themes: ["cyber", "synthwave", "ocean-glow", "aurora"],
    },
  ],
  FEATURED_THEMES: ["light", "dark", "one-dark-pro"],
};
