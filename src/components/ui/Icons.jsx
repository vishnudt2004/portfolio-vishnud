// Icon source: https://www.svgrepo.com/
// SVG Optimizer: https://jakearchibald.github.io/svgomg/ (cause id issues)
// HTML to JSX conversion: https://www.svgviewer.dev/svg-to-react-jsx, https://magic.reactjs.net/htmltojsx.htm

const LinkedinIcon = (attr) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    style={{ "--color-1": "#0077b5", "--color-2": "#fff" }}
    {...attr}
  >
    <circle cx={24} cy={24} r={20} fill="var(--color-1)" />
    <path
      fill="var(--color-2)"
      fillRule="evenodd"
      d="M18.775 14.284c0 1.245-.948 2.253-2.43 2.253-1.426 0-2.374-1.008-2.344-2.253-.03-1.306.918-2.284 2.372-2.284s2.373.978 2.402 2.284M14.12 32.819V18.316h4.507v14.502zM22.24 22.945c0-1.81-.06-3.352-.12-4.627h3.915l.208 1.987h.09c.592-.92 2.075-2.312 4.477-2.312 2.965 0 5.19 1.957 5.19 6.226v8.602h-4.508v-8.037c0-1.87-.652-3.144-2.283-3.144-1.246 0-1.987.86-2.283 1.69-.119.297-.178.711-.178 1.127v8.364h-4.507v-9.876z"
      clipRule="evenodd"
    />
  </svg>
);

const VSCodeIcon = (attr) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...attr}
  >
    <path
      fill="url(#a0~)"
      d="M21.002 3.117c0-.88-.985-.88-1.422-.77.612-.483 1.33-.366 1.586-.219l5.913 2.9c.563.276.92.85.92 1.48v19.075c0 .639-.366 1.22-.941 1.491l-5.564 2.631c-.383.165-1.214.572-1.914 0 .875.165 1.349-.457 1.422-.879z"
    />
    <path
      fill="url(#b0~)"
      d="M19.651 2.332c.464-.092 1.35-.05 1.35.785v6.566L3.075 23.245a.763.763 0 0 1-1.022-.09l-1.847-2a.77.77 0 0 1 .045-1.092L19.58 2.348z"
    />
    <path
      fill="url(#c0~)"
      d="M21.002 22.37 3.074 8.809a.763.763 0 0 0-1.022.091l-1.847 2A.77.77 0 0 0 .25 11.99l19.33 17.716c.875.164 1.349-.458 1.422-.88z"
    />
    <defs>
      <linearGradient
        id="a0~"
        x1={23.79}
        x2={23.79}
        y1={2}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32b5f1" />
        <stop offset={1} stopColor="#2b9fed" />
      </linearGradient>
      <linearGradient
        id="b0~"
        x1={21.002}
        x2={1.022}
        y1={5.534}
        y2={22.305}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0f6fb3" />
        <stop offset={0.271} stopColor="#1279b7" />
        <stop offset={0.421} stopColor="#1176b5" />
        <stop offset={0.618} stopColor="#0e69ac" />
        <stop offset={0.855} stopColor="#0f70af" />
        <stop offset={1} stopColor="#0f6dad" />
      </linearGradient>
      <linearGradient
        id="c0~"
        x1={1.155}
        x2={21.079}
        y1={9.984}
        y2={26.481}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1791d2" />
        <stop offset={1} stopColor="#1173c5" />
      </linearGradient>
    </defs>
  </svg>
);

