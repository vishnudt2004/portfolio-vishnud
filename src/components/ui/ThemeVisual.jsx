/**
 * Blur Up
 *
 * Render a smaller element with lower blur, then upscale it to achieve the same visual result
 * with better performance (blur is expensive, scaling is cheaper).
 *
 * Method:
 *   Pick a moderate scale (≈ 4–6), then:
 *   baseSize = finalSize / scale
 *   baseBlur = finalBlur / scale
 *
 *   visualOffset = (finalSize - baseSize) / 2
 *   newTop = originalTop + visualOffset
 *   newLeft  = originalLeft  + visualOffset
 *   newRight = originalRight - visualOffset
 *
 * Example:
 *   finalSize = 500px, finalBlur = 100px, scale = 5
 *   baseSize  = 500 / 5 = 100px
 *   baseBlur  = 100 / 5 = 20px
 *
 *   originalTop   = 80px  → newTop   = 80  + 200 = 280px  → top-[280px]
 *   originalLeft  = 40px  → newLeft  = 40  + 200 = 240px  → left-[240px]
 *   originalRight = 40px  → newRight = 40  + 200 = 240px → right-[240px]
 *
 *   Before: size-[500px] blur-[100px] top-20
 *   After:  size-[100px] blur-[20px] scale-[5] top-[280px]
 *
 * Note:
 *   - Only applies to featureless rounded glow divs (no content, no edges)
 *   - clip-path, gradient, and structured elements are excluded
 *   - will-change should NOT be added to individual glow elements
 *   - scale triggers compositor promotion — keep scale ≤ 5 to avoid excess VRAM
 *   - Trade-off: higher scale = better performance, lower scale = better quality
 */

import { lazy, useState } from "react";
import { useMount } from "react-use";

import { useTheme } from "@/contexts/ThemeContext";

const Light = () => (
  <div className="absolute top-[280px] left-1/2 size-[100px] -translate-x-1/2 scale-[5] rounded-full bg-sky-200/60 blur-[20px]" />
);

const Dark = () => (
  <div className="absolute top-[320px] left-1/2 size-[120px] -translate-x-1/2 scale-[5] rounded-full bg-indigo-500/20 blur-[20px]" />
);

const Lavender = () => (
  <>
    <div className="absolute top-[250px] left-1/3 size-[100px] scale-[5] rounded-full bg-purple-300/70 blur-[20px]" />
    <div className="absolute top-[360px] right-1/3 size-[80px] scale-[5] rounded-full bg-pink-300/50 blur-[20px]" />
  </>
);

const OneDarkPro = () => (
  <>
    <div className="absolute top-[280px] left-[280px] size-[100px] scale-[5] rounded-full bg-blue-500/20 blur-[20px]" />
    <div className="absolute right-[240px] bottom-[280px] size-[80px] scale-[5] rounded-full bg-purple-500/20 blur-[20px]" />
  </>
);

const Dracula = () => (
  <>
    <div className="absolute top-[250px] left-1/4 size-[100px] scale-[5] rounded-full bg-fuchsia-500/30 blur-[20px]" />
    <div className="absolute right-10 bottom-[280px] size-[80px] scale-[5] rounded-full bg-purple-500/30 blur-[20px]" />
  </>
);

const Nord = () => (
  <>
    <div className="absolute top-[250px] left-1/2 size-[110px] -translate-x-1/2 scale-[5] rounded-full bg-cyan-300/30 blur-[20px]" />
    <div className="absolute right-20 bottom-[280px] size-[80px] scale-[5] rounded-full bg-blue-300/30 blur-[20px]" />
  </>
);

