import { DocumentCheckIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

import config from "@/config";
import { SimpleLayout } from "@/components/elements/SectionLayouts";
import ShowcaseItem, {
  ShowcaseItemBtn,
} from "@/components/elements/ShowcaseItem";
import ShowMoreData from "@/components/elements/ShowMoreData";

import vercelIcon from "@/assets/images/icons/vercel.svg";
import hrIcon from "@/assets/images/icons/hackerrank.svg";
import fccIcon from "@/assets/images/icons/fcc.svg";
import certificate1 from "@/assets/images/certifications-certificates/certificate-1.webp";
import certificate2 from "@/assets/images/certifications-certificates/certificate-2.webp";
import certificate3_react from "@/assets/images/certifications-certificates/certificate-3/react_basic-certificate.webp";
import certificate3_js from "@/assets/images/certifications-certificates/certificate-3/javascript_basic-certificate.webp";
import certificate3_css from "@/assets/images/certifications-certificates/certificate-3/css-certificate.webp";
import certificate4 from "@/assets/images/certifications-certificates/certificate-4.png";

const CertificateItem = ({
  title,
  issuer,
  date,
  description,
  credentials,
  logo,
}) => (
  <ShowcaseItem
    title={title}
    subtitle={issuer}
    date={date}
    description={description}
    credentials={
      credentials &&
      (Array.isArray(credentials) ? (
        <div className="mt-auto flex flex-wrap gap-2">
          {credentials.map(({ name, credential }) => (
            <ShowcaseItemBtn
              key={name}
              href={credential}
              icon={<DocumentCheckIcon className="size-4" />}
            >
              {name}
            </ShowcaseItemBtn>
          ))}
        </div>
      ) : (
        <ShowcaseItemBtn
          href={credentials}
          icon={<DocumentCheckIcon className="size-4" />}
        >
          View Credential
        </ShowcaseItemBtn>
      ))
    }
    logo={logo}
    defaultLogo={CheckBadgeIcon}
    bgOverlay={<DocumentCheckIcon className="w-[120px] opacity-5" />}
    style={{ "--accent-color": "var(--color-green-500)" }}
  />
);

const CertificationsSection = ({ certificates }) => (
  <SimpleLayout
    id={config.SECTION_IDS.CERTIFICATIONS}
    sectionTitle="Certifications"
  >
    <ShowMoreData items={certificates}>
      {(visibleItems) =>
        visibleItems.map((certificate, ind) => (
          <CertificateItem key={ind} {...certificate} />
        ))
      }
    </ShowMoreData>
  </SimpleLayout>
);

const CertificationsView = () => {
  const certificates = [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Sep 2025",
      description: (
        <>
          Completed the <span className="underline">Responsive Web Design</span>{" "}
          certification by building{" "}
          <span className="underline">5 responsive projects</span>, each testing
          my understanding of semantic HTML, CSS layout, Flexbox, and media
          queries. Passing all project tests earned me the certification and
          validated my grasp of the core principles of modern web design.
        </>
      ),
      credentials: [
        { name: "View Certificate", credential: certificate4 },
        {
          name: "Certificate Link",
          credential:
            "https://www.freecodecamp.org/certification/vishnu-d-t-2004/responsive-web-design",
        },
      ],
      logo: fccIcon,
    },
    {
      title: "Frontend Developer (React)",
      issuer: "HackerRank",
      date: "Sep 2025",
      description: (
        <>
          Earned the{" "}
          <span className="underline">Frontend Developer (React)</span>{" "}
          certificate through a 60-minute test consisting of coding challenges
          and multiple-choice questions. The assessment covered{" "}
          <span className="underline">React, CSS, and JavaScript</span> —
          including implementing features in React, answering CSS-based MCQs,
          and writing required functionality in JavaScript. Cleared in a single
          attempt.
        </>
      ),
      credentials: [
        { name: "View Certificate", credential: certificate2 },
        {
          name: "Certificate Link",
          credential: "https://www.hackerrank.com/certificates/7a2fef995346",
        },
      ],
      logo: hrIcon,
    },
    {
      title: "Next.js App Router Fundamentals",
      issuer: "Vercel",
      date: "May 2025",
      description: (
        <>
          Completed the <span className="underline">Next.js App Router</span>{" "}
          course by Vercel, covering essential concepts such as file-based
          routing, layouts, nested routes, NextAuth integration, and TypeScript
          support. The course included{" "}
          <span className="underline">16 chapters</span>, and I documented each
          one thoroughly with commit messages and a markdown table for future
          reference and to help others.
        </>
      ),
      credentials: [
        { name: "View Certificate", credential: certificate1 },
        {
          name: "Certificate Link",
          credential:
            "https://nextjs.org/learn/certificate?course=dashboard-app&user=56300&certId=dashboard-app-56300-1747598384094",
        },
        {
          name: "Related LinkedIn Post",
          credential:
            "https://www.linkedin.com/pulse/how-i-learned-fundamentals-nextjs-app-router-project-based-vishnu-d-ifxdc",
        },
        {
          name: "GitHub Repo",
          credential: "https://github.com/vishnudt2004/nextjs-dashboard",
        },
      ],
      logo: vercelIcon,
    },
    {
      title: "HackerRank Basic Certificates",
      issuer: "HackerRank",
      date: "Apr 2025",
      description: (
        <>
          Achieved three distinct basic-level certificates in{" "}
          <span className="underline">CSS, JavaScript, and React</span> from
          HackerRank. <b>CSS (20 mins):</b> Covered cascading & inheritance,
          text styling, layouts, and box model fundamentals;{" "}
          <b>JavaScript (1 hr 30 mins):</b> Included functions, currying,
          hoisting, scope, inheritance, events, and error handling;{" "}
          <b>React (1 hr 30 mins):</b> Focused on basic routing, rendering
          elements, state management, handling events, ES6 concepts, and form
          validation. All cleared on the first attempt.
        </>
      ),
      credentials: [
        { name: "CSS (Basic)", credential: certificate3_css },
        { name: "JS (Basic)", credential: certificate3_js },
        { name: "React (Basic)", credential: certificate3_react },
        {
          name: "Certificates Link",
          credential: "https://www.hackerrank.com/profile/vishnu_d_t_2004",
        },
      ],
      logo: hrIcon,
    },
  ];

  return <CertificationsSection certificates={certificates} />;
};

export default CertificationsView;
