const Loader = ({text = "LOADING"}) => (
  <div
    className="relative grid min-h-svh place-items-center font-semibold tracking-widest text-(--text-color-g)/50"
    role="status"
    aria-live="polite"
    aria-busy="true"
  >
    <span>{text}</span>
    <span className="absolute top-1/2 left-1/2 -translate-1/2 animate-[fillText_12s_cubic-bezier(0.4,0,0.2,1)_forwards] overflow-hidden text-(--text-color-g)">
      {text}
    </span>
  </div>
);

export default Loader;