const Cyber = () => (
  <>
    {/* Atmosphere Glow */}
    <div className="absolute top-[280px] left-[200px] size-[100px] scale-[5] rounded-full bg-pink-500/20 blur-[20px]" />
    <div className="absolute right-[210px] bottom-[300px] size-[90px] scale-[5] rounded-full bg-cyan-400/20 blur-[20px]" />

    {/* Skyline*/}
    <div className="absolute bottom-10 left-0 h-64 w-full min-w-[1000px] bg-[#020202]/20 [clip-path:polygon(0%_100%,0%_80%,6%_80%,6%_35%,14%_35%,14%_70%,22%_70%,22%_30%,32%_30%,32%_75%,44%_75%,44%_45%,56%_45%,56%_70%,68%_70%,68%_35%,80%_35%,80%_60%,92%_60%,92%_40%,100%_40%,100%_100%)]" />
    <div className="absolute right-20 bottom-5 h-64 w-full min-w-[1000px] bg-black/30 [clip-path:polygon(0%_100%,0%_78%,5%_78%,5%_48%,8%_45%,10%_48%,12%_48%,12%_70%,18%_70%,18%_35%,20%_30%,22%_35%,26%_35%,26%_62%,32%_62%,32%_28%,34%_24%,36%_28%,40%_28%,40%_74%,46%_74%,46%_42%,49%_40%,52%_42%,56%_42%,56%_68%,62%_68%,62%_36%,64%_33%,66%_36%,70%_36%,70%_58%,76%_58%,76%_32%,78%_27%,80%_32%,86%_32%,86%_60%,92%_60%,92%_44%,95%_40%,98%_44%,100%_44%,100%_100%)]" />
    <div className="absolute bottom-0 left-0 h-64 w-full min-w-[1000px] bg-[#020202]/80 [clip-path:polygon(0%_100%,0%_78%,5%_78%,5%_50%,7%_50%,7%_62%,9%_62%,9%_48%,11%_48%,12%_48%,12%_70%,16%_70%,16%_38%,18%_38%,18%_45%,20%_45%,20%_32%,22%_32%,26%_32%,26%_65%,32%_65%,32%_28%,34%_24%,36%_28%,40%_28%,40%_74%,46%_74%,46%_55%,48%_55%,48%_42%,50%_42%,50%_60%,52%_60%,56%_60%,56%_68%,62%_68%,62%_44%,64%_44%,64%_34%,66%_34%,66%_48%,68%_48%,70%_48%,70%_58%,76%_58%,76%_40%,78%_40%,78%_28%,80%_28%,86%_28%,86%_60%,92%_60%,92%_44%,95%_40%,98%_44%,100%_44%,100%_100%)]" />

    {/* Neon Grid Floor */}
    <div className="absolute -bottom-32 left-1/2 h-64 w-[150%] origin-bottom -translate-1/2 transform-[perspective(400px)_rotateX(65deg)] bg-[linear-gradient(to_right,#ffffff2d_1px,transparent_1px),linear-gradient(to_top,#ffffff2d_1px,transparent_1px)] mask-[linear-gradient(to_top,black_60%,transparent)] bg-size-[40px_40px] opacity-40" />
  </>
);

const Synthwave = () => (
  <>
    {/* Atmosphere Glow */}
    <div className="absolute top-[280px] left-1/2 size-[104px] -translate-x-1/2 scale-[5] rounded-full bg-fuchsia-500/10 blur-[20px]" />
    <div className="absolute top-[290px] right-10 size-[84px] scale-[5] rounded-full bg-purple-500/20 blur-[20px]" />

    <div className="blur-x100px absolute bottom-28 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-300 via-orange-400 to-pink-500 opacity-70 blur-sm" />
    <div className="absolute bottom-0 h-52 w-full bg-gradient-to-t from-purple-900/20 via-purple-700/10 to-transparent" />

    <div className="absolute bottom-0 h-64 w-full min-w-[1000px] bg-[#020202]/30 [clip-path:polygon(0%_100%,0%_78%,5%_78%,5%_50%,7%_50%,7%_62%,9%_62%,9%_48%,11%_48%,12%_48%,12%_70%,16%_70%,16%_38%,18%_38%,18%_45%,20%_45%,20%_32%,22%_32%,26%_32%,26%_65%,32%_65%,32%_28%,34%_24%,36%_28%,40%_28%,40%_74%,46%_74%,46%_55%,48%_55%,48%_42%,50%_42%,50%_60%,52%_60%,56%_60%,56%_68%,62%_68%,62%_44%,64%_44%,64%_34%,66%_34%,66%_48%,68%_48%,70%_48%,70%_58%,76%_58%,76%_40%,78%_40%,78%_28%,80%_28%,86%_28%,86%_60%,92%_60%,92%_44%,95%_40%,98%_44%,100%_44%,100%_100%)]" />
  </>
);

