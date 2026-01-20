import { DocumentCheckIcon } from "@heroicons/react/24/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

import config from "@/config";
import { SimpleLayout } from "@/components/elements/SectionLayouts";
import ShowcaseItem, {
  Br,
  List,
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
import certificate4 from "@/assets/images/certifications-certificates/certificate-4.webp";

const CertificateItem = ({
  title,
  issuer,
  date,
  description,
  credentials,
  logo,
  logoAlt,
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
              icon={<DocumentCheckIcon aria-hidden className="size-4" />}
              aria-label="View Certification Credential"
            >
              {name}
            </ShowcaseItemBtn>
          ))}
        </div>
      ) : (
        <ShowcaseItemBtn
          href={credentials}
          icon={<DocumentCheckIcon aria-hidden className="size-4" />}
          aria-label="View Certification Credential"
        >
          View Credential
        </ShowcaseItemBtn>
      ))
    }
    logo={logo}
    logoAlt={logoAlt}
    leadingIcon={CheckBadgeIcon}
    bgOverlay={<DocumentCheckIcon className="w-[120px] opacity-5" />}
    style={{ "--accent-color": "var(--color-green-500)" }}
  />
);

const CertificationsSection = ({ certificates }) => (
  <SimpleLayout
    sectionId={config.IDS_MAP.CERTIFICATIONS}
    sectionTitle="Certifications"
  >
    <ShowMoreData
      gridId="certifications-grid"
      items={certificates}
      style={{ "--cursor-accent-scoped": "var(--color-green-500)" }}
    >
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
          <span className="underline">5 responsive projects</span>, covering
          semantic HTML, CSS layouts, Flexbox, and media queries. Successfully
          passed all project tests, validating core modern web design
          principles.
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
      logoAlt: "freeCodeCamp Logo",
    },

    {
      title: "Frontend Developer (React)",
      issuer: "HackerRank",
      date: "Sep 2025",
      description: (
        <>
          Earned the{" "}
          <span className="underline">Frontend Developer (React)</span>{" "}
          certificate through a 60-minute assessment of coding challenges and
          MCQs. Covered{" "}
          <span className="underline">React, CSS, and JavaScript</span>,
          including implementing features in React, solving CSS-based questions,
          and writing required JavaScript functionality. Cleared in a single
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
      logoAlt: "HackerRank Logo",
    },

    {
      title: "Next.js App Router Fundamentals",
      issuer: "Vercel",
      date: "May 2025",
      description: (
        <>
          Completed the <span className="underline">Next.js App Router</span>{" "}
          course by Vercel, covering file-based routing, layouts, nested routes,
          authentication & NextAuth integration, and TypeScript support. The
          course included <span className="underline">16 chapters</span>, all
          documented with clear commit messages and a markdown reference table
          for future use and knowledge sharing.
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
      logoAlt: "Vercel Logo",
    },

    {
      title: "HackerRank Basic Certificates",
      issuer: "HackerRank",
      date: "Apr 2025",
      description: (
        <>
          Earned three basic-level certificates in{" "}
          <span className="underline">CSS, JavaScript, and React</span> from
          HackerRank.
          <Br />
          <List
            items={[
              <>
                <b>CSS (20 mins):</b> Covered cascading, inheritance, text
                formatting, layouts, and box model fundamentals
              </>,
              <>
                <b>JavaScript (1 hr 30 mins):</b> Focused on functions,
                currying, hoisting, scope, inheritance, events, and error
                handling
              </>,
              <>
                <b>React (1 hr 30 mins):</b> Covered routing basics, rendering,
                state management, ES6 concepts, and form validation
              </>,
            ]}
          />
          <Br />
          All cleared on the first attempt.
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
      logoAlt: "HackerRank Logo",
    },
  ];

  return <CertificationsSection certificates={certificates} />;
};

export default CertificationsView;
