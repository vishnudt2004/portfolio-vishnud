# Changelog

All notable changes to this project will be documented in this file.

## [1.0.2] - 2025-04-18

### Changed

- (Apr 18) Updated links

  - About: Resume link updated
  - Footer: LinkedIn link updated

- (Apr 17) Updated links

  - About: Resume link updated
  - Projects: Project links updated (repo, demo, live)

- (Apr 15) Improved UI responsiveness and structure across all sections

  - Header: Dropdown box now adapts to current theme modes, and text size is adjusted for a better look (`Header`).
  - Hero: Adjusted welcome text size, `ScrollDownButton` size, and background shape sizes for small screens. `HeroHighlighter` restructured to be customizable
  - Proficiency: Tweaked skill box sizes and tech stack icon scaling for small screens
  - Achievements: Unified secondary scrollbar style (same as `ProjectCard`) for all pointer types.
  - Anchor: Added hover effect, title for the default icon
  - Proficiency, About: Resized `Anchor` links for small screens
  - config.js: Simplified themes. The _Clean & Minimal_ category is now disabled

## [1.0.1] - 2025-04-12

### Changed

- Improved UI responsiveness and structure across sections
  - Hero: Added 500ms delay to `scrollDownButton` (for better hover visibility on touch devices)
  - About, Proficiency: Adjusted text sizes for small screens
  - About: Resized profile image for mobile view
  - Proficiency: Added margin-bottom to `Highlight` in the 'Tech Stack' part
  - Added demo link and corresponding icon for links prop in `ProjectCard`
  - Footer: Added contact phone number (commented out); reordered and updated Quick Links
  - Achievements: Extracted logic to a new component: `AchievementsCreator`
  - Achievements, Activities, Experience, and Testimonials: Section titles updated
  - About, Projects: Added development annotations for items to be addressed later

## [1.0.0] - 2025-04-11

### Initial Release

- Full portfolio developed and uploaded
- Sections included: Hero, About, Proficiency, Projects, Achievements, Footer
- Built with Vite + React
