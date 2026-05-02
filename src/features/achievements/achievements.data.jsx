import { Br, List } from "@/components/ui/Card";

import achievement1 from "@/assets/images/achievements/achievement-1.webp";
import achievement3 from "@/assets/images/achievements/achievement-3.webp";
import achievement4 from "@/assets/images/achievements/achievement-4.webp";
import achievement5 from "@/assets/images/achievements/achievement-5.webp";

// eslint-disable-next-line react-refresh/only-export-components
const Hl = (props) => (
  <span className="highlight-primary rounded-md px-1.25 leading-4" {...props} />
); // Highlight

export const achievements = [
  {
    id: "achievement-1",
    title: "1st Place – Web Development Contest #1",
    event: "CS Department Function",
    location: "Govt. Arts & Science College – Komarapalayam",
    date: "Jan 2026",
    description: (
      <>
        <List
          items={[
            <>
              Cleared a technical MCQ round (20/20) and built a two-page
              e-commerce website (landing + products page) in 40 minutes using
              HTML, CSS, and Tailwind CSS based on a single provided topic
            </>,
            <>
              Secured <Hl>1st place</Hl> as a solo participant and won a{" "}
              <Hl>certificate</Hl> and a <Hl>book</Hl>
            </>,
          ]}
        />
        <Br />
        <span className="italic">Theme: E-commerce</span>
      </>
    ),
    credentials: [{ href: achievement1 }],
  },

  {
    id: "achievement-2",
    title: "Open Source – Simple UI Components",
    event: "Open Source, NPM",
    date: "Sep 2025",
    description: (
      <>
        Built <Hl>SUIC</Hl>, an open-source, local-first collection of reusable
        UI and frontend utility components. Published with an <Hl>NPM CLI</Hl>{" "}
        (npx suic-cli) for installing editable source code with documentation
        support.
      </>
    ),
    credentials: [{ href: "https://npmjs.com/package/suic-cli/" }],
  },

  {
    id: "achievement-3",
    title: "1st Place – Web Development Contest #2",
    event: "Mirror 2K25, Intercollegiate Event",
    location: "Erode Arts and Science College, Erode",
    date: "Oct 2025",
    description: (
      <>
        <List
          items={[
            <>
              Cleared a technical MCQ round and Built a webpage in 1 hour using{" "}
              <span className="underline">HTML, CSS, and JavaScript</span>{" "}
              (images-only internet)
            </>,
            <>Topic assigned by draw; worked as a 2-member team</>,
            <>
              Secured <Hl>1st place</Hl> among multiple teams; won{" "}
              <Hl>₹1000</Hl> and a medal
            </>,
          ]}
        />
        <Br />
        <span className="italic">Topic: Digital Literacy for All</span>
      </>
    ),
    credentials: [{ href: achievement3 }],
  },

  {
    id: "achievement-4",
    title: "1st Place – Web Development Contest #3",
    event: "Mirror 2K24, Intercollegiate Event",
    location: "Erode Arts and Science College, Erode",
    date: "Oct 2024",
    description: (
      <>
        <List
          items={[
            <>
              Cleared a technical MCQ round and Built a webpage in 45 minutes
              using provided images only (no internet)
            </>,
            <>
              Selected one of two image sets; developed using{" "}
              <span className="underline">HTML, CSS, and JavaScript</span> as a
              2-member team
            </>,
            <>
              Secured <Hl>1st place</Hl> among multiple teams; won{" "}
              <Hl>₹1000</Hl> and a medal
            </>,
          ]}
        />
        <Br />
        <span className="italic">Theme: Green Nature (Organization)</span>
      </>
    ),
    credentials: [{ href: achievement4 }],
  },

  {
    id: "achievement-5",
    title: "1st Place – Logo Design Competition",
    event: "CS Department Function",
    location: "Govt. Arts & Science College – Komarapalayam",
    date: "May 2022",
    description: (
      <>
        Won 1st place in a logo design competition conducted by the CS
        Department during the 75th Independence Day Celebration (2022). Awarded
        a commemorative <Hl>book</Hl> as the prize.
      </>
    ),
    credentials: [{ href: achievement5 }],
  },
];