const OceanGlow = () => (
  <>
    {/* Water Glow */}
    <div className="absolute top-[280px] left-1/2 size-[104px] -translate-x-1/2 scale-[5] rounded-full bg-cyan-400/25 blur-[20px]" />
    <div className="absolute top-[290px] right-10 size-[84px] scale-[5] rounded-full bg-teal-400/15 blur-[20px]" />

    {/* Horizon Glow */}
    <div className="absolute bottom-28 left-1/2 h-[28px] w-[84px] -translate-x-1/2 scale-[5] rounded-full bg-cyan-300/40 blur-[20px]" />

    {/* Ocean Surface */}
    <div className="absolute bottom-0 h-52 w-full bg-linear-to-t from-slate-900 via-cyan-900/40 to-transparent" />

    {/* Subtle Wave Silhouette */}
    <div className="absolute bottom-0 left-1/2 h-54 w-[180%] -translate-x-1/2 bg-black/20 [clip-path:polygon(0%_100%,0%_70%,10%_75%,20%_68%,30%_74%,40%_66%,50%_72%,60%_65%,70%_73%,80%_67%,90%_74%,100%_70%,100%_100%)]" />
    <div className="absolute bottom-0 h-34 w-[180%] bg-black/10 [clip-path:polygon(0%_100%,0%_70%,10%_75%,20%_68%,30%_74%,40%_66%,50%_72%,60%_65%,70%_73%,80%_67%,90%_74%,100%_70%,100%_100%)]" />
  </>
);

const Aurora = () => (
  <>
    <div className="absolute top-[20px] left-1/2 size-[90px] -translate-x-1/2 scale-[5] rounded-full bg-green-400/40 blur-[20px] lg:size-[120px]" />
    <div className="absolute top-[280px] right-[280px] size-[90px] scale-[5] rounded-full bg-cyan-400/30 blur-[20px] lg:size-[120px]" />
  </>
);

const visualsMap = {
  light: lazy(() =>
    import("./ThemeVisual").then((module) => ({ default: module.Light })),
  ),
  dark: lazy(() =>
    import("./ThemeVisual").then((module) => ({ default: module.Dark })),
  ),
  lavender: lazy(() =>
    import("./ThemeVisual").then((module) => ({ default: module.Lavender })),
  ),
  "one-dark-pro": lazy(() =>
    import("./ThemeVisual").then((module) => ({ default: module.OneDarkPro })),
  ),
  dracula: lazy(() =>
    import("./ThemeVisual").then((module) => ({ default: module.Dracula })),
  ),
  nord: lazy(() =>
    import("./ThemeVisual").then((module) => ({ default: module.Nord })),
  ),
  cyber: lazy(() =>
    import("./ThemeVisual").then((module) => ({ default: module.Cyber })),
  ),
  synthwave: lazy(() =>
    import("./ThemeVisual").then((module) => ({ default: module.Synthwave })),
  ),
  "ocean-glow": lazy(() =>
    import("./ThemeVisual").then((module) => ({ default: module.OceanGlow })),
  ),
  aurora: lazy(() =>
    import("./ThemeVisual").then((module) => ({ default: module.Aurora })),
  ),
};

const ThemeVisual = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useMount(() => setMounted(true));

  if (!mounted) return null;

  const Visual = visualsMap[theme];

  return (
    <div
      aria-hidden
      role="presentation"
      className="theme-visual pointer-events-none absolute inset-0 -z-1 h-svh w-full overflow-hidden"
    >
      <div className="fancy-bg-1 absolute inset-0 -z-1 [--color:var(--text-color-g)]/25 [--gap:50px]" />
      {Visual && <Visual />}
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