const NextAuthSmIcon = (attr) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...attr}
  >
    <path
      fill="#d9d9d9"
      d="M3.719 3.93c1.909-.563 4.737-1.406 5.93-1.762.368-.11.759-.11 1.128-.003 1.149.337 3.821 1.123 5.888 1.758a.98.98 0 0 1 .693.96c-.24 10.104-5.338 12.528-6.774 13.01a1.16 1.16 0 0 1-.746.002c-1.442-.481-6.584-2.9-6.829-12.998a.99.99 0 0 1 .71-.967"
    />
    <mask
      id="a1~"
      width={15}
      height={16}
      x={3}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#d9d9d9"
        d="M3.719 3.93c1.909-.563 4.737-1.406 5.93-1.762.368-.11.759-.11 1.128-.003 1.149.337 3.821 1.123 5.888 1.758a.98.98 0 0 1 .693.96c-.24 10.104-5.338 12.528-6.774 13.01a1.16 1.16 0 0 1-.746.002c-1.442-.481-6.584-2.9-6.829-12.998a.99.99 0 0 1 .71-.967"
      />
    </mask>
    <g mask="url(#a1~)">
      <path fill="url(#b1~)" d="M10.211 9.775 10.1 1.718l7.718 2.085z" />
      <path
        fill="url(#c1~)"
        d="M10.211 9.775V2l-7.38 1.972L1.817 8.76l3.211 5.014z"
      />
      <path fill="url(#d1~)" d="M17.592 3.972 4.915 13.775v4.45h12.508z" />
    </g>
    <defs>
      <linearGradient
        id="b1~"
        x1={10.211}
        x2={15.62}
        y1={2}
        y2={5.549}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#19aae8" />
        <stop offset={1} stopColor="#1ea5f1" />
      </linearGradient>
      <linearGradient
        id="c1~"
        x1={3.056}
        x2={10.211}
        y1={4.141}
        y2={9.662}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2be2b8" />
        <stop offset={1} stopColor="#19b9e3" />
      </linearGradient>
      <linearGradient
        id="d1~"
        x1={17.31}
        x2={7.958}
        y1={4.028}
        y2={16.986}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#925cdf" />
        <stop offset={1} stopColor="#cc42e5" />
      </linearGradient>
    </defs>
  </svg>
);

const MotionIcon = (attr) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...attr}
  >
    <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
    <path d="M20 12l-8 8l-4 -4"></path>
  </svg>
);

const DownCircleIcon = (attr) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="-0.5 0 25 25"
    style={{ "--color": "#000" }}
    {...attr}
  >
    <g
      stroke="var(--color)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M12 22.42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10" />
      <path d="m16 10.99-2.87 3.06a1.54 1.54 0 0 1-2.26 0L8 10.99" />
    </g>
  </svg>
);

const DuotoneComputerIcon = (attr) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    style={{
      "--color-1": "#1C1C1C",
      "--color-2": "#DF1463",
    }}
    {...attr}
  >
    <g strokeWidth={1.4}>
      <path
        stroke="var(--color-1)"
        d="M2.844 13V7.507a3.66 3.66 0 0 1 3.663-3.663h10.987a3.66 3.66 0 0 1 3.662 3.663V13a3.66 3.66 0 0 1-3.662 3.662H6.507A3.66 3.66 0 0 1 2.844 13Z"
      />
      <path
        stroke="var(--color-2)"
        strokeLinecap="round"
        d="M6.04 20.325h11.92"
      />
    </g>
  </svg>
);

const DuotoneLightbulbIcon = (attr) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    style={{
      "--color-1": "#1C1C1C",
      "--color-2": "#DF1463",
    }}
    {...attr}
  >
    <mask id="a2~" fill="#fff">
      <path
        fillRule="evenodd"
        d="M16.143 16.352a8.762 8.762 0 1 0-8.762 0v1.902c0 1.21.98 2.19 2.19 2.19h4.381c1.21 0 2.19-.98 2.19-2.19z"
        clipRule="evenodd"
      />
    </mask>
    <path
      fill="var(--color-1)"
      d="m16.143 16.352-.701-1.212-.7.404v.808zm-8.762 0h1.4v-.808l-.699-.404zm11.743-7.59a7.36 7.36 0 0 1-3.682 6.378l1.402 2.424a10.16 10.16 0 0 0 5.08-8.802zM11.762 1.4a7.36 7.36 0 0 1 7.362 7.362h2.8c0-5.612-4.55-10.162-10.162-10.162zM4.4 8.762A7.36 7.36 0 0 1 11.762 1.4v-2.8C6.15-1.4 1.6 3.15 1.6 8.762zm3.682 6.378A7.36 7.36 0 0 1 4.4 8.762H1.6c0 3.763 2.046 7.047 5.08 8.802zm.699 3.114v-1.902h-2.8v1.902zm.79.79a.79.79 0 0 1-.79-.79h-2.8a3.59 3.59 0 0 0 3.59 3.59zm4.381 0h-4.38v2.8h4.38zm.79-.79a.79.79 0 0 1-.79.79v2.8a3.59 3.59 0 0 0 3.59-3.59zm0-1.902v1.902h2.8v-1.902z"
      mask="url(#a2~)"
    />
    <path
      stroke="var(--color-2)"
      strokeLinecap="round"
      strokeWidth={1.4}
      d="M8.476 23h6.571"
    />
    <path
      stroke="var(--color-1)"
      strokeLinecap="round"
      strokeWidth={1.4}
      d="M13 3c1.333.333 4 1.8 4 5"
    />
  </svg>
);

