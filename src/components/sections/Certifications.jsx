import {
  RiCertificateLine,
  RiCertificateFill,
  RiFileCheckFill,
} from "@remixicon/react";

import { IDS } from "@/config/constants";
import { take } from "@/utils/jsUtils";
import {
  SectionBtns,
  SimpleLayout,
} from "@/components/elements/SectionLayouts";
import Card, {
  Br,
  List,
  CardActions,
  CardButton,
} from "@/components/elements/Card";
import LoadMoreGrid from "@/components/elements/LoadMoreGrid";

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
  id,
  title,
  issuer,
  date,
  description,
  credentials,
  logo,
  logoAlt,
}) => (
  <Card
    id={id}
    title={title}
    subtitle={issuer}
    date={date}
    description={description}
    actions={
      <CardActions
        actions={credentials}
        fallbackLabel="View Credential"
        itemId={id}
      >
        {({ key, id, label, ariaLabelledby, href }) => (
          <CardButton
            key={key}
            id={id}
            href={href}
            icon={<RiFileCheckFill aria-hidden className="size-4" />}
            aria-labelledby={ariaLabelledby}
          >
            {label}
          </CardButton>
        )}
      </CardActions>
    }
    logo={logo}
    logoAlt={logoAlt}
    leadingIcon={RiCertificateLine}
    bgOverlay={<RiCertificateFill className="size-[120px] opacity-5" />}
    style={{ "--accent-color": "var(--color-green-500)" }}
  />
);

const CertificationsSection = ({ certificates }) => (
  <SimpleLayout sectionId={IDS.certifications} sectionTitle="Certifications">
    <LoadMoreGrid
      gridId="certifications-grid"
      items={certificates}
      style={{ "--cursor-accent-scoped": "var(--color-green-500)" }}
    >
      {(visibleItems) =>
        visibleItems.map((certificate) => (
          <CertificateItem key={certificate.id} {...certificate} />
        ))
      }
    </LoadMoreGrid>

    <SectionBtns
      primary={{ label: "View all certifications", href: "/certifications" }}
    />
  </SimpleLayout>
);

const certificates = [
  {
    id: "certificate-1",
    title: "Next.js App Router Fundamentals",
    issuer: "Vercel",
    date: "May 2025",
    description: (
      <>
        Completed the <span className="underline">Next.js App Router</span>{" "}
        course by Vercel, covering file-based routing, layouts, nested routes,
        authentication & NextAuth integration, and TypeScript support. The
        course included <span className="underline">16 chapters</span>, all
        documented with clear commit messages and a markdown reference table for
        future use and knowledge sharing.
      </>
    ),
    credentials: [
      { label: "View Certificate", href: certificate1 },
      {
        label: "Certificate Link",
        href: "https://nextjs.org/learn/certificate?course=dashboard-app&user=56300&certId=dashboard-app-56300-1747598384094",
      },
      {
        label: "Related LinkedIn Post",
        href: "https://www.linkedin.com/pulse/how-i-learned-fundamentals-nextjs-app-router-project-based-vishnu-d-ifxdc",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/vishnudt2004/nextjs-dashboard",
      },
    ],
    logo: vercelIcon,
    logoAlt: "Vercel Logo",
  },

  {
    id: "certificate-2",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "Sep 2025",
    description: (
      <>
        Earned the <span className="underline">Frontend Developer (React)</span>{" "}
        certificate through a 60-minute assessment of coding challenges and
        MCQs. Covered{" "}
        <span className="underline">React, CSS, and JavaScript</span>, including
        implementing features in React, solving CSS-based questions, and writing
        required JavaScript functionality. Cleared in a single attempt.
      </>
    ),
    credentials: [
      { label: "View Certificate", href: certificate2 },
      {
        label: "Certificate Link",
        href: "https://www.hackerrank.com/certificates/7a2fef995346",
      },
    ],
    logo: hrIcon,
    logoAlt: "HackerRank Logo",
  },

  {
    id: "certificate-3",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Sep 2025",
    description: (
      <>
        Completed the <span className="underline">Responsive Web Design</span>{" "}
        certification by building{" "}
        <span className="underline">5 responsive projects</span>, covering
        semantic HTML, CSS layouts, Flexbox, and media queries. Successfully
        passed all project tests, validating core modern web design principles.
      </>
    ),
    credentials: [
      { label: "View Certificate", href: certificate4 },
      {
        label: "Certificate Link",
        href: "https://www.freecodecamp.org/certification/vishnu-d-t-2004/responsive-web-design",
      },
    ],
    logo: fccIcon,
    logoAlt: "freeCodeCamp Logo",
  },

  {
    id: "certificate-4",
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
              <b>JavaScript (1 hr 30 mins):</b> Focused on functions, currying,
              hoisting, scope, inheritance, events, and error handling
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
      { label: "CSS (Basic)", href: certificate3_css },
      { label: "JS (Basic)", href: certificate3_js },
      { label: "React (Basic)", href: certificate3_react },
      {
        label: "Certificates Link",
        href: "https://www.hackerrank.com/profile/vishnu_d_t_2004",
      },
    ],
    logo: hrIcon,
    logoAlt: "HackerRank Logo",
  },
];

const CertificationsView = ({ all }) => {
  const FEATURED_COUNT = 3;

  return (
    <CertificationsSection
      certificates={all ? certificates : take(certificates, FEATURED_COUNT)}
    />
  );
};

export default CertificationsView;
