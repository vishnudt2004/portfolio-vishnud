import achievement1 from "@/assets/images/achievements/achievement-1.webp";
import achievement3 from "@/assets/images/achievements/achievement-3.webp";
import achievement4 from "@/assets/images/achievements/achievement-4.webp";
import achievement5 from "@/assets/images/achievements/achievement-5.webp";

export const achievements = [
  {
    id: "achievement-1",
    content: {
      title: "1st Place – Web Development Contest #1",
      description:
        "Cleared a technical MCQ round and built a two-page e-commerce website (landing + products page) in 40 minutes using HTML, CSS, and Tailwind CSS based on a single assigned theme. Secured 1st place as a solo participant and received a certificate and a book. Theme: E-commerce.",
    },
    meta: {
      event: "CS Department Function",
      location: "Govt. Arts & Science College – Komarapalayam",
      date: "Jan 2026",
    },
    credentials: [{ href: achievement1 }],
  },

  {
    id: "achievement-2",
    content: {
      title: "Open Source – Simple UI Components",
      description:
        "Built SUIC, a foundational open-source CLI system for installing reusable UI components as editable source code via NPM (npx suic-cli), designed for local-first customization and documentation-driven integration.",
    },
    meta: {
      event: "Open Source, NPM",
      date: "Sep 2025",
    },
    credentials: [{ href: "https://npmjs.com/package/suic-cli/" }],
  },

  {
    id: "achievement-3",
    content: {
      title: "1st Place – Web Development Contest #2",
      description:
        "Cleared a technical MCQ round and built a webpage in 1 hour using HTML, CSS, and JavaScript with images-only internet access. Topic was assigned by draw; worked as a 2-member team. Secured 1st place among multiple teams and won ₹1000 and a medal. Topic: Digital Literacy for All.",
    },
    meta: {
      event: "Mirror 2K25, Intercollegiate Event",
      location: "Erode Arts and Science College, Erode",
      date: "Oct 2025",
    },
    credentials: [{ href: achievement3 }],
  },

  {
    id: "achievement-4",
    content: {
      title: "1st Place – Web Development Contest #3",
      description:
        "Cleared a technical MCQ round and built a webpage in 45 minutes using only provided images with no internet access. Selected one of two image sets and developed the project using HTML, CSS, and JavaScript as a 2-member team. Secured 1st place among multiple teams and won ₹1000 and a medal. Theme: Green Nature (Organization).",
    },
    meta: {
      event: "Mirror 2K24, Intercollegiate Event",
      location: "Erode Arts and Science College, Erode",
      date: "Oct 2024",
    },
    credentials: [{ href: achievement4 }],
  },

  {
    id: "achievement-5",
    content: {
      title: "1st Place – Logo Design Competition",
      description:
        "Secured 1st place in a logo design competition organized by the CS Department as part of the 75th Independence Day celebrations. Awarded a commemorative book as the prize.",
    },
    meta: {
      event: "CS Department Function",
      location: "Govt. Arts & Science College – Komarapalayam",
      date: "May 2022",
    },
    credentials: [{ href: achievement5 }],
  },
];
