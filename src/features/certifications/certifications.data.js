import vercelIcon from "@/assets/images/icons/vercel.svg";
import hrIcon from "@/assets/images/icons/hackerrank.svg";
import fccIcon from "@/assets/images/icons/fcc.svg";
import slIcon from "@/assets/images/icons/sololearn.svg";
import certificate1 from "@/assets/images/certifications/certificate-1.webp";
import certificate2 from "@/assets/images/certifications/certificate-2.webp";
import certificate3 from "@/assets/images/certifications/certificate-3.webp";
import certificate4_react from "@/assets/images/certifications/certificate-4-react-basic.webp";
import certificate4_js from "@/assets/images/certifications/certificate-4-js-basic.webp";
import certificate4_css from "@/assets/images/certifications/certificate-4-css.webp";
import certificate5 from "@/assets/images/certifications/certificate-5.webp";
import certificate6 from "@/assets/images/certifications/certificate-6.webp";

export const certificates = [
  {
    id: "certificate-1",
    content: {
      title: "Next.js App Router Fundamentals",
      description:
        "Completed the Next.js App Router course by Vercel, covering file-based routing, layouts, nested routes, authentication with NextAuth integration, and TypeScript support. The course included 16 chapters, documented with structured commit messages and a markdown reference table.",
    },
    meta: {
      issuer: "Vercel",
      date: "May 2025",
      logo: { src: vercelIcon, alt: "Vercel Logo" },
    },
    credentials: [
      { label: "View Certificate", href: certificate1 },
      {
        label: "Certificate Link",
        href: "https://nextjs.org/learn/certificate?course=dashboard-app&user=56300&certId=dashboard-app-56300-1747598384094",
      },
      {
        label: "LinkedIn Post",
        href: "https://www.linkedin.com/pulse/how-i-learned-fundamentals-nextjs-app-router-project-based-vishnu-d-ifxdc",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/vishnudt2004/nextjs-dashboard",
      },
    ],
  },

  {
    id: "certificate-2",
    content: {
      title: "Frontend Developer (React)",
      description:
        "Earned the Frontend Developer (React) certificate through a 60-minute assessment of coding challenges and MCQs. Covered React, CSS, and JavaScript — implementing features in React, solving CSS-based questions, and writing required JavaScript functionality. Cleared in a single attempt.",
    },
    meta: {
      issuer: "HackerRank",
      date: "Sep 2025",
      logo: { src: hrIcon, alt: "HackerRank Logo" },
    },
    credentials: [
      { label: "View Certificate", href: certificate2 },
      {
        label: "Certificate Link",
        href: "https://www.hackerrank.com/certificates/7a2fef995346",
      },
    ],
  },

  {
    id: "certificate-3",
    content: {
      title: "Responsive Web Design",
      description:
        "Completed the Responsive Web Design certification by building 5 responsive projects covering semantic HTML, CSS layouts, Flexbox, and media queries. Successfully passed all project tests.",
    },
    meta: {
      issuer: "freeCodeCamp",
      date: "Sep 2025",
      logo: { src: fccIcon, alt: "freeCodeCamp Logo" },
    },
    credentials: [
      { label: "View Certificate", href: certificate3 },
      {
        label: "Certificate Link",
        href: "https://www.freecodecamp.org/certification/vishnu-d-t-2004/responsive-web-design",
      },
    ],
  },

  {
    id: "certificate-4",
    content: {
      title: "HackerRank Basic Certificates",
      description:
        "Earned three basic-level HackerRank certifications in CSS, JavaScript, and React. CSS (20 mins): cascading, inheritance, text formatting, layouts, and box model; JavaScript (1 hr 30 mins): functions, currying, hoisting, scope, inheritance, events, and error handling; React (1 hr 30 mins): routing, rendering, state management, ES6 concepts, and form validation. All certifications were cleared on the first attempt.",
    },
    meta: {
      issuer: "HackerRank",
      date: "Apr 2025",
      logo: { src: hrIcon, alt: "HackerRank Logo" },
    },
    credentials: [
      { label: "CSS (Basic)", href: certificate4_css },
      { label: "JS (Basic)", href: certificate4_js },
      { label: "React (Basic)", href: certificate4_react },
      {
        label: "HackerRank Profile",
        href: "https://www.hackerrank.com/profile/vishnu_d_t_2004",
        primary: true,
      },
    ],
  },

  {
    id: "certificate-5",
    content: {
      title: "Web Development Certificate",
      description:
        "Completed the Web Development certification covering HTML, CSS, and JavaScript fundamentals — semantic structure, forms, media integration, Flexbox, positioning, responsive layouts, DOM manipulation, and core JavaScript concepts. Validated through quizzes and iterative projects.",
    },
    meta: {
      issuer: "Sololearn",
      date: "April 2026",
      logo: { src: slIcon, alt: "Sololearn Logo" },
    },
    credentials: [
      { label: "View Certificate", href: certificate5 },
      {
        label: "Certificate Link",
        href: "https://www.sololearn.com/certificates/CC-JO3MPWNO",
      },
    ],
  },

  {
    id: "certificate-6",
    content: {
      title: "JavaScript Intermediate Certificate",
      description:
        "Completed the JavaScript Intermediate certification covering DOM manipulation, event handling, arrays, and timers. Built interactive browser-based features including dynamic element creation and real-time user interactions. Validated through quizzes and hands-on exercises.",
    },
    meta: {
      issuer: "Sololearn",
      date: "April 2026",
      logo: { src: slIcon, alt: "Sololearn Logo" },
    },
    credentials: [
      { label: "View Certificate", href: certificate6 },
      {
        label: "Certificate Link",
        href: "https://www.sololearn.com/certificates/CC-LHW5VXMS",
      },
      {
        label: "Certificate Link",
        href: "https://www.sololearn.com/certificates/CC-LHW5VXMS",
      },
    ],
  },
];