const DuotonePluginIcon = (attr) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    style={{
      "--color-1": "#1C1C1C",
      "--color-2": "#DF1463",
    }}
    {...attr}
  >
    <g strokeLinecap="round" strokeWidth={1.552} clipPath="url(#a3~)">
      <path
        stroke="var(--color-1)"
        d="m17.634 11.565-5.395 5.395 3.112 3.112a3.814 3.814 0 1 0 5.395-5.395zM6.81 11.204l5.394-5.395-3.112-3.112a3.814 3.814 0 1 0-5.395 5.394z"
      />
      <path
        stroke="var(--color-2)"
        d="m13.19 15.422-1.95-1.952M16.095 12.517l-1.951-1.952"
      />
      <path
        stroke="var(--color-1)"
        d="m20.746 20.072 1.244 1.245M3.697 2.697 2.452 1.452M11.41 17.79l7.054-7.055M13.033 4.98 5.98 12.033"
      />
    </g>
    <defs>
      <clipPath id="a3~">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

const HandIcon = (attr) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...attr}>
    <path d="M31 8.5s-2.53 5.333-3.215 8.062c-.896 3.57.13 6.268-1.172 9.73C24.363 30.352 24.211 31.009 16 31c-3.009-.003-11.626-2.297-11.626-2.297-1.188-.305-3.373-.125-3.373-1.453s1.554-2.296 2.936-2.3l5.439.478c1.322-.083 2.705-.856 2.747-2.585-.022-2.558-.275-4.522-1.573-6.6L5.508 8.376c-.301-.626-.373-1.694.499-2.171s1.862.232 2.2.849l5.631 7.66c.602.559 1.671.667 1.58-.524L12.931 2.789c-.155-.81.256-1.791 1.194-1.791 1.231 0 1.987.47 1.963 1.213l2.734 11.249c.214.547.972.475 1.176-.031l.779-10.939c.04-.349.495-.957 1.369-.831s1.377 1.063 1.285 1.424l-.253 10.809c.177.958.93 1.098 1.517.563l3.827-6.843c.232-.574 1.143-.693 1.67-.466.491.32.81.748.81 1.351z" />
  </svg>
);

const FullscreenEnterIcon = (attr) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{ "--color": "#000" }}
    {...attr}
  >
    <title>fullscreen_line</title>
    <g fill="none" fillRule="nonzero">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
      <path
        fill="var(--color)"
        d="M4 15a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2H5a2 2 0 0 1-2-2v-3a1 1 0 0 1 1-1m16 0a1 1 0 0 1 .993.883L21 16v3a2 2 0 0 1-1.85 1.995L19 21h-3a1 1 0 0 1-.117-1.993L16 19h3v-3a1 1 0 0 1 1-1M19 3a2 2 0 0 1 1.995 1.85L21 5v3a1 1 0 0 1-1.993.117L19 8V5h-3a1 1 0 0 1-.117-1.993L16 3zM8 3a1 1 0 0 1 .117 1.993L8 5H5v3a1 1 0 0 1-1.993.117L3 8V5a2 2 0 0 1 1.85-1.995L5 3z"
      />
    </g>
  </svg>
);

const FullscreenExitIcon = (attr) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{ "--color": "#000" }}
    {...attr}
  >
    <title>fullscreen_exit_line</title>
    <g fill="none" fillRule="evenodd">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
      <path
        fill="var(--color)"
        d="M20 7h-3V4a1 1 0 1 0-2 0v3a2 2 0 0 0 2 2h3a1 1 0 1 0 0-2M7 9a2 2 0 0 0 2-2V4a1 1 0 1 0-2 0v3H4a1 1 0 1 0 0 2zm0 8H4a1 1 0 1 1 0-2h3a2 2 0 0 1 2 2v3a1 1 0 1 1-2 0zm10-2a2 2 0 0 0-2 2v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2z"
      />
    </g>
  </svg>
);

export {
  // Brand/Tech Icons
  LinkedinIcon,
  VSCodeIcon,
  MotionIcon,
  NextAuthSmIcon,

  // UI Icons
  DownCircleIcon,
  DuotoneComputerIcon,
  DuotoneLightbulbIcon,
  DuotonePluginIcon,
  HandIcon,
  FullscreenEnterIcon,
  FullscreenExitIcon,
};
