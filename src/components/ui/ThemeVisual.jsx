import { useTheme } from "@/hooks/useTheme";

const Light = () => (
  <div className="absolute top-20 left-1/2 size-[500px] -translate-x-1/2 rounded-full bg-sky-200/60 blur-[80px]" />
);

const Dark = () => (
  <div className="absolute top-[80px] left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[80px]" />
);

const Lavender = () => (
  <>
    <div className="absolute top-16 left-1/5 size-[500px] rounded-full bg-purple-300/70 blur-[80px]" />
    <div className="absolute top-40 right-1/4 size-[400px] rounded-full bg-pink-300/50 blur-[80px]" />
  </>
);

const OneDarkPro = () => (
  <>
    <div className="absolute top-[80px] left-[80px] size-[500px] rounded-full bg-blue-500/20 blur-[80px]" />
    <div className="absolute right-20 bottom-[80px] size-[400px] rounded-full bg-purple-500/20 blur-[80px]" />
  </>
);

const Dracula = () => (
  <>
    <div className="absolute top-[50px] left-1/4 size-[500px] rounded-full bg-fuchsia-500/20 blur-[90px]" />
    <div className="absolute right-10 bottom-[80px] size-[400px] rounded-full bg-purple-500/20 blur-[90px]" />
  </>
);

const Nord = () => (
  <>
    <div className="absolute top-[50px] left-1/2 size-[550px] -translate-x-1/2 rounded-full bg-cyan-300/30 blur-[80px]" />
    <div className="absolute right-0 bottom-[90px] size-[400px] rounded-full bg-blue-300/30 blur-[80px]" />
  </>
);

const Cyber = () => (
  <>
    <div className="absolute top-[80px] left-0 size-[500px] rounded-full bg-pink-500/20 blur-[100px]" />
    <div className="absolute right-[30px] bottom-[100px] size-[450px] rounded-full bg-cyan-400/20 blur-[100px]" />

    <div className="absolute bottom-10 left-0 h-64 w-full min-w-[1000px] bg-[#020202]/20 [clip-path:polygon(0%_100%,0%_80%,6%_80%,6%_35%,14%_35%,14%_70%,22%_70%,22%_30%,32%_30%,32%_75%,44%_75%,44%_45%,56%_45%,56%_70%,68%_70%,68%_35%,80%_35%,80%_60%,92%_60%,92%_40%,100%_40%,100%_100%)]" />
    <div className="absolute right-20 bottom-5 h-64 w-full min-w-[1000px] bg-black/30 [clip-path:polygon(0%_100%,0%_78%,5%_78%,5%_48%,8%_45%,10%_48%,12%_48%,12%_70%,18%_70%,18%_35%,20%_30%,22%_35%,26%_35%,26%_62%,32%_62%,32%_28%,34%_24%,36%_28%,40%_28%,40%_74%,46%_74%,46%_42%,49%_40%,52%_42%,56%_42%,56%_68%,62%_68%,62%_36%,64%_33%,66%_36%,70%_36%,70%_58%,76%_58%,76%_32%,78%_27%,80%_32%,86%_32%,86%_60%,92%_60%,92%_44%,95%_40%,98%_44%,100%_44%,100%_100%)]" />
    <div className="absolute bottom-0 left-0 h-64 w-full min-w-[1000px] bg-[#020202]/80 [clip-path:polygon(0%_100%,0%_78%,5%_78%,5%_50%,7%_50%,7%_62%,9%_62%,9%_48%,11%_48%,12%_48%,12%_70%,16%_70%,16%_38%,18%_38%,18%_45%,20%_45%,20%_32%,22%_32%,26%_32%,26%_65%,32%_65%,32%_28%,34%_24%,36%_28%,40%_28%,40%_74%,46%_74%,46%_55%,48%_55%,48%_42%,50%_42%,50%_60%,52%_60%,56%_60%,56%_68%,62%_68%,62%_44%,64%_44%,64%_34%,66%_34%,66%_48%,68%_48%,70%_48%,70%_58%,76%_58%,76%_40%,78%_40%,78%_28%,80%_28%,86%_28%,86%_60%,92%_60%,92%_44%,95%_40%,98%_44%,100%_44%,100%_100%)]" />

    <div className="absolute -bottom-32 left-1/2 h-64 w-[150%] origin-bottom -translate-1/2 transform-[perspective(400px)_rotateX(65deg)] bg-[linear-gradient(to_right,#ffffff2d_1px,transparent_1px),linear-gradient(to_top,#ffffff2d_1px,transparent_1px)] mask-[linear-gradient(to_top,black_60%,transparent)] bg-size-[40px_40px] opacity-40" />
  </>
);

const Synthwave = () => (
  <>
    <div className="absolute top-[80px] left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[80px]" />
    <div className="absolute top-[90px] right-10 size-[420px] rounded-full bg-purple-500/20 blur-[90px]" />

    <div className="absolute bottom-28 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-300 via-orange-400 to-pink-500 opacity-70 blur-sm" />

    <div className="absolute bottom-0 h-64 w-full min-w-[1000px] bg-[#020202]/30 [clip-path:polygon(0%_100%,0%_78%,5%_78%,5%_50%,7%_50%,7%_62%,9%_62%,9%_48%,11%_48%,12%_48%,12%_70%,16%_70%,16%_38%,18%_38%,18%_45%,20%_45%,20%_32%,22%_32%,26%_32%,26%_65%,32%_65%,32%_28%,34%_24%,36%_28%,40%_28%,40%_74%,46%_74%,46%_55%,48%_55%,48%_42%,50%_42%,50%_60%,52%_60%,56%_60%,56%_68%,62%_68%,62%_44%,64%_44%,64%_34%,66%_34%,66%_48%,68%_48%,70%_48%,70%_58%,76%_58%,76%_40%,78%_40%,78%_28%,80%_28%,86%_28%,86%_60%,92%_60%,92%_44%,95%_40%,98%_44%,100%_44%,100%_100%)]" />
  </>
);

const OceanGlow = () => (
  <>
    <div className="absolute top-[90px] right-10 size-[420px] rounded-full bg-teal-400/15 blur-[80px]" />
    <div className="absolute top-[80px] left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-cyan-400/25 blur-[100px]" />

    <div className="absolute bottom-28 left-1/2 h-[100px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-300/40 blur-[80px]" />
    <div className="absolute bottom-0 h-52 w-full bg-linear-to-t from-slate-900 via-cyan-900/40 to-transparent" />

    <div className="absolute bottom-0 left-1/2 h-54 w-[180%] -translate-x-1/2 bg-black/20 [clip-path:polygon(0%_100%,0%_70%,10%_75%,20%_68%,30%_74%,40%_66%,50%_72%,60%_65%,70%_73%,80%_67%,90%_74%,100%_70%,100%_100%)]" />
    <div className="absolute bottom-0 h-34 w-[180%] bg-black/10 [clip-path:polygon(0%_100%,0%_70%,10%_75%,20%_68%,30%_74%,40%_66%,50%_72%,60%_65%,70%_73%,80%_67%,90%_74%,100%_70%,100%_100%)]" />
  </>
);

const Aurora = () => (
  <>
    <div className="absolute -top-40 left-1/2 size-[450px] -translate-x-1/2 rounded-full bg-green-400/40 blur-[80px] lg:size-[600px]" />
    <div className="absolute top-[80px] right-[80px] size-[450px] rounded-full bg-cyan-400/30 blur-[80px] lg:size-[600px]" />
  </>
);

const visualsMap = {
  light: <Light />,
  dark: <Dark />,
  lavender: <Lavender />,
  "one-dark-pro": <OneDarkPro />,
  dracula: <Dracula />,
  nord: <Nord />,
  cyber: <Cyber />,
  synthwave: <Synthwave />,
  "ocean-glow": <OceanGlow />,
  aurora: <Aurora />,
};

const ThemeVisual = () => {
  const { theme } = useTheme();

  const visual = visualsMap[theme] || null;

  return (
    <div
      aria-hidden
      role="presentation"
      className="theme-visual pointer-events-none absolute inset-0 -z-1 h-svh w-full overflow-hidden"
    >
      <div className="fancy-bg-1 absolute inset-0 -z-1 [--color:var(--text-color-g)]/25 [--gap:50px]" />
      {visual}
    </div>
  );
};

export default ThemeVisual;
export {
  Light,
  Dark,
  Lavender,
  OneDarkPro,
  Dracula,
  Nord,
  Cyber,
  Synthwave,
  OceanGlow,
  Aurora,
};
